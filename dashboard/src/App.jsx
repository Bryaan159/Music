
function App() {
  const mainRef = useRef(null);
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };


  //Se debe de guardar todo esto
  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} ref={mainRef}>
      <div className="sign-up">
        <form action="#">
          <h1>Create account</h1>
          <p>Can you use your email for registration</p>
          <input type="text" name="txt" placeholder="Name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="password" placeholder="Password" required="" />
          <button onClick={handleSignUpClick}>Sign Up</button>
        </form>
      </div>

      <div className="sign-in">
        <form action="#">
          <h1>Sign in</h1>
          <p>Or use your account</p>
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="password" placeholder="Password" required="" />
          <a href="#">Forget your Password?</a>
          <button onClick={handleSignInClick}>Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={handleSignInClick} id="signIn">Sign In</button>
          </div>

          <div className="overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={handleSignUpClick} id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
