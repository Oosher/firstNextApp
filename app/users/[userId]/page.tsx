import getUser from "@/app/lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";
import { Post, User } from "@/types";
import { Suspense, use } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import { getAllUsers } from "@/app/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
    params:{
        userId:string;
    }
}

export async function generateMetadata({params:{userId}}:Params):Promise<Metadata>{
    const userData: Promise<User> = getUser(userId);
    
    const user : User = await userData ;


    if (!user.name) {

        return {

            title : "User not found",
        }
        
    }

    return  {

        title:user.name ,

        description :` The page of ${user.name}`,

    }
}

export default async function UserPage({params:{userId}}:Params) {

    const userPost:Promise<Post> = getUserPosts(userId);    

    const userData: Promise<User> = getUser(userId);

/*     const [user,userPosts] = await Promise.all([userData,userPost]); */

    const user = await userData ;


    if (!user.name) return notFound();

    
  return <>
        <h2>{user.name}</h2>
        <Suspense fallback={<h2>Loading ....</h2>}> 
             <UserPosts postPromise= {userPost}/>
        </Suspense>
        </>

  
}





export  async function generateStaticParams() {
    const usersData : Promise<User[]> = getAllUsers();

    const users =  await usersData ;


    return users.map(user=>({ userId:user.id.toString() })) ;

}