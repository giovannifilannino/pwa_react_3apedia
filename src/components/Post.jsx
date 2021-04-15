import './Post.css';


const Post = ({title, enabled}) => {

    return (<>
        <div className='container'>
            <div>Title: {title}</div>
            <div>Completed: <input readOnly type='checkbox' checked={enabled} /></div>
        </div>
    </>);
    
}

export default Post;