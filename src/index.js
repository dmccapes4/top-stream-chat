import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="stream">
                    <h3>Top Youtube Gaming Stream Chat</h3>
                    <ul>
                        <li>Chat goes here</li>
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))