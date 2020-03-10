import PostHead from "./postHead";
import PostBody from "./postBody";
import Vote from "./vote";
import commentImage from "../res/img/commentIcon.svg";

const icon = (props) => {
    return (
        <div className="comments">
            <img src={require("../res/img/commentIcon.svg").default} alt="<comments>"></img>
            {props.count}
        </div>
    );
}

const Comment = (props) => {
    var c = props.comment;

    return (
        <div className="comment">
            <Vote up={c.upvotes} down={c.downvotes}/>
            <div className="content">
                <PostHead author={c.author} />
                <PostBody>
                    {c.text}
                </PostBody>
            </div>
        </div>
    );
}

const CommentIcon = (props) => {
    return (
        <div className="comments" onClick={props.onClick}>
            <img src={commentImage} alt="<comments>"></img>
            {props.count}
        </div>
    );
}

const CommentSection = (props) => {
    var content;
    const comments = props.comments;

    if(!comments || comments.length<1) {
        content = <p>No Comments yet.<br/>Why not add one?"</p>
    } else {
        content = props.comments.map((comment, index) => { 
            return (<Comment key={index} comment={comment}/>);
        });
    }
    
    return (
        <div className="commentSection">
            {content}
        </div>
    );
}

export {CommentIcon, CommentSection};
export default Comment;