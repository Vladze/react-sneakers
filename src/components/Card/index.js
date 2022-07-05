import styles from "./Card.module.scss";

function Card({id, title, price, imageUrl, onPlus, isFavorite, inCart, onClickFavorite}) {
    
    function onClickPlus() {
        onPlus();
    }

  
    return (
    <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
            <img  src={isFavorite ? "/img/heart_like.svg" : "/img/heart_unlike.svg"} alt="liked"/>
        </div>
        <div className={styles.img}>
        <img width={133} height={112} src={imageUrl} alt="shoes"></img>
        </div>
        <h5>{title}</h5> 
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} грн.</b>
        </div>
        <div className={styles.button} onClick={onClickPlus}>
            <img width={32} height={32} src={inCart ? "/img/btn_added.svg" : "/img/btn_plus.svg"} alt="add"/>
        </div>
        </div>
    </div>
    );
}


export default Card;