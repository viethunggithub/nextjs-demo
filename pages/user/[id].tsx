export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const users = await res.json()
    const paths = users.map(user => ({
        params: { id: user.id.toString() },
    }))
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
    const user = await res.json()
    if (!user) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            user
        }
    }
}


export default function UserDetails({user}) {
    return (
        <div>
            UsersDetails Page <b>{user.email}</b>
        </div>
    )
}