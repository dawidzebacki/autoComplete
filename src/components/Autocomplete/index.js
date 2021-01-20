import React, { useState, useEffect } from 'react';
import './styles.css';

const Autocomplete = ({ users, setShowedUser }) => {

    const [text, setText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [focusedInput, setFocusedInput] = useState(false);
    const [focusedStrings, setFocusedStrings] = useState(false);

    const filterUsers = users => {

        if (text.length === 0) return [];

        return users.filter((element) => {
            const user = `${element.name}, ${element.username}`.toLowerCase();

            if (user === text.toLowerCase()) return null;
            else return user.includes(text.toLowerCase());
        });
    }

    const chooseUser = (user) => {
        const pickedUser = `${user.name}, ${user.username}`;
        setText(pickedUser);
    }

    const showUser = (user) => {
        if (user.includes(',')) {
            const name = user.split(',')[0];
            const username = user.split(',')[1].trim();

            setShowedUser(users.find(
                element =>
                    element.name === name &&
                    element.username === username));
        }
    }

    useEffect(() => {
        setFilteredUsers(filterUsers(users));
    }, [text])

    return (
        <>
            <div className="autocomplete__wrapper">
                <input
                    className="autocomplete__input"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    onFocus={() => setFocusedInput(true)}
                    onBlur={() => setFocusedInput(false)}
                />
                {filteredUsers.length > 0 && (focusedInput || focusedStrings)
                    && (
                        <div className="autocomplete__strings"
                            onMouseEnter={() => setFocusedStrings(true)}
                            onMouseLeave={() => setFocusedStrings(false)}
                        >
                            {filteredUsers.map((element) => {
                                return <span
                                    key={element.id}
                                    onClick={() => chooseUser(element)}
                                    className="autocomplete__strings__string">
                                    {element.name}, {element.username}
                                </span>
                            })}
                        </div>
                    )}
                <button className="autocomplete__input__button"
                onClick={() => showUser(text)}>Search</button>
            </div>
        </>
    )
}

export default Autocomplete;