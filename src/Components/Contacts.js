import React, { Component } from 'react';
import ContactItem from './ContactItem';

class Contacts extends Component {
  deleteContact(id){
    this.props.onDelete(id);
  }

  editContact(id){
    this.props.onEdit(id);
  }
  onUpdate(updatedContactId, updatedContactName, updatedContactPhone){
    this.props.updatedContact(updatedContactId, updatedContactName, updatedContactPhone);
  }

  render() {
    let contactItems;
    if(this.props.contacts){
      contactItems = this.props.contacts.map(contact => {
        return (
          <ContactItem updatedContact={this.onUpdate.bind(this)} onDelete={this.deleteContact.bind(this)} onEdit={this.editContact.bind(this)} contact={contact}/>
        );
      });
    }
    return (
      <div>
      <h3>Phone Book</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactItems}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Contacts;
