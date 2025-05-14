 
 //index.js
 import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Test from "./classComponent";
import Count from "./Counter";
import Component1 from "./Component1";
import {Func1,Func2} from "./NamedImport"
import Recon from "./reconciliation";
import UserDetails from "./userDetails";

import Counter_Button from "./Components/Counter2_code";


import { Provider } from "./contextAPI";
import Welcome from "./Welcome";
import Display from "./ReactList";
import ExportDefault , { Combineed } from "./CombinedImports";
// import from "./CombinedImports";
import ConditionalRendering from "./ConditionalRendering";
import ObjectDisplay from "./ObjectList";
import ButtonDisplay from "./ButtonList";
import ParentComponent from "./Components/ParentComponent";

import UserGreetings from "./Components/userGreeting";
import StyleComponent from "./Components/Style_Component";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycle";

import Event_Button from "./Components/Event_Han";
import ListRender from "./Components/List_Rendering";

// import ParentComponent from "./Components/ParentComponent";
import ParentComponentC1 from "./Components/PureComponent/ParentCom";
import RefComp from "./Components/Day1-11-5-25/RefCom";
import PortalComponent from "./Components/Day2-12-5-25/portals1";
import Hero from "./Components/Day2-12-5-25/Hero";

import ErrorBoundary from "./Components/Day2-12-5-25/ErrorBoundary";
import PostList from "./Components/Day3-13-5-25CURD_op/PostList";
import PostData from "./Components/Day3-13-5-25CURD_op/PostData";

import Hooks from "./Components/Day4-14-5-25/HooksOne";
import HooksRun from "./Components/Day4-14-5-25/HooksTwo";
import HooksInterval from "./Components/Day4-14-5-25/IntervalHookCounter";

import DataFetch from "./Components/Day4-14-5-25/DataFetchAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
    
    {/* <ConditionalRendering/> 
<Display/>

<ObjectDisplay/>

<ButtonDisplay/>

<UserDetails/>


    <App />
    <Counter_Button/>

    <Event_Button/>

    <ParentComponent/>

<UserGreetings/>

<ListRender/>

<StyleComponent/>

<Form/>

<LifeCycleA/>

{/* <ParentComponentC1/>
<RefComp/> */}

{/* <PortalComponent/> */}

{/* <ErrorBoundary>
    <Hero heroName={"Super man"} />
    </ErrorBoundary>
    <ErrorBoundary><Hero heroName={"SpiderMan"} /></ErrorBoundary>

<ErrorBoundary><Hero heroName={"Joker"} /></ErrorBoundary> */} 

{/* <PostList/> */}

{/* <PostData/> */}

{/* <Hooks/> */}

{/* <HooksInterval/> */}

<DataFetch/>


    </div>
  );