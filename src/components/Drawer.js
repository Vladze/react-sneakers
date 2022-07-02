function Drawer() {
    return (
    <div className="overlay" style={ {display: "none"} }>
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between">Корзина <img className="cu-p" width={34} src="/img/remove.svg" alt="close" /></h2>

        <div class="items flex">
          <div className="itemCart d-flex justify-between align-center">
            <img className="mr-20" heigth={70} width={70} src="/img/sneakers/1.jpg" alt="shoes" />
            <div className="mr-30">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>2449 грн.</b>
            </div>
            <img className="remove_Btn" src="/img/remove.svg" alt="remove"></img>
          </div>

          <div className="itemCart d-flex justify-between align-center">
            <img className="mr-20" heigth={70} width={70} src="/img/sneakers/2.jpg" alt="shoes" />
            <div className="mr-20">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>2449 грн.</b>
            </div>
            <img className="remove_Btn" src="/img/remove.svg" alt="remove"></img>
          </div>
          

          
        </div>
        
        <div class="cartTotalBlock">
          <ul>
            <li className="d-flex align-end mb-20">
              <span>Итого:</span>
              <div></div>
              <b>11 232 грн.</b>
            </li>
            <li className="d-flex align-end mb-20">
              <span>На ЗСУ 5%:</span>
              <div></div>
              <b>675 грн.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow"/>
          </button>
        </div>
      
      </div>
    </div>
    )
}

export default Drawer;