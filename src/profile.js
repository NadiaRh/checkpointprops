import React from 'react';
import PropTypes from 'prop-types';

export default function GetData (props) {
const {name,age,job} = props
const { firstname,lastname}=name
return (
    <div className="hi-wrapper">
        <h1> {firstname + ' ' + lastname} </h1>
        <p>{age} ans</p>
        <p>{job}</p>

    </div>
)
}
GetData.propTypes = {
    name: PropTypes.object,
    age: PropTypes.number,
    job:PropTypes.string
}
GetData.defaultProps = {
    name:{firstname: 'user', lastname:'user'},
    age:18,
    job:'etudiant'
}