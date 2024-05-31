# clase03-core-components

## Tasks:

- Add a delete method

```javascript
const deleteContactHandler = (id) => {
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.id !== id);
    });
  };
```

- Add component ContactList

```javascript
<ContactList contacts={contacts}  deleteContactHandler={deleteContactHandler} />
```
