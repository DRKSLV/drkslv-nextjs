import React from 'react';

function PostingForm (props) {
    var loggedInAs = props.user;

    return (
        <form id = "post" className="postingForm" action ="create" method="post">
            <input className="title" type="text" name="title" placeholder="The post's title" autoComplete="off" />
            <textarea form="post" id="text" name="text" placeholder="Go ahead, unleash your creative Genius!" rows="4" autoComplete="off"></textarea>
            <input type="submit" value="Post" data-anonymous={!Boolean(loggedInAs)} />
            {  loggedInAs ? (
                    <div className="author loggedIn">
                        as
                        <a href="/accounts/?resumeTo=/posts" target="_blank">{loggedInAs}</a>
                    </div>
            ):(
                    <div className="author anonymous">
                        as 
                        <a href="/accounts/?resumeTo=/posts" target="_blank"> &lt;UNKNOWN&gt;</a>
                    </div>               
            )}
        </form>
    );
}

export default PostingForm;