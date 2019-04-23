import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`
      Hi, ${name}!
      Email: ${email}
      Message: ${message}
    `);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="container">
      <section>
        <h3 className="title">Hi, there!</h3>
        <form onSubmit={submitForm}>
          <input type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            className="form-field"
            required
            autoFocus />
          <input type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="form-field"
            required />
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
            rows={4}
            className="form-field"
            required>
          </textarea>
          <input type="submit" value="Send Message" className="btn"></input>
        </form>
      </section>
    </div>
  );
}

export default App;
