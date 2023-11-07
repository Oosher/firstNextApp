

export default async function getUserComments(userId:string) {

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${userId}`);

        return res.json();

    }catch(err:any){
        throw new Error(err.message);

    }
}
