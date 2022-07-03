function Header({onClickCart}) {
    return (
        <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img className="mr-15" widht={40} height={40} src="/img/logo.png" alt="logo"/>
        <div className="headerInfo">
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Магазин найкращих підкрадуль</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 грн.</span>
        </li>
        <li className="mr-30 cu-p">
        <img width={18} height={18} src="/img/heart.svg" alt="heart" />
        </li>
        <li className="cu-p">
        <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
    )
}

export default Header;