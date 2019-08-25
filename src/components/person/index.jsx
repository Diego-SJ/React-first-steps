import React from 'react'
import './index.scss'

const Person = (props) => {
    return (
        <div className="person-container">
            <div className="person-row">
                <p>Nombre: {props.persons.name}</p>
            </div>
            <div className="person-row">
                <p>Apellidos: {props.persons.lname}</p>
            </div>
            <div className="person-row">
                <p>Edad: {props.persons.age}</p>
            </div>
            <div className="person-row">
                <p>Email: {props.persons.email}</p>
            </div>
        </div>
    )
}

export default Person