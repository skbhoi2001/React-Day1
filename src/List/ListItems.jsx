import CategoryItem from "./CategoryItem"
import styles from "./List.module.css"

const ListItems = ()=>{
    return (
        <>
            <div className={styles.listItem}>
            <CategoryItem title="Grocery" url="https://prod-dx.s3.amazonaws.com/dx/labs/Humain_Health.png"/>
            <CategoryItem title="Glory" url="https://prod-dx.s3.amazonaws.com/dx/labs/Humain_Health.png"/>
            <CategoryItem title="Item" url="https://prod-dx.s3.amazonaws.com/dx/labs/Humain_Health.png"/>
            </div>
        </>
    )
}

export default ListItems;