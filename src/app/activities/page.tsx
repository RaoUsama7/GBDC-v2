import CloudImage from '@/components/CloudImage'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import PaginationControls from '@/components/PaginationControls'
import { activitiesData } from '@/types/randomTypes'
import { getData } from '@/utils/getData'

export default async function Activities({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data: activitiesData[] = await getData('activities')

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '6'

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const filterData = data?.reverse().slice(start, end)

  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Activities'} />

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4 px-8 shadow-md sm:px-0">
        {Array.isArray(data) &&
          filterData?.map((item: any) => (
            <div
              key={item.id}
              className="flex w-96 flex-col items-center rounded-lg bg-slate-300 px-2 pt-2 text-center"
            >
              <CloudImage
                width={800}
                height={800}
                src={item.imgUrl}
                alt={item.title}
                customStyles={
                  'h-96 w-96 rounded-tl-xl rounded-tr-xl object-cover object-center shadow-md  sm:h-[390px] sm:w-[370px] '
                }
              />

              <div className=" py-6  text-base font-medium tracking-tight text-slate-900">
                {item.title}
              </div>
            </div>
          ))}
      </div>
      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        totalPosts={data.length}
        perPage={per_page}
      />
    </Container>
  )
}
