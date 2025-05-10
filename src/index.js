 
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


import Event_Button from "./Components/Event_Han";
import ListRender from "./Components/List_Rendering";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
    
    <ConditionalRendering/> 
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

    </div>
  );