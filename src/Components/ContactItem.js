import React, { Component } from 'react';

class ContactItem extends Component {
  constructor(){
    super();
    this.state = {
      isEditable: false,
      newName: "",
      newPhone: ""
    };
  }
  deleteContact(id){
    //console.log('Delete button clicked');
    this.props.onDelete(id);
  }

  handleEditClick(){
    this.setState({isEditable: true});
  }

  handleUpdateClick(){
    this.setState({isEditable: false});
    // let updatedContactObj = {
    //   id: this.props.contact.id,
    //   name: this.state.newName,
    //   phone: this.state.newPhone
    // };
    this.props.updatedContact(this.props.contact.id, this.state.newName, this.state.newPhone);
  }

  handleNameChange(e) {
    //console.log(e.target.value);
    this.setState({newName: e.target.value});
  }

  handlePhoneChange(e) {
    this.setState({newPhone: e.target.value});
  }

  render() {

    const isEditable = this.state.isEditable;
    let button = null;
    let inputName = null;
    let inputPhone = null;
    if (isEditable) {
      inputName = <input type="text" id="abc" placeholder={this.props.contact.name} onChange={this.handleNameChange.bind(this)} />;

      //console.log(this.props.contact.name);
      inputPhone = <input type="text" placeholder={this.props.contact.phone} onChange={this.handlePhoneChange.bind(this)} />;
      button = <button onClick={this.handleUpdateClick.bind(this)}>Update</button>;
    } else {
      inputName = <td>{this.props.contact.name}</td>;
      inputPhone = <td>{this.props.contact.phone}</td>;
      button = <button onClick={this.handleEditClick.bind(this)}>Edit</button>;
    }

    return (
      <tr>
        <td>{this.props.contact.id}</td>
        <td>{inputName}</td>
        <td>{inputPhone}</td>
        <td>{button}<button onClick={this.deleteContact.bind(this, this.props.contact.id)}>Delete</button></td>
      </tr>
    );
  }
}

export default ContactItem;
