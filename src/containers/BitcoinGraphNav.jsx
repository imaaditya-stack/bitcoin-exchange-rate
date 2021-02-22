import React from "react";
import Bitcoin from "../svgs/Bitcoin";

const BitcoinGraphNav = () => {
  return (
    <div className="b-nav my-5">
      <div className="d-flex align-items-center ml-4">
        <Bitcoin />
        <h4>Real-time bitcoin graph</h4>
      </div>
    </div>
  );
};

export default BitcoinGraphNav;
