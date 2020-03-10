import {useState, useEffect} from 'react';
import axios from "axios";

function Vote(props) {
    //Props
    var up = props.up;
    var down = props.down;

    //Hooks
    const [vote, setVote] = useState(0);
    const [img, setImg] = useState("");

    //Api access
    //replace dog api with actual vote api
    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            setImg(response.data.message);
        })
        .catch(error => {
            console.log(error);
        });
    }, [vote]);

    //events
    function click(val) {
        setVote(val);
    }

    return (
        <div className="vote wrapper">
            <img className="vote up" src={require("../res/img/upvote5.svg").default} alt="<upvote>" data-active={vote===1} onClick={click.bind(null, 1)}></img>
            <span>{up - down}</span> 
            <img className="vote down" src={require("../res/img/downvote5.svg").default} alt="<downvote>" data-active={vote===-1} onClick={click.bind(null, -1)}></img>
        </div>
    );
}

export default Vote;