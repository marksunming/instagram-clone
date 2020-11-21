import React from 'react';
import "./Post.css";

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/* Header => avatar + username */}

            <img className="post__image" src="https://sethreid.co.nz/content/uploads/2017/05/react-logo-2.png" alt=""/>
            {/* image */}

            <h4>Username: caption</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
