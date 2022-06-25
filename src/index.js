import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
// import App from './script/App_UseState';
// import App_Todo from './script/App_Todo'
// import App_UseEffects from './script/App_UseEffects'
// import App_UseRef from './script/App_UseRef'
// import App_UseCallback from './script/App_UseCallback'
// import App_UseMemo from './script/App_UseMemo'
// import App_UseReducer from './script/App_UseReducer'
import reportWebVitals from './reportWebVitals';
// import ThemeProvider from './script/Theme_UseContext/Theme_Context'
// import App from './script/Theme_UseContext/App'
// import App from './script/AppGlobal'

// import { StoreProvider } from './script/store'

// import App from './script/Imperative/App'
import App from './script/pages/App'

// === Ex4(useEffect)

// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: id,
//       })
//     )
//   }, 2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StoreProvider>
      <App />
    </StoreProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
