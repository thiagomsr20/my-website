import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='container'>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Thiago's Portfolio</h1>
                        <p className='footer-p1'>Thank you for visiting my personal portfolio website.<br></br>
                            Connect with me over socials.
                        </p>

                    </div>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Quick Links</h1>
                        <ul className='footer-content'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Education</li>
                            <li>Work</li>
                            <li>Experience</li>
                        </ul>

                    </div>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Contact Info</h1>
                        <div className='footer-content'>
                            <p>+55 54 99999-9999</p>
                            <p>thiagoteste@gmail.com</p>
                            <p>Brasil, RS</p>
                        </div>

                    </div>
                </div>
                <div className='copyright-container'>
                    <hr></hr>
                    <p className='copyright'>
                        Copyright &copy; 2024 Thiago Maciel. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer