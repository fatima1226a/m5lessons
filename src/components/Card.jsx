const Card = ({name, description}) => {
  return (
    <div className="card">
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card