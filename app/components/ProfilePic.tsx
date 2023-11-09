import Image from "next/image";






export default function ProfilePic() {
  return (
    <section>
        <Image src="/images/catDog.jpg" width={200} height={200} alt="catDog" priority={true}
        className=" border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full  mx-auto mt-8"/>
    </section>
  )
}
