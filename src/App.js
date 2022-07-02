import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return <div className="wrapper clear">

    <Drawer />

    <Header />
    

    <div className="content p-50">
      <div className="mb-40 d-flex justify-between align-center">
        <h1>Все кроссовки</h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..."></input>
        </div>
      </div>

      <div className="sneakers d-flex flex-wrap">
        
        <Card 
          title="Nike nike 5"
          price={3888}
          imageUrl="/img/sneakers/1.jpg"
        />

        <Card 
          title="Nike nike 5
          Nike nike 5"
          price={3888}
          imageUrl="/img/sneakers/2.jpg"
        />

        <Card 
          title="Nike nike 5"
          price={3888}
          imageUrl="/img/sneakers/3.jpg"
        />

        <Card 
          title="Nike nike 5
          Nike nike 5"
          price={3888}
          imageUrl="/img/sneakers/4.jpg"
        />

      </div>
    </div>
  </div>
}

export default App;
