import Link from "next/link"
import Search from "./Search"
import DarkModSwitch from "./DarkModSwitch"

export default function Navbar() {



  return (
    <nav className="bg-slate-600 p-4 flex md:gap-20  sm:gap-2 justify-center flex-col md:flex-row sticky top-0 drop-shadow-xl">
    
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">Go Home</Link>
      </h1>
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/about">About</Link>
      </h1>
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/users">Users</Link>
      </h1>
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/posts">posts</Link>
      </h1>
      <Search/>
      <DarkModSwitch/>
    </nav>
  )
}
