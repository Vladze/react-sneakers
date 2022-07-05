function EmptyCart({onClickClose}) {
    return (
    <div className="cartEmpty d-flex flex-column justify-center align-center">
      <img height={120} width={120} src="/img/box.png" alt="box"></img>
      <h3>Корзина пустая</h3>
      <p>Добавьте хотя бы одну пару <br/> кроссовок, что бы сделать заказ</p>
      <button onClick={onClickClose} className="greenButton"><img src="/img/arrow.svg" alt="back" />Вернуться назад</button>
  </div>
  )
}

export default EmptyCart;