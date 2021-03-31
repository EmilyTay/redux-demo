You can use Redux with any UI framework and use it on both client and server. That being said, Redux was specifically designed to work well with React.


function mapDispatchToProps(dispatch) {
  return {
    toggleLogin: () => dispatch(toggleLogin())
  };
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};