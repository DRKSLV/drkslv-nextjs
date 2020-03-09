import {useState} from "react"

import Vote from "./vote";
import PostHead from "./postHead";
import PostBody from "./postBody";
import {CommentIcon, CommentSection} from "./comment.js";

function Post(props) {
    var p = props.post;
    const [comments, setComments] = useState(["no"]);

    return (
        <>
            <div className="post wordwrap">
                <Vote up={p.upvotes} down={p.downvotes}/>
                <div className="content">
                    <PostHead author={p.author}>
                        <CommentIcon count = "0" onClick={() => setComments([])}/>
                        <b>{p.title}</b>
                        <br/>
                    </PostHead>
                    <PostBody>
                        {p.text}
                    </PostBody>
                </div>
            </div>
            {
                comments[0]!=="no" ? (
                    <CommentSection comments={comments}/>
                ) : (
                    <></>
                )
            }
        </>
    );
}



export default Post;