import cls from "./Card.module.scss"

const Card = ({id, name}) => {
  const onClick = () => {
    console.log("click" + id);
    
  }
  
  return (
    <div className={cls.card} onClick={() => onClick()}>
      <div>
        <h2>{id}</h2>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Card