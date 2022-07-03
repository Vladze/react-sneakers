import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, { useState } from "react";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cardIsOpened, setCardIsOpened] = useState(false);

  React.useEffect(() => {
    fetch("https://62c1ab292af60be89ecba5d3.mockapi.io/items")
      .then(res => {return res.json()})
      .then(json => setItems(json));
  }, []);
  
  function onAddToCart(item){
    setCartItems(prev => prev.includes(item) ? [...prev] : [...prev, item]);
  }

  return <div className="wrapper clear">
    {cardIsOpened && <Drawer items={cartItems} onClickClose={() => setCardIsOpened(false)} />}

    <Header onClickCart={() => setCardIsOpened(true)} />
    

    <div className="content p-50">
      <div className="mb-40 d-flex justify-between align-center">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..."></input>
        </div>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {items.map(item => {
          return <Card key={item.id}
            id={item.key}
            title={item.title} 
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={() => onAddToCart(item)}
          />
        })}
        

      </div>
    </div>
  </div>
}

export default App;
