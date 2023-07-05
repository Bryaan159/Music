import { useRef, useState } from 'react'; // Importa useRef y useState desde 'react'
function Login() {
    const mainRef = useRef(null);
    const [isRightPanelActive, setRightPanelActive] = useState(false);

    //credenciales
    const [credentials, setCredentials] = useState({ email: '123@gmail.com', password: '123abc' });


    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };
    return (
        <div id='cuadro' className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} ref={mainRef}>
            <div className="sign-up">
                <form action="#" id="form2">
                    <h1>Create account</h1>
                    <p>Can you use your email for registration</p>
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="password" placeholder="Password" required="" />
                    <button onClick={handleSignUpClick}>Sign Up</button>
                </form>
            </div>

            <div className="sign-in">
                <form action="#" id="form2">
                    <h1>Sign in</h1>
                    <p>Or use your account</p>
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="password" placeholder="Password" required="" />
                    <a href="#">Forget your Password?</a>
                    <button onClick={handleSignInClick}>Sign In</button>
                </form>
            </div>

            <div className="overlaY-container">
                <div className="overlaY">
                    <div className="overlaY-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button onClick={handleSignInClick} id="signIn">Sign In</button>
                    </div>

                    <div className="overlaY-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button onClick={handleSignUpClick} id="signIn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );


}
export default Login;