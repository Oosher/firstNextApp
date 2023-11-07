




export async function getAllUsers() {


    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        return res.json() ;

    }catch(err:any) {

        throw new Error(err.message);
        
    }

   

    



  
    
}