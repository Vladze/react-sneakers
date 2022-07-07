import { useContext } from "react";
import EmptyCart from "./EmptyCart";
import AppContext  from "../context";

function Drawer({ onClickRemove, onClickOrder, items = []}) {
  
  const { isOrdered, setIsOrdered, setCartIsOpened, cartItems } = useContext(AppContext);
  const total = cartItems.reduce((prev, item) => prev + Number(item.price), 0);

  function closeCart() {
    setCartIsOpened(false);
    setIsOrdered(false);
  }


  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between">
          Корзина <img onClick={closeCart} className="cu-p" width={34} src="/img/remove.svg" alt="close" />
        </h2>
        {items.length > 0 
        ? <>
          <div className="items flex">
            {items.map(item => {
              return <div key={item.id} className="itemCart d-flex justify-between align-center">
                <img className="mr-20" heigth={70} width={70} src={item.imageUrl} alt="shoes" />
                <div className="mr-30">
                  <p>{item.title}</p>
                  <b>{item.price} грн.</b>
                </div>
                <img onClick={() => onClickRemove(item.id)} className="remove_Btn" src="/img/remove.svg" alt="remove"></img>
              </div>
            })}
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex align-end mb-20">
                <span>Итого:</span>
                <div></div>
                <b>{total} грн.</b>
              </li>
              <li className="d-flex align-end mb-20">
                <span>На ЗСУ 10%:</span>
                <div></div>
                <b>{(total / 100 * 10).toFixed(2)} грн.</b>
              </li>
            </ul>
            <button onClick={onClickOrder} className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow"/>
            </button>
          </div>
        </>
        : <EmptyCart
            imgURL={isOrdered ? "img/list_mark.png" : "/img/box.png"}
            title={isOrdered ? "Заказ оформлен!" : "Корзина пустая"}
            desc={isOrdered ? "Ваш заказ #1843 скоро будет передан курьерской доставке" :"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
          />}
      </div>
    </div>
    )
}

export default Drawer;