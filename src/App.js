

function App() {
  return <div className="wrapper clear">

    <div className="overlay">
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


    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img className="mr-15" widht={40} height={40} src="/img/logo.png" alt="logo"/>
        <div className="headerInfo">
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 грн.</span>
        </li>
        <li className="mr-30">
        <img width={18} height={18} src="/img/heart.svg" alt="heart" />
        </li>
        <li>
        <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>

    <div className="content p-50">
      <div className="mb-40 d-flex justify-between align-center">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..."></input>
        </div>
      </div>

      <div className="sneakers d-flex flex-wrap">
        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_like.svg" alt="liked"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>2 449 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>3 199 грн.</b>
            </div>
            <img src="/img/btn_mark.svg" alt="added"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>2 549 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1 699 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/5.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1 699 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/6.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1 699 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/7.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1 699 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/8.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1 699 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/9.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1 699 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

        <div className="card">
          <div className="card-favorite">
            <img src="/img/heart_unlike.svg" alt="unlike"/>
          </div>
          <div className="card-img">
            <img width={133} height={112} src="/img/sneakers/10.jpg" alt="shoes"></img>
          </div>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5> 
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>1 699 грн.</b>
            </div>
            <img src="/img/btn_plus.svg" alt="add"/>
          </div>
        </div>

      </div>
    </div>
  </div>
}

export default App;
