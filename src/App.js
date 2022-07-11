import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import axios from 'axios';
import AppContext from './context';
import Footer from './components/Footer';
import itemsJson from './assets/items.json';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [ordersItems, setOrderItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOrdered, setIsOrdered] = useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const cardsResponse = await axios.get('https://62c1ab292af60be89ecba5d3.mockapi.io/items');

        setItems(cardsResponse.data);
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка загрузки товара');
        setItems(itemsJson);
        setIsLoading(false);
        console.error('Не удалось получить ответ от сервера, взят товар из json локального файла');
      }
    }

    fetchData();
  }, []);

  function onAddToCart(obj) {
    setCartItems((prev) => (prev.includes(obj) ? [...prev] : [...prev, obj]));
    setItems(
      items.map((item) => {
        if (item.id === obj.id) {
          item.inCart = true;
          return item;
        }
        return item;
      }),
    );
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => (item.id === id ? null : item)));
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.inCart = false;
          return item;
        }

        return item;
      }),
    );
  }

  function onClickFavorite(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.isFavorite = !item.isFavorite;
          return item;
        }

        return item;
      }),
    );
  }

  function onAddOrder() {
    setOrderItems([...ordersItems, ...cartItems]);
    setCartItems([]);
    setIsOrdered(true);
    setItems(
      items.map((item) => {
        item.inCart = false;
        return item;
      }),
    );
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{ cartItems, setCartItems, isOrdered, setIsOrdered, cartIsOpened, setCartIsOpened }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClickOrder={() => onAddOrder()}
          onClickRemove={(id) => removeFromCart(id)}
        />

        <Header onClickCart={() => setCartIsOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onAddToCart={onAddToCart}
            onChangeSearchInput={onChangeSearchInput}
            onClickFavorite={onClickFavorite}
            isLoading={isLoading}
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
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
