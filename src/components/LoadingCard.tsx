import Image from 'next/image'

export default function LoadingCard() {
  return (
    <Image
      alt="loading......"
      height={500}
      width={500}
      className="mx-auto mb-60 mt-28 h-44 w-44 animate-pulse  transition duration-500"
      src="/logo.png"
    />
  )
}
