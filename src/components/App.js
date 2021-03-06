import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './contactList';
import AddContact from './addContact';
import ContactDetails from './contactDetails';

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        {
          Id: 1,
          name: "Ben Blocker",
          imageURL: "G",
          email: 'test@123.com',
          phone: '123-456-7890'
        }, {
          Id: 2,
          name: "John Jacobs",
          imageURL: "G",
          email: 'test@123.com',
          phone: '123-456-7890'
        }
      ]
    }
    this.addNewContact = this.addNewContact.bind(this);




    const contactData = this.state.contacts.map(function(b, index) {
      const contact = {
        Id: b.Id,
        name: b.name
      }



      // return contact
      return (<div className="contact1">
        {contact.name}
      </div>);

    });


}


addNewContact(contact) {
    this.state.contacts.concat(contact)
  };

  addNewContact(newContact)
// console.log(this.state.contacts)

  render() {
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Contact List</h1>
            <hr/>
          </div>
          <Link to='/contacts/new'>
          <button type="button" className="btn btn-primary">New Contact</button></Link>

          <Switch>
            <Route exact="exact" path="/" component={ContactList}/>
          {/* <Route path="/contactdetails" component={contactDetails} /> */}
            <Route path="/contacts/new" component={AddContact}/>
          <Route path='/contactList' render={() => (
          <ContactList addContact={this.addNewContact} contacts={this.state.contacts} />
            )}/>
          </Switch>

          <br></br>
          <br></br>
          <h1>Contacts:</h1>
          <ContactList contacts={this.state.contacts}/>
          <hr/>
          <div className="contacts"></div>
        </div>
      </div>
    </div>);
  }

}

ReactDOM.render((<BrowserRouter>
  <App/>
</BrowserRouter>), document.getElementById('root'))
export default App;
