import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='container'>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Nice to see you here</h1>
                        <p className='footer-p1'>Thank you for visiting my personal portfolio website.<br></br>
                            Connect with me over socials.
                        </p>

                    </div>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Quick Links</h1>

                        <ul className='footer-content'>
                            <div class="lista-itens">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Home</li>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>About</li>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Project</li>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Skills</li>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Service</li>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Contact</li>
                            </div>
                        </ul>

                    </div>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Contact Info</h1>
                        <div className='footer-content'>
                            <div class="lista-itens">
                                <i class="fas fa-phone"></i>
                                <p>+55 54 99999-9999</p>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-envelope"></i>
                                <p>thiagoteste@gmail.com</p>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-map-marked-alt"></i>
                            <p>Brasil, RS</p>
                            </div>
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