import React from 'react';

const Kudos = (props) => {
    return (
        <>
    <h2>Kudos</h2>

    {
    props.data.map(data => (
    <div className="card">
        <h4>To: {data.toname}</h4>
        <div className="card-body">
        <h5>{data.kudos}</h5>
        </div>
        <div className="card-footer">
        <h5>From: {data.username}</h5>
        </div>
    </div>
    ))}
</>
)}

export default Kudos;
