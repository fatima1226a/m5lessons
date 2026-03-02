const WrapperCard = ({children}) => {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
    }}
    >
        {children}
    </div>
  )
}

export default WrapperCard