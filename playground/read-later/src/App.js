import React, {useState}  from 'react'
import List from './components/list.js'
import Form from './components/form.js'

import "./App.scss"

const links = [
  {
    url: "google.com",
    description: "Google",
    timestamp: "12 o clock",
    read: false
  },
  {
    url: "example.com",
    description: "Example",
    timestamp: "1 o clock",
    read: true
  },
]

const App = () => {
  const [list,addList] = useState(links)

  const add = (url,description,read) => {
    addList([...list, {url:url, description:description,read:read, timestamp:new Date().toLocaleString()}])
  }

  

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <p>Hello World!</p>
      <div className="column">
        <p>All Links</p>
        <List data={list}/>
      </div>
      <div className="column">
        <p>New Link</p>
        <Form add={add}/>
      </div>
    </div>
  );
}

export default App;
