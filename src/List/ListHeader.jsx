import React from "react";
import styles from "./List.module.css"
function ListHeader({title}){
    return (
        <h3 className={styles.headTitle}>{title}</h3>
    )
}
export default ListHeader;