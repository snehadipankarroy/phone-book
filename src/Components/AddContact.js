import React, { Component } from 'react';
import uuid from 'uuid';

class ContactItem extends Component {
  constructor(){
    super();
    this.state = {
      newContact : {}
    }
  }
  submitDetails(e){
    if(this.refs.name.value === ""){
      alert('Contact name is required');
    } else if(this.refs.phone.value === ""){
      alert('Phone number is required');
    } else {
      this.setState({newContact:{
        id: uuid.v4(),
        name: this.refs.name.value,
        phone: this.refs.phone.value
      }}, function(){
        this.props.addContact(this.state.newContact);
      });
    }
    e.preventDefault();
    //console.log("Submitted " + this.refs.name.value  + " " + this.refs.phone.value);
  }
  render() {
    return (
      <div>
        <h3>Add Contact</h3>
        <form onSubmit={this.submitDetails.bind(this)}>
          <div>
            <input type="text" placeholder="Please enter contact name" ref="name" />
          </div>
          <br />
          <div>
            <input type="text" placeholder="Please enter phone number" ref="phone" />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactItem;
