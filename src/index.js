import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div id="main">
                <h1>Top Youtube Gaming Stream Chat</h1>
                <div id="stream">
                    <ul>
                        <li>Chat goes here</li>
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))