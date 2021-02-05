import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <p>hola</p>
      <style jsx>{`
        .footer {
          border-top: 1px solid lightgray;
          padding: 20px;
          background-color: #f7f7f7;
          text-align: center;
        }

        .footer > p {
          padding: 5px;
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}

export default Footer
