import React from 'react';
import PropTypes from 'prop-types';

export default function GetData (props) {
const {fullname,age,profession} = props
const { firstname,lastname}=fullname
return (
    <div className="hi-wrapper">
        <h1> {firstname + ' ' + lastname} </h1>
        <p>{age} ans</p>
        <p>{profession}</p>

    </div>
)
}
GetData.propTypes = {
    fullname: PropTypes.object,
    age: PropTypes.number,
    job:PropTypes.string
}
GetData.defaultProps = {
    fullname:{firstname: 'user', lastname:'user'},
    age:18,
    profession:'etudiant'
}