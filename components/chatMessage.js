import PostHead from "./postHead";
import PostBody from "./postBody";

const ChatMessage = (props) => {
    var msg = props.message;

    return (
        <div className="chatMessage">
            <div className="content">
                <div className="head"> {msg.author}</div>
                <PostBody>
                    {msg.text}
                </PostBody>
            </div>
        </div>
    );
}

export default ChatMessage;