
import Header from "../components/layout/header"
import "../style/style.sass";

const App = (props) => {

    return (
        <>
            <div className="container">
                <noscript>JavaScript: Some features are diabled!</noscript>
                <p style={{textAlign:"center"}}>
                    HELLO CITIZENS
                    <br/>
                    <b>WELCOME</b>
                </p>
            </div>
        </>
    );
};

const Index = () => (<App />);
Index.getLayout = page => <><Header />{page}</>;

export default Index;