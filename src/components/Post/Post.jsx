import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'20px'
    }
    const handleShowDetail =() =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>post of id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><div>Show Details</div></Link>
            <button onClick={handleShowDetail}>Click to see</button>
        </div>
    );
};

export default Post;