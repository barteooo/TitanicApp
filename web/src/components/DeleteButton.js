import React from 'react';
import DatabaseApi from '../api/DatabaseApi'; 

const DeleteButton = ({ id , fetchData}) => {
    const handleDelete = async () => {
        const result = await DatabaseApi.deleteCrewMember(id);
        if (result.success) {
            alert(result.message); 
            fetchData()
        } else {
            alert(result.message);
        }
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    );
};
export default DeleteButton;