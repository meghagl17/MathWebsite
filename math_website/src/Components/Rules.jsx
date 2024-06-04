import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Rules() {
    const navigate = useNavigate();
    const startNowClicked = () => {
        navigate('/play');
    }

    return (
        <div className="Rules">
            These are the Rules!
            <button onClick={() => startNowClicked()}>Start now!</button>
        </div>
      );
}

export default Rules;