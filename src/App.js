import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const Products = [
    {name: "Potato", price: 10},
    {name: "Frooto", price: 20},
    {name: "7UP", price: 35},
    {name: "Pran Up", price: 15},
    {name: "Pulse", price: 2},
    {name: "Fruitfill", price: 2}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React Project</h1>
        <Card title="Interview Questions" details = "If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing."></Card>
        <Card title= "scope & closure" details="Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand."></Card>
        <Card title="React Workshop for beginners" details="This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help."></Card>
        <UpdateValue></UpdateValue>
      </header>
    <div className="product">
      {
          Products.map(product=><ProductDetails name ={product.name} price={product.price}></ProductDetails>)
      }
    </div>
    <User></User>
    </div>
  );
}

function UpdateValue() {
  const [count, setCount] = useState(0)
  const increse = ()=> setCount(count+1)
  const decrese = ()=> setCount(count-1)
  return (
    <div>
      <h3>{count }</h3>
      <button onClick={decrese}>-</button>
      <button onClick={increse}>+</button>
    </div>
  )
}
function ProductDetails(props) {
  return (
    <div className="item" >
      <h3>{props.name}</h3>
      <p>{props.price} </p>
    </div>
  )
}


function Card(props) {
  return (
    <div className="style">
      <h3>Name:{props.title}</h3>
      <p>Price:{props.details} </p>
    </div>
  )
}
function User() {
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  },[])
  return (
  <div className="product">
      {
        users.map(user => <div className="it">
          <h4>{user.name}</h4>
          <h5>{user.email}</h5>
        </div>)
      }
  </div>
  )
}

export default App;
