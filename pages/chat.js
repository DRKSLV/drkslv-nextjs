import Header from "../components/layout/header";
import "../style/chat.sass";
import ChatWindow from "../components/chatWindow";

const App = (props) => {

    return (
        <>
            <div className="container">
                <noscript>JavaScript: Some features are diabled!</noscript>
                <ChatWindow/>
            </div>
        </>
    );
};

const Index = () => (<App />);
Index.getLayout = page => <><Header />{page}</>;

export default Index;