import React from 'react';

function SiteRow(props) {
    return (
      <div className="SiteRow">
        <div className="SiteDiv">{props.site.name}</div>
        {props.isLoggedIn && (
          <div className="SiteDiv">Power: {props.site.power}</div>
        )}
      </div>
    );
}

export default SiteRow;