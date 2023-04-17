import React from 'react';

import cashapona from '../images/Trusted Company logos/cashapona.png';
import inbestments from '../images/Trusted Company logos/ibestments.png';
import IntraEdgeLogo from '../images/Trusted Company logos/Intra EdgeLogo.png';
import KCOverseas from '../images/Trusted Company logos/KC-Overseas.png';
import ts from '../images/Trusted Company logos/ts.png';
import verticurl from '../images/Trusted Company logos/verticurl.png';

function Trusted_logos() {
  return (
    <div>
  <h4 className="footer-header" style={{ paddingLeft: "10px" , color:'white',paddingTop:'20px' }}> <strong> Trusted by Businesses Worldwide</strong></h4>
  <div className="row justify-content-start">
    <div className="col-2 col-md-1 mr-5">
      <a href="https://www.cashapona.com/">
        <img src={cashapona} alt="cashapona" className="custom-logo img-fluid" />
      </a>
    </div>
    <div className="col-2 col-md-1 mr-5">
      <a href="https://inbestments.com/app/">
        <img src={inbestments} alt="ibestments" className="custom-logo img-fluid" />
      </a>
    </div>
    <div className="col-2 col-md-1 mr-5">
      <a href="https://intraedge.com/">
        <img src={IntraEdgeLogo} alt="IntraEdgeLogo" className="custom-logo img-fluid" />
      </a>
    </div>
    <div className="col-2 col-md-1 mr-5">
      <a href="https://www.studies-overseas.com/">
        <img src={KCOverseas} alt="KCOverseas" className="custom-logo img-fluid" />
      </a>
    </div>
    <div className="col-2 col-md-1 mr-5">
      <a href="https://www.verticurl.com/">
        <img src={verticurl} alt="verticurl" className="custom-logo img-fluid" />
      </a>
    </div>
    <div className="col-2 col-md-1 mr-5" style={{ paddingLeft: "6px" }}>
      <a href="https://www.thinkspot.com/">
        <img src={ts} alt="ts" className="custom-logo img-fluid" style={{ maxWidth: "60%" }} />
      </a>
    </div>
    {/* Add more company logos here */}
  </div>
</div>
  );
}

export default Trusted_logos;
