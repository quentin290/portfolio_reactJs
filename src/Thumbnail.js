import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
        <Link to="">
        <div className="overlay-image">
            <Link to={props.link}>
                <img className="image" src={props.image} alt="Alt text" />
                
                <div className="hover">
                    <div className="text">
                        <h3>{props.title}</h3>
                        <p>{props.descrip}</p>
                        <div>{props.techno}</div>
                    </div>
                </div>
            </Link>
        </div>
        </Link>
    </div>
  );
}
 
export default Thumbnail;