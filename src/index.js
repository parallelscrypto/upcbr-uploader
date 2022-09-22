import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, HashRouter, Route, Link } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

const app =  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>

const routing = (
  <HashRouter>
   <Routes>
     <Route path="/upload/:code" element={app} />
   </Routes>
  </HashRouter>
)

ReactDOM.render(
routing,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
