import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    const [tweet, setTweet] = useState([])
    useEffect(() => {
        const myCallback = (response, status) => {
            console.log(response, status)
            if (status === 200) {
                setTweet(response)
            }else{
                alert("error")
            }
        }
        loadTweets(myCallback)
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
    const url = "http://127.0.0.1:8000/api/tweets/";
    const respType = "json";
    xhr.responseType = respType;
    xhr.open(method, url);
    xhr.onload = function () {
        callback(xhr.response, xhr.status)
    }
    xhr.onerror= function (e){
        console.log(e)
        callback({"message":"error"},400)
    }
    xhr.send();
}

export default App;
