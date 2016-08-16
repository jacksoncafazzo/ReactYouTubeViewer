import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Jackson from './Jackson';

const API_KEY = 'AIzaSyCxj9IPD23Wsa9XRlx5z3z_qGkefRSDy1Q';

// import firebase from 'firebase';

  // Initialize Firebase
// const config = {
//   apiKey: 'AIzaSyDBiUc_UZOeQJMmmfuRgucKTX_VdGR5yqM',
//   authDomain: 'fir-storage-sample-eff34.firebaseapp.com',
//   databaseURL: 'https://fir-storage-sample-eff34.firebaseio.com',
//   storageBucket: 'fir-storage-sample-eff34.appspot.com',
// };
// const firebaseApp = firebase.initializeApp(config);
// const storage = firebaseApp.storage();
// const storageRef = storage.ref();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
       <SearchBar />
       <Jackson />
      </div>
    );
  }
}
