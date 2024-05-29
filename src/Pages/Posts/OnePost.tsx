import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import Post from "./Post";
import { useParams } from "react-router-dom";

const OnePostPage = () => {

    const params = useParams();

    const postsQuery = useQuery({
        queryKey: ["posts", params.id],
        queryFn: () => fetchOnePost(params.id),
    });

    if (postsQuery.status === "pending") return <h1>Loading...</h1>
    if (postsQuery.status === "error") {
        return <h1>{JSON.stringify(postsQuery.error)}</h1>
    }

    return (
        <div>
            <h1>Post: {postsQuery.data.title}</h1>
            <div>
                {postsQuery.data.body}
            </div>
            
        </div>
    )
};

const fetchOnePost = (id:string | undefined) => {
    return axios
        .get(`https://dummyjson.com/posts/${id}`)
        .then(res => res.data);
}

export default OnePostPage;