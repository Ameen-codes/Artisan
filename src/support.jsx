import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';


function Support() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

    const toggleHeight = () => {
        setIsExpanded(!isExpanded);
        setIsRotated(!isRotated);
    };

    const sendEmail = () => {
        window.location.href = "mailto:mymail@gmail.com";
    };

    return (
        <div className={`support ${isExpanded ? 'spanUp' : ''}`}>
            <div className="support_nav">
                 <h3>Support</h3> 

                 <div id="flex">
                    <FontAwesomeIcon icon={faEnvelope} onClick={sendEmail}/> 
                    <FontAwesomeIcon 
                        icon={faAngleDoubleUp} 
                        id="upBtn" 
                        onClick={toggleHeight} 
                        className={`rotateIcon ${isRotated ? 'rotated' : ''}`}
                    />

                 </div>

            </div>

            <div className="support_links">
                 <span><FontAwesomeIcon icon={faWhatsapp} color="#8a2be2" id="faSocial"/>Say hello on whatsapp</span>
                 <span><FontAwesomeIcon icon={faXTwitter} color="#8a2be2" id="faSocial"/>Join us on X</span>
                 <span><FontAwesomeIcon icon={faFacebook} color="#8a2be2" id="faSocial"/>Follow us on Facebook</span>
                 <span><FontAwesomeIcon icon={faDiscord} color="#8a2be2" id="faSocial"/>Reach out to us on our discord server</span>
            </div>

        </div>
    );
}

export default Support;
