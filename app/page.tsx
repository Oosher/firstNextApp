import { Metadata } from 'next'


export const metadata : Metadata = {
  title:"Home",


  description:"Welcome welcome",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      
    </main>
  )
}
