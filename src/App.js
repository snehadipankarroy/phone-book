import React, { Component } from 'react';
import uuid from 'uuid';
import AddContact from './Components/AddContact';
import Contacts from './Components/Contacts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: uuid.v4(),
          name: "Sudipta",
          phone: "732-256-9279"
        },
        {
          id: uuid.v4(),
          name: "Monali",
          phone: "256-226-6245"
        },
        {
          id: uuid.v4(),
          name: "Trina",
          phone: "732-324-7555"
        }
      ]
    }
  }

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contacts:contacts});
  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id);
    contacts.splice(index, 1);
    this.setState({contacts:contacts});
  }

  handleEditContact(id){
    //console.log(id);
    this.setState({isEditable: true});
  }

  handleUpdateContact(updatedContactId, updatedContactName, updatedContactPhone){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === updatedContactId);
    //console.log(contacts[index]);
    contacts[index].name = updatedContactName;
    contacts[index].phone = updatedContactPhone;
    this.setState({contacts:contacts});
  }

  render() {
    return (
      <div>
        <AddContact addContact={this.handleAddContact.bind(this)}/>
        <Contacts contacts={this.state.contacts} updatedContact={this.handleUpdateContact.bind(this)} onDelete={this.handleDeleteContact.bind(this)} onEdit={this.handleEditContact.bind(this)}/>
      </div>
    );
  }
}

export default App;
