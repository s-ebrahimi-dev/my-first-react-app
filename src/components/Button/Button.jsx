

function Button({isLogin = false}) {
  return (
      <button  style={{
          color: "white",
          borderRadius: "30px",
          padding: "10px 20px",
          backgroundColor: isLogin ? "green" : "gray",
          border: "none",
          cursor: "pointer",
          width: "100%",
            height: "100%"
          }
             
          }>
        {isLogin ? "مسعود صرامی" : "ورود | عضویت"}
      </button>
  )
}

export default Button