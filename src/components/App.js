import React from "react";
import SiteContent from "./SiteContent";

import { AppProvider } from "./AppContext";

const App = () => {
  return (
    <AppProvider>
      <SiteContent />
    </AppProvider>
  );
};

export default App;
