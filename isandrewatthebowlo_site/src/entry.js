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

// Create a single element for our app to live in.
document.body.innerHTML = '<div id="app"></div>'
document.body.className = 'bg-black-80 fw4 white-80'

// change this to https when we change the Route53 entry to point to cloudfront instead of S3
var fileToFetch = 'http://isandrewatthebowlo.com/ishe.json';

// Mount our app.
ReactDOM.render(
  <App />,
  document.querySelector('#app')
)




function readTheFile() {
    return fetch(fileToFetch)

    .then(function(response) {
        return response.json()
    .then(function(json) {
        console.log('parsed json=', json);
	// temporarily try writing to the main object
        ReactDOM.render(json.ishe,
        document.querySelector('#isHeThere')
	);

        return isHeThere(json) ;

        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    })
}

function isHeThere(yesorno) {
    console.log("json=",yesorno);
    if (yesorno.ishe == "yes") {
        console.log("ishe yes?=",yesorno.ishe);
        // check time for "he just arrived" or "he's been there a while"
        return "yes"
    } else if (yesorno.ishe == "no") {
        console.log("ishe no?=",yesorno.ishe);
        // if it was recently yes, then return "he just left"
        return "no"
    } else if (yesorno.ishe == "nearly") {
        console.log("ishe nearly?=",yesorno.ishe);
        return "nearly"
    }
}

class Timer extends React.Component {
    constructor(props) {
    super(props);
    this.state = { seconds: 0 };    
    	// check the json file... but how do we do something with it?
        this.yesorno = readTheFile();
        console.log(this.yesorno); // this is still a promise
	this.yesornoresolve=readTheFile().then(function(result) {
        	console.log("resolved result:",result);
        	}, function(err) {
                   console.log(err);
        })
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
//        console.log("read the file", readTheFile()); // readTheFile returns a promise
        // readTheFile passes the result to isHeThere.  that's back to front, but i don't understand promises
        return (
        <div>
        {this.yesorno} message goes here
	<br/>
        Seconds: {this.state.seconds}
        </div>
        );
    }

}

ReactDOM.render(<Timer />, sinceWhen);
// ReactDOM.render(yesorno, isHeThere);
