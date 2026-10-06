import {useState} from 'react';

function Day21() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function addContact() {
        if (name === '') return;
        const newContact = {id : Date.now(), name: name};
        setContacts([...contacts, newContact]);
        setName("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a contact name"
                value={name}
                onChange={handleNameChange}
            />
            <button onClick={addContact}>Add Contact</button>

            {contacts.length === 0 ? (
                <p>No contacts yet.</p>
            ) : (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>{contact.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Day21;