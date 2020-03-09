
const PostBody = (props) => (
    <div className="body">
       <p style={{"whiteSpace":"pre-wrap"}}>
            {props.children}
        </p>
    </div>
);

export default PostBody;