import { Section } from 'components/common/Section/Section';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export default class Phonebook extends Component {
  state = {
    contacts: [{ id: '1', name: 'Pavel', number: '654654321' }],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });

    this.resetForm();
  };

  resetForm = () => this.setState({ name: '', number: '' });

  getFilteredContacts = () => {};

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <Section title={'Phonebook'} titleTag="h1">
          <form onSubmit={this.onSubmit}>
            <label>
              NAME
              <input
                onChange={this.handleChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              NUMBER
              <input
                value={number}
                onChange={this.handleChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">ADD CONTACT</button>
          </form>
        </Section>
        <Section title={'Contacts'}>
          <ul>
            <input
              name="filter"
              value={this.state.filter}
              onChange={this.handleChange}
            />
            {contacts.map(({ id, name, number }) => (
              <li key={id}>
                <span>{name}</span>
                <span>{number}</span>
              </li>
            ))}
          </ul>
        </Section>
      </>
    );
  }
}
