import React from "react";
//import styles from "./Css/MobileOs.module.css"className={styles.listMobile}
function MobileOs({title,data}){
    return (
        <>
        <div  >
        <h1 >{title}</h1>
        {data.map(function(elem){
            return(
                <ul >
                    <li >{elem}</li>
                </ul>
            )
        })}
        </div>
        
        </>
    )
}

export default MobileOs