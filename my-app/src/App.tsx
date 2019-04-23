import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`
    Hi ${name}
    Email: ${email}
    Message: ${message}
    `)
    setName("");
    setEmail("")
    setMessage("")
  }

  return (
    <div className="container">
      <div>
        <h3>Hi there!</h3>
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={e => setName(e.target.value)}
            className="form-field"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="form-field"
          />
          <textarea
            rows={4}
            placeholder="Message"
            value={message}
            name="message"
            onChange={e => setMessage(e.target.value)}
            className="form-field"
          >
          </textarea>
          <button type="submit" className="btn">Send message</button>
        </form>
      </div>
    </div>
  )
}

export default App;
