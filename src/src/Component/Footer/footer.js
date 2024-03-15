import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-container-message'>

                    <h1>Thiago's Portfolio</h1>
                    <p>Thank you for visiting my personal portfolio website.
                        Connect with me over socials.
                    </p>

                </div>
                <div className='footer-container-quick_links'>

                    <h1>Quick Links</h1>
                    <ul>
                        <p>Home</p>
                        <p>About</p>
                        <p>Skills</p>
                        <p>Education</p>
                        <p>Work</p>
                        <p>Experience</p>
                    </ul>

                </div>
                <div className='footer-container-contact_info'>

                    <h1>Contact Info</h1>
                    <p>+55 54 99999-9999</p>
                    <p>thiagoteste@gmail.com</p>
                    <p>Brasil, RS</p>

                </div>
            </div>
            <div className='copyright-container'>
                <hr></hr>
                <p className='copyright'>
                    Copyright © 2024 Thiago Maciel. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer