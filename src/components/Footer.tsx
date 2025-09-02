import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import "../styles/footer.css"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-web">
                <p>
                    Visita otros de mis proyectos en:
                </p>
                <a href="">Mi sitio web</a>
            </div>
            <div className="footer-social">
                <span>
                    <DotLottieReact
                        src="src\assets\Octocat.lottie"
                        loop
                        autoplay
                        className='footer-icon'
                    />
                    <a href="https://github.com/Hector-MuMo">Github</a>
                </span>
                <span>
                    <DotLottieReact
                        src="src\assets\Linkedin.lottie"
                        loop
                        autoplay
                        className='footer-icon'
                    />
                    <a href="">LinkedIn</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer