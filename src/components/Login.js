function Login(props) {
  return (
    <div className="Login">
      <button type="button" onClick={props.handleLoginClick}>{props.isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Login;
