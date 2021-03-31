import SiteRow from "./SiteRow";

function SitesTable() {

  var sites = [{name: "Site 1", power: 156}, {name: "Site 2", power: 230}, {name: "Site 3", power: 371}, {name: "Site 4", power: 428}]

  return (
    <div className="SitesTable">
      {sites.map(function(site, index){
        return <SiteRow site={ site } key={ index }/>;
      })}
    </div>
  );
}

export default SitesTable;
