# sanook-workshop-001

# CodeSanook Workshop 001: React, TypeScript and VS Code.

## Create an App with React and Typescript `react-create-app` 

Run in your terminal: 

`$ npx create-react-app APP_NAME --typescript`

> Replace APP_NAME for the name of your app

The output will be like that:

```
You can now view contact-final in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.8:3000/

Note that the development build is not optimized.
To create a production build, use yarn build (or npm run build).
```

Links: [react-create-app](https://github.com/facebook/create-react-app)

## Add the CSS and Delete Generated Code

Open `App.css` and read the code is a small css code. 

Now Replace `./contact/src/App.css` by `./App.css`

and, 

Delete the generated code inside the `return` in `App.tsx`, your file should be like that:

`App.tsx`
```
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
    </div>
  );
}

export default App;
```

## Create a Contact Form

Create a contact form with: Name, Email and Message (long text).

`App.tsx`
```
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
```

## Add `value`, `state` and `hooks`

Also in `App.tsx`, import `useState` hook from `react`:

`import React, { useState } from 'react';`

Then create the state properties:

```
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
```

then add the `value` and `onChange` in the `input` elements.

```
<input type="text"
  name="name"
  id="name"
  value={name}
  onChange={e => setName(e.target.value)}
  placeholder="Name"
  className="form-field"
  required
  autoFocus />
```

> Repeat for the email, and message.

To verify your `App.tsx` should be like that:

`App.tsx`
```
import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="container">
      <section>
        <h3 className="title">Hi, there!</h3>
        <form>
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
```

## Submit the Form

Go to `App.tsx` and create a function to handle  the form submit event.

```
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
```
Add the `onSubmit` in the `<form>` element

```
<form onSubmit={submitForm}>
```

Here is the complete `App.tsx`

`App.tsx`
```
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
```

## Congratulations

Congratulations! You just built your react app, what we did so far:
- create a new app using `create-create-app`
- use typescript
- how to handle state using react hooks
- how to submit a form using react