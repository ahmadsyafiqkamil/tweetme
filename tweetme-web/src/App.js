import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    const [tweet, setTweet] = useState([])
    useEffect(() => {



        const tweetItem = [{"content": 123}, {"content": 123134}]
        setTweet(tweetItem)
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>{tweet.map((tweet, index) => {
                    return <li>{tweet.content}</li>
                })}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function loadTweets(callback) {
    const xhr = new XMLHttpRequest();
    const method = 'GET';
    const url = "/tweets";
    const respType = "json";
    xhr.responseType = respType;
    xhr.open(method, url);
    xhr.onload = function () {
        callback(xhr.response, xhr.status)
    }
    xhr.send();
}

export default App;
