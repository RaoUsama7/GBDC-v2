import BlogPostCard from '@/components/BlogPostCard'
import { activitiesData } from '@/types/randomTypes'
import { banglaFont } from '@/utils/fonts'
import { getData } from '@/utils/getData'

export default async function Blog() {
  const data: activitiesData[] = await getData('posts')

  return (
    <div
      className={`mx-auto my-6 flex max-w-5xl flex-col gap-y-8 sm:gap-y-4 ${banglaFont.className}`}
    >
      {/* Blog Post Card */}

      {Array.isArray(data) &&
        data
          ?.reverse()
          .map((item: activitiesData) => (
            <BlogPostCard item={item} key={item.id} />
          ))}
    </div>
  )
}
