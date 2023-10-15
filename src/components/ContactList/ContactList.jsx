import { Table } from './ContactList.styled';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </tbody>
    </Table>
  );
};
