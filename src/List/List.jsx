import React from "react";
import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import styles from "./List.module.css"
function List(){
    return (
        <>
        <ListHeader title="Header"/>
        <div className={styles.listItem}>
        
        <ListItems/>
        </div>
        </>
    )
}

export default List;