import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [ordersItems, setOrderItems] = useState([]);


  React.useEffect(() => {
    fetch("https://62c1ab292af60be89ecba5d3.mockapi.io/items")
      .then(res => {return res.json()})
      .then(json => setItems(json));
  }, []);
  
  function onAddToCart(obj){
    setCartItems(prev => prev.includes(obj) ? [...prev] : [...prev, obj]);
    setItems(items.map(item => {
      if(item.id === obj.id){
        item.inCart = true;
        return item;
      }
      return item;
    }))
  }


  
  function removeFromCart(id){
    setCartItems(prev => prev.filter(item => item.id === id ? null : item));
    setItems(items.map(item => {
      if(item.id === id){
        item.inCart = false;
        return item;
      }

      return item
    }))
  }

  function onClickFavorite(id){
    setItems(items.map(item => {
      if(item.id === id){
        item.isFavorite = !item.isFavorite;
        return item;
      } 

      return item;
    }))
  }

  function onAddOrder(){
    setOrderItems(cartItems);
    setCartItems([]);
    setItems(items.map(item => {
      item.inCart = false;
      return item
    }))
  }
  
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return <div className="wrapper clear">
    {cartIsOpened && <Drawer items={cartItems} onClickOrder={() => onAddOrder()} onClickClose={() => setCartIsOpened(false)} onClickRemove={(id) => removeFromCart(id)} />}

    <Header onClickCart={() => setCartIsOpened(true)} />

    <Route path="/" exact>
      <Home
        items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onAddToCart={onAddToCart}
        onChangeSearchInput={onChangeSearchInput}
        onClickFavorite={onClickFavorite}
      />
    </Route>
    <Route path="/favorites" exact>
      <Favorites
        items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onAddToCart={onAddToCart}
        onChangeSearchInput={onChangeSearchInput}
        onClickFavorite={onClickFavorite}
      />
    </Route>
    <Route path="/orders" exact> 
      <Orders
        items={ordersItems}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onAddToCart={onAddToCart}
        onChangeSearchInput={onChangeSearchInput}
        onClickFavorite={onClickFavorite}  
      />
    </Route>
  
  </div>
}

export default App;
