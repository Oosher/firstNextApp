
import { Metadata } from "next"
import styles from "./styles.module.css"


export const metadata : Metadata = {
  title:"About",

  description:"About Page",
}

export default function layout({children,}:{children: React.ReactNode}) {
  return (
    <>
      <nav>About Nav</nav>
      <main className={styles.main}> {children}</main>
    </>
  )
}
