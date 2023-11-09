import dateFormatter from "@/app/lib/dateFormatter";
import { getPostData, getSortedPostsData } from "@/app/lib/posts"
import Link from "next/link";
import { notFound } from "next/navigation";

type Props={
    params:{
        postId:string,
    },

}




export function generateStaticParams () {

    const posts = getSortedPostsData();

    return posts.map(post=>({
        postId:post.id,
    }))
}


export function generateMetadata({params:{postId}}:Props) {


    const posts = getSortedPostsData();

    const post = posts.find(post => post.id === postId)
    
    if (!post) return{
        
        title:"Post Not Found"
    }
        
    

    return{
        title:post?.title
    }


}

export default async function DynamicPostPage({params:{postId}}:Props) {


    const posts = getSortedPostsData();

    

    if (!posts.find(post=> post.id === postId)) {

        return notFound();
        
    }
    
    const  {title,date,contentHtml} =await getPostData(postId);

    const formattedDate = dateFormatter(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">
                {formattedDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/posts">← Back to Posts</Link>
                </p>
            </article>
        </main>
  )
}
