// import React from "react";
// function Intro(){
//     return(
//         <>
//         <div className="intro">
        
//             <h1 id="intro_h1">Dive into the <br />
//             undiluted world of NFTs
//             </h1>

//             <p id="sub_intro">All the NFTs at your fingertips</p>

//         </div>
//         </>
//     );
// };

// export default Intro ;

import React, { useState, useEffect } from "react";

function Intro() {
    const [typedText, setTypedText] = useState('');
    const text = "Dive into the \n undiluted world of NFTs"; // Using \n for line break
    let index = 0;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setTypedText(prevText => prevText + text.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Adjust typing speed here (milliseconds)

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, []); // Run effect only once after initial render

    return (
        <>
            <div className="intro">
                <h1 id="intro_h1">{typedText}</h1>
                <p id="sub_intro">All the NFTs at your fingertips</p>
            </div>
        </>
    );
}

export default Intro;
