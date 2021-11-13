import styles from "./List.module.css"
function CategoryItem({
    url,
    title
}){
    
    return(
        <div>
            <img className={styles.categoryImage} src={url} alt={title}/>
            <div className={styles.categoryTitle}>
                {title}
            </div>
        </div>
    )
}

export default CategoryItem;