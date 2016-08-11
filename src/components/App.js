import React, { Component } from 'react';
import Jackson from './Jackson';
import firebase from 'firebase';

  // Initialize Firebase
const config = {
  apiKey: 'AIzaSyCxj9IPD23Wsa9XRlx5z3z_qGkefRSDy1Q',
  authDomain: 'react-tarot.firebaseapp.com',
  databaseURL: 'https://react-tarot.firebaseio.com',
  storageBucket: 'react-tarot.appspot.com',
};
const firebaseApp = firebase.initializeApp(config);
const storage = firebaseApp.storage();
const storageRef = storage.ref();
const sunRef = storageRef.child('Sun_19.jpg');

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  getCardUrl() {
    sunRef.getDownloadURL().then(function(url) {
      this.state.path = url;
    }).catch(function(error) {
    //handle the errors
      console.log('ERROR!!' + error);
    });
  }

  drawCard() {
    return Math.floor(Math.random() * 22);
  }

  getNewCard(e) {
    e.preventDefault();
    this.setState({ card: this.drawCard() });
  }

  render() {
    return (
      <div className='container'>
        <h1>Hello, world!</h1>
        <h3>{this.state.card}</h3>
        <button onClick={e => {
          this.setState({ card: this.drawCard() });
        }}>DRAW ANOTHER CARD</button>
          <p>Let's get funky.
          { this.getCardUrl() }
          { this.state.path }
          </p>
          <Jackson />
      </div>
    );
  }
}
