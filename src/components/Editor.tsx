'use client'
import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'

export default function TextEditor({
  desc,
  setDesc,
  height,
}: {
  desc: string
  setDesc: any
  height: number
}) {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      //   console.log((editorRef.current as any).getContent());
      setDesc((editorRef.current as any).getContent())
    }
  }

  const apikey = process.env.NEXT_PUBLIC_EDITOR_API_KEY
  return (
    <>
      <Editor
        apiKey={apikey}
        onInit={(evt, editor) => (editorRef.current = editor as any)}
        initialValue={desc}
        init={{
          height: height,
          width: '100%',
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button onClick={log} className="rounded-md bg-sky-400 px-4 py-2">
        Submit Blog
      </button>
    </>
  )
}
