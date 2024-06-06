import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css'

function Home() {
    const navigate = useNavigate();

    const gettingStartedClicked = () => {
        navigate('/selectBranch');
    }

    return (
        <div className="Home">
            <h1 className="title">The Brain needs to workout</h1>
            <h1 className="subTitle">to work at its best potential</h1>
            <div className="buttonContainer"><button className="getStartedButton" onClick={()=>gettingStartedClicked()}>Start Working Out</button></div>
            <p className="tagline">Dive into the world of training your brain</p>
            <h2 className="about">ABOUT</h2>
            
            <div class="aboutContainer">
                <button class="aboutRect">Rectangle 1</button>
                <button class="aboutRect">Rectangle 2</button>
            </div>
            <div class="aboutContainer">
                <button class="aboutRect">Rectangle 3</button>
                <button class="aboutRect">Rectangle 4</button>
            </div>
            
            <h2 className="rules">RULES</h2>
            <p className="rulesContent">fbluihfuijkshvliuerglvuaerbvaiuvhvblilhbuilerbhlvf;ourieihfgireuh fuireagegrehagioue8girehafmo ureh fbluihfuijkshvliuerglvuaerb</p>
            <div className="rulesRectContainer">
                <button className="rulesRect">Addition</button>
                <button className="rulesRect">Subtraction</button>
                <button className="rulesRect">Multiplication</button>
                <button className="rulesRect">Division</button>
            </div>
            <p className="rulesContent">fbluihfuijkshvliuerglvuaerbvaiuvhvblilhbuilerbhlvf;ourieihfgireuh fuireagegrehagioue8girehafmo ureh fbluihfuijkshvliuerglvuaerb</p>
            <h2 className="aboutMe">ABOUT ME</h2>
            <p className="aboutMeContent">about me content</p>
            <h2 className="footer">FOOTER</h2>
        </div>
      );

}

export default Home;