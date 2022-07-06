import { Link } from "react-router-dom";

function Orders({items, searchValue, setSearchValue, onChangeSearchInput}) {
    return <div className="content p-50">
        <div className="mb-40 d-flex justify-between align-center">
        <h1>{searchValue ? <span>Поиск по запросу: "{searchValue}"</span> : "Мои заказы"} </h1>
        <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue("")} className="clear" width={23} height={23} src="/img/remove.svg" alt="close" />}
            <input placeholder="Поиск..." value={searchValue} onChange={(event) => onChangeSearchInput(event)} maxLength="140"></input>
        </div>
        </div>

        {items.length > 0 
        ? <div className="orderCards d-flex">
            {items.map(item => {
                return <div className="orderCard">
                    <div>
                        <img width={150} src={item.imageUrl} alt="shoes"/>
                    </div>
                    <h3>{item.title}</h3>
                    <p>Цена: <span>{item.price} грн.</span></p>
                </div>
            })}
        </div>
        : <div className="emptyBox">
            <img height={70} width={70} src="/img/smile2.png" alt="smile"/>
            <h3>У вас нет заказов</h3>
            <p>Вы нищеброд?  Оформите хотя бы один заказ.</p>
            <Link to="/">
                <button className="greenButton"><img src="/img/arrow.svg" alt="arrow"/>Вернуться назад</button>
            </Link>
        </div>}


    </div>
}

export default Orders;