import { Helmet } from 'react-helmet'
import { useEffect, useReducer, useState} from "react";

import dark from "!raw-loader!../style/colorShemes/dark.css";
import bright from "!raw-loader!../style/colorShemes/bright.css";

function ThemeButton(props) {
    var [themeDark, setThemeDark] = useState( false );

    useEffect(() => {
        setThemeDark(localStorage.getItem("edgy") === "true");
    }, []);

    
    function toggle () {
        localStorage.setItem("edgy", (!themeDark).toString());
        setThemeDark(!themeDark);
    }

    return (
        <div>
            <img src={require("../res/img/theme.svg").default} onClick={toggle} height="20px"></img>
            <Helmet>
                <style>
                    { themeDark ? dark : bright }
                </style>
            </Helmet>
        </div>
    );
}

export default ThemeButton;