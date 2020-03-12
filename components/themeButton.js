import { Helmet } from 'react-helmet'
import { useEffect, useReducer, useState} from "react";

import dark from "!raw-loader!../style/colorShemes/dark.css";
import bright from "!raw-loader!../style/colorShemes/bright.css";

function ThemeButton(props) {

    var [themeDark, setThemeDark] = useState(true);
    
    function toggle () {
        setThemeDark(!themeDark);
        console.log(dark);
        console.log(bright);
    }

    return (
        <div>
            <img src={require("../res/img/theme.svg")} onClick={toggle}></img>
            <Helmet>
                <style>
                    { themeDark ? dark : bright }
                </style>
            </Helmet>
        </div>
    );
}

export default ThemeButton;