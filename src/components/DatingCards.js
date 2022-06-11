import React, { useState, useEffect } from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
import axios from './axios'

const DatingCards = () => {
  const [people, setPeople] = useState([
    // {
    //   name: "Random Guy", imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" },
    // {
    //   name: "Another Guy", imgUrl: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" },
    // {
    //   name: "Random Girl", imgUrl: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    // {
    //   name: "Another Girl", imgUrl: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
  ])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/dating/cards")
      setPeople(req.data)
    }
    fetchData()
  }, [])
  
  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!!")
  }

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)} >

            <div style={{
              backgroundImage: `url(${person.imgUrl})`
            }} className="card">
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  )
}
export default DatingCards