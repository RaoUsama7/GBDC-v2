'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import TextEditor from '../Editor'

export default function AddBlog() {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [slug, setSlug] = useState('')

  const router = useRouter()
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        slug,
        imgUrl,
        desc,
      }),
    })
    setTitle('')
    setImgUrl('')
    router.push('/blog')
  }

  const handleUpload = (result: any) => {
    setImgUrl(result.info.public_id)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-20 flex w-[800px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4"
    >
      <h1 className="text-3xl ">Add Blog</h1>

      <CldUploadButton
        uploadPreset="izet8iap"
        className=" rounded-md  bg-sky-600 px-4 py-2"
        onUpload={handleUpload}
      />
      <input
        placeholder="Enter Blog Title...."
        className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />

      <input
        placeholder="Enter Slug"
        className="mt-4 w-full rounded-md border border-sky-400 px-4 py-2 text-black"
        onChange={(e) => setSlug(e.target.value)}
        type="text"
      />
      <TextEditor desc={desc} setDesc={setDesc} height={500} />
    </form>
  )
}
