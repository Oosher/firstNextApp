import { Metadata } from 'next'
import { getAllUsers } from '../lib/getAllUsers'
import Link from 'next/link';
import { User } from '@/types';





export const metadata :Metadata = {

    title:"Users",

    description:"all users info"
}
export default async function Users() {

    const usersData : Promise<User[]> = getAllUsers();


    const users = await usersData;



    const pageContent = (
        <section>{users.map(user =><>
            <p key={user.id} className=' dark:text-white mt-6 mx-auto max-w-2xl w-fit'>
                <Link href={`/users/${user.id}`}>
                    {user.name}
                </Link>
            </p>
            </>)}</section>
    )

  return pageContent;
}

