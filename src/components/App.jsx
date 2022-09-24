import { UserForm } from './ContactsForm/Form';
import { ContactList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { Box } from './Box';

export const App = () => {
  return (
    <Box width={380} listStyle="none" ml="45px" mt="20px" p="0">
      <h1>Phonebook</h1>
      <UserForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Box>
  );
};
