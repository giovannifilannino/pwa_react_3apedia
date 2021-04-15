import { useEffect, useState } from "react";
import './PostList.css';
import Post from "./Post";

const PostList = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const postListResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
            const parsedResponse = await postListResponse.json();
            setPostList(parsedResponse);
        }
        fetchData();
    }, []);

    return (<div className='postContainer'>
        {
            postList.map(post => <Post key={post.id} title={post.title} enabled={post.completed} />)
        }
    </div>)
}

export default PostList;