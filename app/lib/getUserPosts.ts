export default async function getUserPosts(userId:string) {

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);

        return res.json();
        
    }catch(err:any){

        throw new Error(err.message);
    }
}
