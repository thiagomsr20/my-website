import './footer.css'

// imagens
import instagram from './resource/Instagram.png'
import github from './resource/GitHub.png'
import linkedin from './resource/LinkedIn.png'

export default function Footer() {

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='container'>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Nice to see you here</h1>
                        <p className='footer-p1'>Thank you for visiting my personal portfolio website.<br></br>Connect with me over socials.
                        </p>

                        <div className='footer-socials'>
                            <a href='https://www.instagram.com/thg_rmss/' target='_blank'><img src={instagram}></img></a>
                            <a href='https://github.com/thiagomsr20' target='_blank'><img src={github}></img></a>
                            <a href='https://www.linkedin.com/in/thiago-maciel-soares-738913235/' target='_blank'><img src={linkedin}></img></a>
                        </div>

                    </div>
                    <div className='footer-subcontainer'>

                        <h1 className='footer-title'>Quick Links</h1>

                        <ul className='footer-content'>
                            <div class="lista-itens-ql">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Home</li>
                            </div>

                            <div class="lista-itens-ql">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>About</li>
                            </div>

                            <div class="lista-itens-ql">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Project</li>
                            </div>

                            <div class="lista-itens-ql">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Skills</li>
                            </div>

                            <div class="lista-itens-ql">
                                <i class="fas fa-chevron-circle-right"></i>
                                <li>Service</li>
                            </div>

                            <div class="lista-itens-ql">
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
                                <p>+55 54 98169-6767</p>
                            </div>

                            <div class="lista-itens">
                                <i class="fas fa-envelope"></i>
                                <p>thiagomsoares2017@gmail.com</p>
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