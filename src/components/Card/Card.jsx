import cls from "./Card.module.scss"

const Card = ({name}) => {
  
  return (
    <div className={cls.card} >
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default Card