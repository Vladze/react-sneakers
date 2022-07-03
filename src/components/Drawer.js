function Drawer({onClickClose, items = []}) {
    return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between">
          Корзина <img onClick={onClickClose} className="cu-p" width={34} src="/img/remove.svg" alt="close" />
        </h2>

        <div className="items flex">
          {items.map(item => {
            return <div key={items.id} className="itemCart d-flex justify-between align-center">
              <img className="mr-20" heigth={70} width={70} src={item.imageUrl} alt="shoes" />
              <div className="mr-30">
                <p>{item.title}</p>
                <b>{item.price} грн.</b>
              </div>
              <img className="remove_Btn" src="/img/remove.svg" alt="remove"></img>
            </div>
          })}
        
        </div>
        
        <div className="cartTotalBlock">
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