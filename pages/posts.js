
import Header from "../components/layout/header"
import examplePosts from "./example-posts.json";
import Post from "../components/post"
import PostingForm from "../components/postingForm"
import Comment from "../components/comment";
import "../style/post.sass";

const App = (props) => {
    const post_objects = [];

    //generate components from posts
    props.posts.forEach((post, index) => {
        post_objects.push(
            <Post post={post} key={index} />
        );
    });

    return (
        <>
            <Header />
            <div className="container">
                <noscript>JavaScript: Some features are diabled!</noscript>
                <PostingForm user="FELIX" />
                {post_objects}
                <Comment comment={{upvotes: 4, downvotes: 1, author: "Test_Comment", text:"Pardon the interruption\nJust testing"}} />
            </div>
        </>
    );
};

const Index = () => (<App posts={examplePosts}/>);

export default Index;
