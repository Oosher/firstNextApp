import { Post } from "@/types"



type Props = {
        postPromise : Promise<Post>,
}

export default async function UserPosts({postPromise}:Props) {


    const posts = [await postPromise] ;



    const content = posts.map(post =>
                    <article  key={post.id+1}  className=' dark:text-white mt-6 mx-auto max-w-2xl w-fit'>
                        <h2 className="text-4xl  font-bold mb-6">{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                )



  return content ;


    }