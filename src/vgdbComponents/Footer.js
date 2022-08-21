import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position : "absolute",
    width : "100%"
  }
  return (
    <footer className = "bg-dark text-light py-1" style = {footerStyle}>
      <p className = "text-center"> 
      Copyright <span> &#169 </span> : All Rights Reserved; <span> hotmail : XXXX07452</span>
      </p>
    </footer>
  )
}
