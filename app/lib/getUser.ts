


export default async function getUser (userId:string){

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        return res.json();

    }catch(err:any){ 
        return undefined;
        
    }

}