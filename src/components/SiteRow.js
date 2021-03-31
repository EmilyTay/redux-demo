import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

function ConnectedSiteRow(props) {
    return (
      <div className="SiteRow">
        <div className="SiteDiv">{props.site.name}</div>
        {props.isLoggedIn && (
          <div className="SiteDiv">Power: {props.site.power}</div>
        )}
      </div>
    );
}

const SiteRow = connect(mapStateToProps)(ConnectedSiteRow)

export default SiteRow;