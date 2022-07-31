// Recent Photo or Avatar
// Short Biography

import React from "react";

function About() {
    return (
        <div>
            <p className="content is-medium">Previous Law enforcemnt becomign a Full Stack Developer</p>
            <hr />
            <img className="my-pic" src={process.env.PUBLIC.URL + '/img/profile.jpg'} alt="Matt Grisham"/>
            <p className="content is-italic mt-4">
                I'm Matthew, a former law enforcemnt officer looking for a change in my carrer. 
                So I am learning the full stack process to switch gears and career fields. 
            </p>
            <p className="content">
                I always act as a product manager for learning resources, which guides
                users to what they need in the moment, but also enable them to explore
                content on their terms using video, audio, documentation, and so much
                more in an advanced learning ecosystem.
            </p>
        </div>
    )
}