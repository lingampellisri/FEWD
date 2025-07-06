 
//  //index.js
//  import React from "react";
// import ReactDOM from "react-dom/client";
// import {BrowserRouter,Routes} from "react-router-dom";
// import App from "./App";
// import Test from "./classComponent";
// import Count from "./Counter";
// import Component1 from "./Component1";
// import {Func1,Func2} from "./NamedImport"
// import Recon from "./reconciliation";
// import UserDetails from "./userDetails";

// import Counter_Button from "./Components/Counter2_code";


// import { Provider } from "./contextAPI";
// import Welcome from "./Welcome";
// import Display from "./ReactList";
// import ExportDefault , { Combineed } from "./CombinedImports";
// // import from "./CombinedImports";
// import ConditionalRendering from "./ConditionalRendering";
// import ObjectDisplay from "./ObjectList";
// import ButtonDisplay from "./ButtonList";
// import ParentComponent from "./Components/ParentComponent";

// import UserGreetings from "./Components/userGreeting";
// import StyleComponent from "./Components/Style_Component";
// import Form from "./Components/Form";
// import LifeCycleA from "./Components/LifeCycle";

// import Event_Button from "./Components/Event_Han";
// import ListRender from "./Components/List_Rendering";

// // import ParentComponent from "./Components/ParentComponent";
// import ParentComponentC1 from "./Components/PureComponent/ParentCom";
// import RefComp from "./Components/Day1-11-5-25/RefCom";
// import PortalComponent from "./Components/Day2-12-5-25/portals1";
// import Hero from "./Components/Day2-12-5-25/Hero";

// import ErrorBoundary from "./Components/Day2-12-5-25/ErrorBoundary";
// import PostList from "./Components/Day3-13-5-25CURD_op/PostList";
// import PostData from "./Components/Day3-13-5-25CURD_op/PostData";

// import Hooks from "./Components/Day4-14-5-25/HooksOne";
// import HooksRun from "./Components/Day4-14-5-25/HooksTwo";
// import HooksInterval from "./Components/Day4-14-5-25/IntervalHookCounter";

// import DataFetch from "./Components/Day4-14-5-25/DataFetchAPI";

// export const UserContext=React.createContext();

// import UserContextCom from "./Components/Day4-14-5-25/UserContextConsumer";
// import ReducerCounter from "./Components/Day4-14-5-25/UseReducerHook";

// import CounterUseCallBack from "./Components/Day5-15-5-25/UseCallBackParent";
// import Appppp from "./Components/Day5-15-5-25/DiffCode";

// import UseMemo from "./Components/Day5-15-5-25/UseMemo";
// import UseRefFocus from "./Components/Day5-15-5-25/UseRef";

// import DisplayTxt from "./Components/TestStd/Functional";
// import BindFunction from "./Components/TestStd/BindEvents";

// import UseRef from "./Components/UseRefExample";

// import AxiosApp from "./Components/Axios.js/TestAxios";
// import Lab1 from "./Components/Axios.js/Lab1";
// import ToggleMode from "./Components/Axios.js/ToggleMode";
// import { Route, Router } from "react-router-dom";
// import Home from "./Components/Routing/Home";
// import About from "./Components/Routing/About";
// import Contact from "./Components/Routing/Contact";
// import Products from "./Components/Routing/Products";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <div>
    
//     {/* <ConditionalRendering/> 
// <Display/>

// <ObjectDisplay/>

// <ButtonDisplay/>

// <UserDetails/>


//     <App />
//     <Counter_Button/>

//     <Event_Button/>

//     <ParentComponent/>

// <UserGreetings/>

// <ListRender/>

// <StyleComponent/>

// <Form/>

// <LifeCycleA/>

// {/* <ParentComponentC1/>
// <RefComp/> */}

// {/* <PortalComponent/> */}

// {/* <ErrorBoundary>
//     <Hero heroName={"Super man"} />
//     </ErrorBoundary>
//     <ErrorBoundary><Hero heroName={"SpiderMan"} /></ErrorBoundary>

// <ErrorBoundary><Hero heroName={"Joker"} /></ErrorBoundary> */} 

// {/* <PostList/> */}

// {/* <PostData/> */}

// {/* <Hooks/> */}

// {/* <HooksInterval/> */}

// {/* <DataFetch/> */}


// {/* 
// <UserContext.Provider value={"Srinivas Lingampelli"} >
// <UserContextCom/>
// </UserContext.Provider> */}

// {/* <ReducerCounter/> */}

// {/* <CounterUseCallBack/> */}

// {/* <Appppp/> */}


// {/* <UseMemo/> */}

// {/* <UseRefFocus/>
//  */}

//  {/* <DisplayTxt/> */}

//  {/* <BindFunction/> */}

// {/* <UseRef/> */}

// {/* <AxiosApp/> */}

//     {/* <Lab1/> */}

//     {/* <ToggleMode/> */}


//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Products />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </BrowserRouter>

//     </div>
//   );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import About from "./Components/Routing/About";
import Contact from "./Components/Routing/Contact";
import Products from "./Components/Routing/Products";
import Home from "./Components/Routing/Home";
// import "./styles.css"; // Create this file for styling active links

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div>
      {/* ✅ Navigation Bar */}
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
      </nav>

      {/* ✅ Route Definitions */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  </BrowserRouter>
);
