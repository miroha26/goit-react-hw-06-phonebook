import { Form, Title, Contacts, Filter } from './index';

const App = () => {
  return (
    <div>
      <Title title="PhoneBook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      <Contacts />
    </div>
  );
};

export default App;
