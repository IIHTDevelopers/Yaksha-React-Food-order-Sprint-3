import './App.css'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Foods from './components/Foods/Foods'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import OrderList from './components/OrderList/OrderList'
// import Book from './components/Book/Book'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <br />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/foods' exact component={Foods} />
          <Route path='/place-order' exact component={PlaceOrder} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
      <hr/>
      <h2>Admin Area</h2>
      <OrderList/>
    </div>
  )
}

export default App
