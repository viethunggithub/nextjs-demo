import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

export default function ListUser({ users }) {
    return (
        <div>
            <h1>List User</h1>
            {
                users.map(user => <Link href={`/user/${user.id}`} key={user.id}>
                    <a>
                        <p>{user.name}</p>
                    </a>
                </Link>)
            }
        </div>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    if (!users) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            users
        }
    }
}