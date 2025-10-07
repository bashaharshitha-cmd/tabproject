import React, { useState } from 'react';
import './Tabproject2.css'; // Import the CSS file

function Tabproject2() {
    const [activity, setActivity] = useState(1);

    const toggletab = (index) => {
        setActivity(index);
    };

    return (
        <div className="container">
            <div className="tab-buttons">
                <button
                    className={activity === 1 ? 'tab active' : 'tab'}
                    onClick={() => toggletab(1)}
                >
                    Experience
                </button>
                <button
                    className={activity === 2 ? 'tab active' : 'tab'}
                    onClick={() => toggletab(2)}
                >
                    Study
                </button>
                <button
                    className={activity === 3 ? 'tab active' : 'tab'}
                    onClick={() => toggletab(3)}
                >
                    Knowledge
                </button>
            </div>

            <div className="tab-content">
                <div className={activity === 1 ? 'content active-content' : 'content'}>
                    <h2>Experience</h2>
                    <hr />
                    <ul>
                        <li>Hellomadam</li>
                        <li>How are you</li>
                        <li>Welcome</li>
                    </ul>
                </div>
                <div className={activity === 2 ? 'content active-content' : 'content'}>
                    <h2>Study</h2>
                    <hr />
                    <ul>
                        <li>Hellomadam</li>
                        <li>How are you</li>
                        <li>Welcome</li>
                    </ul>
                </div>
                <div className={activity === 3 ? 'content active-content' : 'content'}>
                    <h2>Knowledge</h2>
                    <hr />
                    <ul>
                        <li>Hellomadam</li>
                        <li>How are you</li>
                        <li>Welcome</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tabproject2;
