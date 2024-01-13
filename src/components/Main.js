import React from 'react'
import Card from './Card'
import data from './data.js'

function Main() {
  const card = data.map(obj => {
    return (
      <Card key={obj.id}  obj={obj} />
    )
  })
  return (
    <div className="main--container">
      {card}
     
    </div>
  )
}

export default Main
