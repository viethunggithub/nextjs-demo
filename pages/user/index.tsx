import Link from 'next/link'
import React from 'react'
// import styleUser from '../../styles/User.module.css'
// import styled from 'styled-components'
// import { gql } from '@apollo/client'
// import client from '../../apollo'


export default function ListUser({ users }) {
    console.log(users)
    return (
        <div>
            <h1>List User</h1>
            {
                users.map(user => <Link href={`/user/${user.id}`} key={user.id}>
                    <a>
                        <p>{user.email}</p>
                    </a>
                </Link>)
            }
        </div>
    )
}
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
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


    // const { data } = await client.query({
    //     query: gql`
    //       query Countries {
    //         countries {
    //           code
    //           name
    //           emoji
    //         }
    //       }
    //     `,
    // });
    // return {
    //     props: {
    //       countries: data.countries,
    //     },
    //  };