import React from 'react';

const Options = ({
    users
}) => {
    return (
        <>
            {
                users.map((users) => {
                    return (
                        <option value={users}>{users}</option>
                    )
                })
            }
        </>
    )
}
export default Options;