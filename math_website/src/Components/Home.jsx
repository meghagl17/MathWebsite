import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const gettingStartedClicked = () => {
        navigate('/selectBranch');
    }

    return (
        <div className="Home">
            <button onClick={()=>gettingStartedClicked()}>Get Started</button>
        </div>
      );

}

export default Home;