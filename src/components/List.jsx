// import data from '../db/data.json'
import Card from './Card/Card'
import WrapperCard from './WrapperCard'
import { memo, useState } from "react"

const List = memo(({value, click}) => {
  const [inputValue, setinputValue] = useState("")
  const [list, setList] = useState([])

  
  const onChange = (e) => {
    // console.log(e.target.value);
    setinputValue(e.target.value)
  }

  const onClick = () => {
    setList((prev) => [...prev, inputValue])
    setinputValue("")
    // console.log(list);
    
  }

  // const {results} = data


  // useEffect(() => {
  //   console.log("Mounting");
    
  // }, [] )

  // useEffect(() => {
  //   console.log("Updating");
    
  // }, [inputValue, list])

  // useEffect(() => {
  //   return (() => {
  //     console.log("Remounting");
  //   })
  // }, [])

  console.log(value, "render");
  

  return (
    <div>
      <h2>List</h2>
      {/* <button onClick={click}>click</button> */}
      <WrapperCard>
        {list.map((item, key) => (
          <Card 
          key={key} 
          name={item}
          />
        ))}
      </WrapperCard>
      <div>
        <input type="text" value={inputValue} onChange={onChange} placeholder="To do..." />
        <button onClick={onClick}>create</button>

          {/* {list.map  ((item) => (
            <p>{item}</p>
          )
        )} */}
 

        
      </div>
    </div>
    
    
  )
})

export default List