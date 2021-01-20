import React from 'react';
import './styles.css';

const User = ({ name, username, email, address, website, phone, company }) => {

    const { city, street, suite, zipcode, geo } = address;
    const { lat, lng } = geo;
    const { name: companyName, catchPhrase, bs } = company;

    return (
        <>
            <div className="user__wrapper">
                <div className="user__wrapper__info--objects">
                    <div className="user__wrapper__info">
                        <h1 className="user__wrapper__header">User:</h1>
                        <p className="user__wrapper__paragraph">Name: {name}</p>
                        <p className="user__wrapper__paragraph">Username: {username}</p>
                        <p className="user__wrapper__paragraph">Email: {email}
                        </p>
                        <p className="user__wrapper__paragraph">Website: {website}</p>
                        <p className="user__wrapper__paragraph">Phone: {phone
                        }</p>
                    </div>
                    <div className="user__wrapper__info">
                        <h1 className="user__wrapper__header">Address:</h1>
                        <p className="user__wrapper__paragraph">City: {city}</p>
                        <p className="user__wrapper__paragraph">Street: {street}</p>
                        <p className="user__wrapper__paragraph">Suite: {suite}
                        </p>
                        <p className="user__wrapper__paragraph">Zip-Code: {zipcode}</p>
                        <p className="user__wrapper__paragraph">Geolocation: {lat}, {lng}</p>
                    </div>
                </div>
                <div className="user__wrapper__info">
                    <h1 className="user__wrapper__header">Company:</h1>
                    <p className="user__wrapper__paragraph">Name: {companyName}</p>
                    <p className="user__wrapper__paragraph">Phrase: {catchPhrase}</p>
                    <p className="user__wrapper__paragraph">BS: {bs}</p>
                </div>


            </div>
        </>
    )
}

export default User;