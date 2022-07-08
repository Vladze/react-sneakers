import { Link } from 'react-router-dom';
import { useCart } from "../hooks/useCart";

function Header({onClickCart}) {
  const { totalPrice } = useCart();
  
  return (
        <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img className="mr-15" widht={40} height={40} src="/img/logo.png" alt="logo"/>
          <div className="headerInfo">
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Магазин найкращих підкрадуль</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>{totalPrice} грн.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites" >
            <img width={18} height={18} src="/img/heart.svg" alt="heart" />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="/orders" >
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
    )
}

export default Header;