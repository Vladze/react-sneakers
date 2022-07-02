
function Card() {
    return (
    <div className="card">
        <div className="card-favorite">
        <img src="/img/heart_like.svg" alt="liked"/>
        </div>
        <div className="card-img">
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="shoes"></img>
        </div>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>2 449 грн.</b>
        </div>
        <img src="/img/btn_plus.svg" alt="add"/>
        </div>
  </div>
    )
}


export default Card