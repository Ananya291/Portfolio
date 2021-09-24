import React from 'react'
import "./ProjectPage.css"
import projectimage from "./project_image.png"
import projectimage2 from "./project_image2.png"
import projectimage3 from "./project_image3.png"
import SingleProject from './SingleProject'

function ProjectPage() {
    return (
        <div className="ProjectPage_Main">
            <div className="projectpage_title">
                <h2>Want me to build amazing website for you?</h2>
            </div>
            <SingleProject image={projectimage} description="jadhfaifqkuho"/>
            <SingleProject image={projectimage2} description="ajfopwea"/>
            <SingleProject image={projectimage3} description="qkjdpoqjp"/>
        </div>
    )
}

export default ProjectPage
