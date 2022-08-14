import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<input value="hi" />);

setTimeout(function () {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<input value={undefined} />);
}, 3000);

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
