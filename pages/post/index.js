import React from 'react'

export default function Posts({ comments }) {
    console.log(comments)
    return (
        <div>
            <h5>ist Post</h5>
            {
                comments.map(cmt => <p key={cmt.id}>{cmt.email}</p>)
            }
        </div>
    )
}
export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await res.json()
    return {
        props: {
            comments
        }
    }
}