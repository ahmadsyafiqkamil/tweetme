import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Tweet(props) {
    const {tweet} = props
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    return (<div className={className}>
        <p>{tweet.id}-{tweet.content}</p>

    </div>)
}

function App() {
    const [tweet, setTweet] = useState([])
    useEffect(() => {
        const myCallback = (response, status) => {
            console.log(response, status)
            if (status === 200) {
                setTweet(response)
            } else {
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
                <div>{tweet.map((item, index) => {
                    return <Tweet tweet={item} className="my-5 py-5 border bg-white text-dark" key={`${index} - {item.id}`}/>
                })}
                </div>
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
    xhr.onerror = function (e) {
        console.log(e)
        callback({"message": "error"}, 400)
    }
    xhr.send();
}

export default App;
