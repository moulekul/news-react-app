import React, { useState, useEffect } from 'react'
import Title from './components/Title'
import Nav from './components/Nav'
import NewsGrid from './components/NewsGrid'


import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=gb&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  return (
    <div className="App">
      <Title/>
      <div className="heading-line1"></div>
      <Nav active={active} setActive={setActive} setCategory={setCategory}/>
      <div className="heading-line2"></div>
      <div className="heading-line2"></div>
      <NewsGrid items={items}/>
    </div>
  )
}

export default App
