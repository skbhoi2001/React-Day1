//import logo from './logo.svg';
import './App.css';
// import OrderList from './OrderList/OrderList';
// import List from './List/List';
import styles from "./Mobile/Css/MobileOs.module.css"
import React from 'react';
import MobileOs from './Mobile/MobileOs';
var data1= ["Android", "iOS", "Blackberry" , "Windows Phone"];
  var data2 = ["Samsung","HTC","Apple","Micromax"]

function App() {
  return (
    <>
    <div className="App App-header">
        {/* <OrderList /> */}
        <div className={styles.listMobile}>
        <MobileOs title="Mobile Operating System" data={data1}/>
        <MobileOs title="Mobile Manufacture" data={data2}/>
        </div>
    </div>

    {/* <List/> */}
    </>
  );
}

export default App;
