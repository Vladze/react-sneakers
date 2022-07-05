import Card from "../components/Card"

function Home( {items, searchValue, setSearchValue, onAddToCart, onChangeSearchInput, onClickFavorite} ) {
    return <div className="content p-50">
      <div className="mb-40 d-flex justify-between align-center">
        <h1>{searchValue ? <span>Поиск по запросу: "{searchValue}"</span> : "Кроссовки"} </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          {searchValue && <img onClick={() => setSearchValue("")}className="clear" width={23} height={23} src="/img/remove.svg" alt="close" />}
          <input placeholder="Поиск..." value={searchValue} onChange={(event) => onChangeSearchInput(event)} maxLength="140"></input>
        </div>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map(item => {
          return <Card key={item.id}
            id={item.key}
            title={item.title} 
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={() => onAddToCart(item)}
            isFavorite={item.isFavorite}
            inCart={item.inCart}
            onClickFavorite={() => onClickFavorite(item.id)}
          />
            })}
      </div>
    </div>
}

export default Home;