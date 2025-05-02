import { PageStyle } from "@/styles/layout/page.css";

import {createContext, useContext, useState} from "react";

const ThemeContext = createContext(null);


export default function UseContextPage() {
  return (
    <div className={PageStyle}>
     <h1>useContext Referrence Page</h1>
    </div>
  );
}
