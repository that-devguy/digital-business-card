import React from 'react';

function Info() {
    return (
        <div className="info--container">
            <img className="info--headshot" src="" alt="Zach Mutch Headshot" />
            <h1 className="info--fullName">Zach Mutch</h1>
            <h3 className="info--jobTitle">Full-stack Developer</h3>
            <a href="https://thatdevguy.app/">thatdevguy.app</a>
            <div className="info--buttonContainer">
                <button className="info--emailButton">Email</button>
                <button className="info--linkedinButton"><i class="fa-solid fa-download"></i> Resume</button>
            </div>
        </div>
    )
}

export default Info;