import { Metadata } from 'next'
import ProfilePic from './components/ProfilePic'


export const metadata : Metadata = {
  title:"Home",


  description:"Welcome welcome",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProfilePic/>
      
      <p className=' mt-12 mb-12 text-3xl text-center dark:text-white'>Hello 👋</p>
      <span className=' whitespace-nowrap'>
        I&apos;m <span className=' font-bold'>Osher</span>
      </span>
    </main>
  )
}
