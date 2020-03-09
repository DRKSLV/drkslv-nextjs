
const PostHead = (props) => (
    <div className="head">
        {props.children}
        <span className="small">posted by {props.author}</span> 
    </div>
);

export default PostHead;