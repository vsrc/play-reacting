import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number,
    title: string,
    body: string
}

const PostsPage = () => {

    const postsQuery = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        // placeholderData: [{id: 1, title: 'Initial Data'}]
    });

    if (postsQuery.status === "pending") return <h1>Loading...</h1>
    if (postsQuery.status === "error") {
        return <h1>{JSON.stringify(postsQuery.error)}</h1>
    }

    // if (postsQuery.status === "success") {
    //     console.log(postsQuery.data)
    //     return 
    // }

    return (
        <div>
            <h1>Posts</h1>
            <ol>
                {postsQuery.data.posts.map((post: Post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        </div>
    )
};

const fetchPosts = () => {
    return axios
        .get('https://dummyjson.com/posts')
        .then(res => res.data);
}

export default PostsPage;