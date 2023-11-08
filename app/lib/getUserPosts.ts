export default async function getUserPosts(userId:string) {

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`,{next:{revalidate: 60}});

        return res.json();
        
    }catch(err:any){

        return undefined;
    }
}
