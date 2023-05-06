function App() {
  return (
    <div className="wrapper clear">
    <div style={{ display: 'none'}} className="overlay">
    <div className="drawer">
      <h3 className="mb-30 ml-20"> Уважаемый донор,
Хотим выразить искреннюю благодарность за ваше щедрое пожертвование! Ваше пожертвование поможет нам продолжать нашу важную работу и поддерживать тех, кто нуждается в нашей помощи. Благодаря вашей помощи мы можем изменять жизнь многих людей, и мы ценим вашу поддержку и доверие.
С уважением,
Команда благотворительной организации.</h3>
<div className="items">
      <div className="cartitem d-flex align-center">
        <div style={{backgroudImage: 'url(/img/blago/1.png)'}} 
        className="cartItemImg"></div>
        <img className="mr-20" width={70} height={70} src="/img/blago/1.png" alt="Blago"></img> 
        
        <div>
          <p className="mb-5">больные люди</p>
          <b>30000тг</b>
        </div>
        <img className="removebtn" src="/img/blago/remove.svg" alt="Remove"></img>
      </div>
      </div>
    <div className="carttotalblock"><button>пожертвовать</button>
    </div>
    </div>
    </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">Komek</h3>
            <p>сайт благотворительности</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>75000тг</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>они ждут твоей помощи</h1>
          <div className="search-block d-flex">
            <img src="/img/blago/search.svg" alt="Search"></img>
            <input placeholder="поиск..."></input>
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/img/blago/1.png" alt="Blago" />
            <h5>больные люди</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>пожертвование:</span>
                <b>30000тг</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/blago/2.png" alt="Blago" />
            <h5>инвалиды</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>пожертвование:</span>
                <b>30000тг</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/blago/3.png" alt="Blago" />
            <h5>люди в возрасте</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>пожертвование:</span>
                <b>30000тг</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/blago/4.png" alt="Blago" />
            <h5>образование</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>пожертвование:</span>
                <b>30000тг</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
         </div>
      </div>
      </div>
    </div>
    </div>
    
    

  );
}

export default App;




