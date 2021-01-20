import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./styles.css";

import Autocomplete from '../../components/Autocomplete';
import User from '../../components/User';

const Main = () => {

    const users = useSelector(state => state.users)
    const [showedUser, setShowedUser] = useState();

    return (
        <div className="main__wrapper">
            <Autocomplete users={users} setShowedUser={setShowedUser} />
            {showedUser &&
                <User
                    name={showedUser.name}
                    username={showedUser.username}
                    website={showedUser.website}
                    phone={showedUser.phone}
                    email={showedUser.email}
                    address={showedUser.address}
                    company={showedUser.company}
                />
            }
        </div>
    )
}

export default Main;