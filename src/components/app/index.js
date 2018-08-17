import React, { Component } from 'react'
import Tags from 'components/Tags'

import './index.css'
import 'animate.css'


class App extends Component {

  render() {

    return (
      <main className="tag-wrapper animated fadeIn">
        <Tags />
      </main>
    )
  }
}


export default App