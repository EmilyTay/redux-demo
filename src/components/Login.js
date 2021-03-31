import { connect } from "react-redux";
import { toggleLogin } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    toggleLogin: () => dispatch(toggleLogin())
  };
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

function ConnectedLogin(props) {
  return (
    <div className="Login">
      <button type="button" onClick={props.toggleLogin}>{props.isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);

export default Login;
