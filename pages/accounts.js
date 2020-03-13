import Header from "../components/layout/header";
import style from "../style/acc.sass";
style.use();
import { Helmet } from 'react-helmet'
import { useEffect } from "react";



const Index = () => {
    useEffect(() => {
        return () => {
            style.unuse();
        }
    }, [])

    var accountCount = 0;
    return(
        <div className="container">
            <object data={require("../res/img/eyeOfJudgementEllipse.svg").default} type="image/svg+xml">
                <p>THE EYE OF JUDGEMENT IS ON V̗͉̼̩̱̦̰̭̲͖͓̥ͬ̊̓̈́̓̔̾͂̇͑̓̌A͕̤̯̥͚͈͚̝̮ͅCA͚͖͙ͧ̋̆͞͠T̛̘̠̼̝̝̤͈̙̞̲̤͚͘͟Iͤ̓ͪ̍ͯ̉ͩ̈͛ͨ͂ͪ͘͡҉O̡̜N</p> 
            </object>

            <p className="triggered" style={{color: "#ff00fe"}}>HAND OVER YOUR ACCOUNT DETAILS</p>
            <h1>DRKSLV Account</h1>
            <p>
                {accountCount} people have already signed up for a DRKSLV Account!
            </p>
        </div>
    )
};

export default Index;

Index.getLayout = page => <><Header />{page}</>;