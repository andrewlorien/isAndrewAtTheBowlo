// You may or may not need this depending on
// what JavaScript features you're using - e.x. async / await.
// Feel free to remove it and see what happens!
//import '@babel/polyfill'

// Import our top-level sass file.
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our top-level component.
import App from 'components/App'

// fetch does what ajax used to do
import 'whatwg-fetch'

// json file the lambda function writes to
//   THIS KIND OF ACTUALLY WORKS!!
//var isJson = require('./ishe.json')

// Create a single element for our app to live.
document.body.innerHTML = '<div id="app"></div>'
document.body.className = 'bg-black-80 fw4 white-80'

var fileToFetch = 'https://isandrewatthebowlo.com/ishe.json';

// Mount our app.
ReactDOM.render(
  <App />,
  document.querySelector('#app')
)




function tellTheWorld() {
    ReactDOM.render(
        isHeThere(readTheFile()),
        document.querySelector('#isHeThere')
    )
}

function readTheFile() {
    return fetch(fileToFetch)
        
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        console.log('parsed json', json);
        
        return json ;
        
        
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
}    

function isHeThere(json) {
    if (json.ishe = "yes") {
        // check time for "he just arrived" or "he's been there a while"
        return "yes"
    } else if (json.ishe = "no") {
        // if it was recently yes, then return "he just left"
        return "no"
    } else if (json.ishe = "nearly") {
        return "nearly"
    }
}

class Timer extends React.Component {
    constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    }

    tick() {
    this.setState(prevState => ({
        seconds: prevState.seconds + 1
    }));
    }

    componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000); // 1000*60*5 wait 5 minutes
    }

    componentWillUnmount() {
    clearInterval(this.interval);
    }

    render() {
        console.log("read the file", readTheFile())
//        {readTheFile()}
        return (
        <div>
        {isHeThere(readTheFile())}

        Seconds: {this.state.seconds}
        </div>
    );
    }

}

ReactDOM.render(<Timer />, sinceWhen);
tellTheWorld();