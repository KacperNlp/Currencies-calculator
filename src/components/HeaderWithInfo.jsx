import React, { useContext } from "react";

import { AppContext } from "./AppContext";
import {HeaderInfoSection} from './HeaderIfnoSection'

import "../sass/HeaderWithInfo.scss";

const HeaderWithInfo = () => {
  const { baseCurrency, converter } = useContext(AppContext);
  return (
    <div className="header-info">
      <HeaderInfoSection text={baseCurrency}/>
      <HeaderInfoSection text={converter}/>
    </div>
  );
};

export default HeaderWithInfo;
