import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import $ from "axios"
import Modal from './components/Modal';

const data1 = [
  {
    username: "bob",
    kudos: "kudos to you!",
    toname: "george"
  },
  {
    username: "bob1",
    kudos: "kudos1 to you!",
    toname: "george1"
  },
  {
    username: "bob2",
    kudos: "kudos2 to you!",
    toname: "george2"
  }
]

class App extends Component {
  state = {
    modal: false,
    error: false,
    data: [],
    users : []
  }

  getKudos = () => {
    $.get(`api/kudos`)
      .then((data) => {
        this.setState({data:data.data})
      })
  }

  getUsers = () => {
    let users = ['']
    $.get(`api/users`)
      .then((data) => {
        console.log(data)
        if (data.data.length !== 0) {
        for (let i = 0; i < data.data.length; i++) {
          users[i] = data.data[i].username
        } this.setState({ users: users})
       } else {
          for (let i = 0; i < this.state.data.length; i++) {
            users[i] = this.state.data[i].username
        }
        this.setState({ users: users})
      }})
  }

  componentDidMount = () => {
    this.getKudos()
    this.getUsers()

  }


  sendKudos = () => {
    let e = document.getElementById("userOpt");
    let userOpt = e.options[e.selectedIndex].value;
    let f = document.getElementById("userOpt");
    let toOpt = f.options[f.selectedIndex].value;
    let kudo = document.getElementById("kudo").value;
    
    if (userOpt && toOpt) {
      const kudos = {
        kudos: kudo,
        username: userOpt,
        toname: toOpt
      }
      $.post(`api/kudos`, kudos)
        .then(() => {
          // document.getElementById('kudos').val('');
          // document.getElementById('userOpt').val('');
          // document.getElementById('toOpt').val('');
          this.getKudos()
        })
    }
  }

  handleModal = (e) => {
    e.preventDefault()
    this.setState({
      modal: true
    })
  }

  handleClose = (e) => {
    e.preventDefault()
    this.setState({
      modal: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendKudos()
    this.setState({
      modal: false,
      error: false
    })
  }

  render() {
    return (
      <>
        {this.state.modal ?
          <Modal 
          handleClose={this.handleClose}
          handleSubmit={this.handleSubmit}
          show={this.state.modal}
          error={this.state.error}
          users={this.state.users}
          /> :
                    <>
                    <div className="container">
                      <Header />
                      <Body
                        data={this.state.data}
                        handleModal={this.handleModal}
                        show={this.state.modal}
                        error={this.state.error} />
                    </div>
                    <div className="container">
                      <Footer />
                    </div> </> }

      </>
    );
  }
}

export default App;
