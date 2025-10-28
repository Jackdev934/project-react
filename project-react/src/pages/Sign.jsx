import "../css/Sign.css";

const Sign = () => {
  return (
    <section className="page">
      <h2>Sign In</h2>

      <main className="container">
        <div className="signin-card">
          {/* Close Button */}
          <a href="/" className="signin-close">
            &times;
          </a>

          <h3 className="signin-title">SIGN IN</h3>

          <form className="signin-form">
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder="Please enter" />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Please enter" />

            <a className="forgot" href="#">
              Forgot Password?
            </a>

            <div className="form-row">
              <button type="button" className="pill">
                Log In
              </button>
              <button type="button" className="pill ghost">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Sign;
