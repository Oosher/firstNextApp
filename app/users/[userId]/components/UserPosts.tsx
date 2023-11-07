import { Post } from "@/types"



type Props = {
        postPromise : Promise<Post>,
}

export default async function UserPosts({postPromise}:Props) {


    const posts = [await postPromise] ;



    const content = posts.map(post =>
                    <article  key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                )



  return content ;


    }