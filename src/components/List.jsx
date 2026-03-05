// import React from 'react'
import data from '../db/data.json'
import Card from './Card/Card'
import WrapperCard from './WrapperCard'

const List = () => {
  const {results} = data
  return (
    <div>
      <h2>List</h2>
      <WrapperCard>
        {results.map((item) => (
          <Card 
          key={item.id} 
          id={item.id} 
          name={item.name}
          />
        ))}
      </WrapperCard>
      
    </div>
    
    
  )
}

export default List