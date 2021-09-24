import React from 'react'
import "./SingleProject.css"

function SingleProject({image, description}) {
    return (
        <div className="ProjectPage_Main"> 
            <div className="projectpage_box">
                <div className="projectpage_card1">
                    <img  src={image} className="projectpage_image"/>
                </div>
                <div className="projectpage_card2">
                    <h2>{description}</h2>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
