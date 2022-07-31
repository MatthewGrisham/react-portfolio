import React from "react";
import Project from "./Project";

const projects = [
    {
        id:"",
        title:"",
        langugaes:"",
        image:"",
        description:"",
        repo:"",
        live:"",
    },
];

function Portfolio() {
    return (
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  }