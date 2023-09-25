import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import LaundryBin from "./components/LaundryBin/LaundryBin";
import ManageCustomer from "./components/ManageCustomers/ManageCustomer";
import './components/Machines/Machines';
import Machines from "./components/Machines/Machines";
import './components/SupplyList/SupplyList'
import SupplyList from "./components/SupplyList/SupplyList";
import './components/SupplyInOut/SupplyInOut';
import SupplyInOut from "./components/SupplyInOut/SupplyInOut";
import Reports from "./components/Reports/Reports";
import { LoginOptions } from "./components/Login/LoginOptions";

function App() {
  return (
    <div className="App">

       <Header /> 
       <Dashboard /> 
       <NavBar/>

      {/* <Login /> */}
      {/* <LoginOptions />*/}
      {/* <Header /> */}
      {/* <Dashboard />  */}
    {/* <LaundryBin />     */}
    {/* <ManageCustomer /> */}
    {/* <Machines/> */}
    {/* <SupplyList /> */}
    {/* <SupplyInOut /> */}
    {/* <Reports />   */}
     {/* <SupplyList /> */}
       
       
    </div>
  );
}

export default App;
