import React from 'react';
import './Topic.css'

const Topic = (props) => {
    // console.log(props.topic);
    return (
        <div className="topic">
            <h1>{props.topic.name}</h1>
            <h3>Email : {props.topic.email}</h3>
            <h3> Price : ${props.topic.Price}</h3>
            <button className="main-button" 
            onClick={()=> props.addCourse(props.topic)}>Enroll Now</button>
            
        </div>
    );
};

export default Topic;