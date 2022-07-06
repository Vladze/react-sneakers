import { useContext } from "react";
import AppContext from "../context";

function EmptyCart({title, desc, imgURL }) {
  const {setCartIsOpened, setIsOrdered} = useContext(AppContext);
  
  function clearIsOrdered(){
    setCartIsOpened(false);
    setIsOrdered(false);
  }
  
  return (
    <div className="cartEmpty d-flex flex-column justify-center align-center">
      <img height={120} width={120} src={imgURL} alt="box"></img>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button onClick={() => clearIsOrdered()} className="greenButton"><img src="/img/arrow.svg" alt="back" />Вернуться назад</button>
  </div>
  )
}

export default EmptyCart;