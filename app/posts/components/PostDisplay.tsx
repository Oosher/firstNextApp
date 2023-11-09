import dateFormatter from '@/app/lib/dateFormatter';
import { BlogPost } from '@/types'
import Link from 'next/link';
import React from 'react'

type Props = {

    post:BlogPost ,

}

export default function PostDisplay({post}: Props)  {


    const {id,title,date} = post ;


    const formattedDate = dateFormatter(date) ;




  return (
    <li className="mt-4 text-2xl dark:text-white/90">
        <Link href={`/posts/${id}`}>{title}</Link>
        <br />
        <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  )
}