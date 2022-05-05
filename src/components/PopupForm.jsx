import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "../assets/css/EmailListForm.css"

const EmailListForm = () => {
  const [email, setEmail] = useState("")
  const [close, setClosed] = useState(false)

  const handleCloseStorage = e => {
    localStorage.setItem("formConfirm", "true")
    setClosed(true)
  }

  const handleSubmit = e => {
    localStorage.setItem("formConfirm", "true")
    setClosed(true)
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {})
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <div
      className={`fixed left-0 bottom-0 ${
        localStorage.getItem("formConfirm") === "true" || close ? "hidden" : ""
      }`}
    >
      <form onSubmit={handleSubmit} className="EmailListForm">
        <button
          type="button"
          onClick={handleCloseStorage}
          className="btn"
          id="close"
        >
          X
        </button>
        <h2 className="text-md font-bold pb-0">
          Quieres estar al tanto de todo lo nuevo? que esperas escribe tu correo
          aqui abajo
        </h2>{" "}
        <a
          className="text-[10px] text-blue-700"
          href="https://thetrevorharmon.com/"
          rel="noreferrer"
        >
          Gracias thetrevorharmon.com{" "}
        </a>
        <div className="Wrapper">
          <input
            placeholder="Direccion de email"
            name="email"
            type="text"
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  )
}

export default EmailListForm
