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
var human = require('human-time');




// readTheFile :: this is the actual entrypoint
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
        var nowUTC=new Date(); // now UTC maybe?
        var whenUTC=new Date(json.when); // last seen UTC
        var sinceWhen = (human((nowUTC-whenUTC)/1000)); // diff in UTC (convert to seconds)
        ReactDOM.render(sinceWhen,
            document.querySelector('#sinceWhen')
        );


        isHeThere(json) ;

        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    })
}

// this function is redundant for the moment, but i'll use it if there are more live things to update 
function isHeThere(yesornoJson) {
    var yesorno = "I don't actually know"
    console.log("json=",yesornoJson);
        console.log("ishe ?=",yesornoJson.ishe);
    if (yesornoJson.ishe == "yes") {  // TODO : if ishe CONTAINS "yes"
        console.log("ishe yes?=",yesornoJson.ishe);
        // check time for "he just arrived" or "he's been there a while"
        yesorno = "yes"
    } else if (yesornoJson.ishe == "no") {  // TODO : if ishe CONTAINS "no"
        console.log("ishe no?=",yesornoJson.ishe);
        // if it was recently yes, then return "he just left" (currently doing this with two separate macrodroid triggers)
        yesorno = "no"
    } else  {
        console.log("ishe nearly?=",yesornoJson.ishe);
        yesorno = yesornoJson.ishe 
    }
//    ReactDOM.render(<Timer />, yesorno,document.querySelector('#AndrewsMessage'));  // "Target container is not a DOM element."
//    ReactDOM.render("Since "+yesornoJson.when,document.querySelector('#AndrewsMessage'));  // this works
// set css.backgroundImage to a random image from the $(yesorno) folder
}
 
class Timer extends React.Component {
    constructor(props) {
    super(props);
    this.state = { seconds: 0 };    
    	// check the json file... but how do we do something with it?
    /*
        this.yesorno = readTheFile();
        console.log("Timer:",this.yesorno); // this is still a promise
        this.yesornoresolve=readTheFile().then(function(result) {
        	console.log("resolved result:",result);  // this is undefined
        }, function(err) {
                console.log("Andrew's Error: ",err);
        })
        */
    }

    tick() {
    this.setState(prevState => ({
        seconds: prevState.seconds + 1
    }));
    readTheFile();
    }

    componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000); // 1000*60*5 wait 5 minutes
    }

    componentWillUnmount() {
    clearInterval(this.interval);
    }

    render() {
        // readTheFile passes the result to isHeThere.  that's back to front, but i don't understand promises
//        console.log("read the file", readTheFile()); // readTheFile returns a promise
//        Seconds: {this.state.seconds}
        // 
        return (
        <div >
        {this.state.seconds} 
        </div>
        );
    }

}

readTheFile();

// Mount our app.
ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
ReactDOM.render(<Timer />, aTimer);
// ReactDOM.render(yesorno, isHeThere);
