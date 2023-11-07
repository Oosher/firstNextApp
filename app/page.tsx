import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata : Metadata = {
  title:"Home",


  description:"Welcome welcome",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <Link href="/about">About</Link>
    </main>
  )
}
