function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Legal AI Login</h2>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p className="login-note">
          Only authorized legal professionals can access the system.
        </p>
      </div>
    </div>
  );
}

export default Login;
