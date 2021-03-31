import Login from "./Login";

function Navbar(props) {
  return (
    <div className="Navbar">
      <Login isLoggedIn={props.isLoggedIn} handleLoginClick={props.handleLoginClick}></Login>
    </div>
  );
}

export default Navbar;
