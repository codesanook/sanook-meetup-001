import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <section>
        <h3 className="title">Hi, there!</h3>
        <form>
          <input type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="form-field"
            required
            autoFocus />
          <input type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-field"
            required />
          <textarea
            name="message"
            id="message"
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
