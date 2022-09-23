import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

import { List, ListItem, ListItemText, Btn } from './ContactList.styled';

export const ContactListItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filtredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = filtredContacts();

  return (
    <>
      {visibleContacts.map(contact => (
        <ListItem id={contact.id} key={contact.id}>
          <ListItemText>
            <b>{contact.name}</b> : {contact.number}
          </ListItemText>
          <Btn
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </Btn>
        </ListItem>
      ))}
    </>
  );
};

export const ContactList = () => {
  return (
    <List>
      <ContactListItem />
    </List>
  );
};
