import * as React from "react";
import { useState } from "react";
import { Main } from "./Main";
// import { Refresh } from "./Refresh";

import "./index.css";
import { Details } from "./Details";

const App = () => {
  const [datagrid, setDatagrid] = useState([]);
  const [CTC, setCTC] = useState("");

  return (
    <>
      <Main setDatagrid={setDatagrid} setCTC={setCTC} CTC={CTC} />
      {
        datagrid.length !== 0 && CTC && <Details datagrid={datagrid} />
      }
    </>
  );
};

export default App;