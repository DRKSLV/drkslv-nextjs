
import Header from "../components/layout/header"
import style from "../style/style.sass";
style.use();
import { useEffect, useState } from "react";

const App = (props) => {
    var [browserwarning, setWarning] = useState(null);

    useEffect(() => {
        if(msieversion() !== 0) {
            setWarning(<p style={{color:"red", textAlign:"center"}}><b>No Internet Explorer Support go away</b></p>);
        }
    }, []);

    return (
        <>
            <div className="container">
                <noscript>JavaScript: Some features are diabled!</noscript>
                { 
                    browserwarning === null ?
                        <p style={{textAlign:"center"}}>
                            HELLO CITIZENS
                            <br/>
                            <b>WELCOME</b>
                        </p>
                    : browserwarning
                }
            </div>
        </>
    );
};

const Index = () => (<App />);
Index.getLayout = page => <><Header />{page}</>;

export default Index;



function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    }
    else  // If another browser, return 0
    {
        return 0;
    }
}