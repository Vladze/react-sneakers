import styles from "./Card.module.scss";

function Card({title, price, imageUrl}) {
    return (
    <div className={styles.card}>
        <div className={styles.favorite}>
        <img src="/img/heart_like.svg" alt="liked"/>
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
        <div className={styles.button}>
            <img width={32} height={32} src="/img/btn_plus.svg" alt="add"/>
        </div>
        </div>
    </div>
    );
}


export default Card;