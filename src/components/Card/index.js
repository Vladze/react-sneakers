import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"

function Card({id, title, price, imageUrl, onPlus, isFavorite, inCart, onClickFavorite, isLoading=true}) {
    
    function onClickPlus() {
        onPlus();
    }

  
    return (
    <div className={styles.card}>
         {isLoading
         ? <ContentLoader 
         speed={4}
         width={160}
         height={220}
         viewBox="0 0 160 220"
         backgroundColor="#f3f3f3"
         foregroundColor="#E7F6FF"
     >
         <rect x="0" y="0" rx="15" ry="15" width="160" height="110" /> 
         <rect x="1" y="125" rx="3" ry="3" width="160" height="15" /> 
         <rect x="0" y="150" rx="3" ry="3" width="100" height="15" /> 
         <rect x="0" y="190" rx="4" ry="4" width="80" height="24" /> 
         <rect x="128" y="182" rx="6" ry="6" width="30" height="30" />
        </ContentLoader>
        : <>
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
        </>}

    </div>
    );
}


export default Card;