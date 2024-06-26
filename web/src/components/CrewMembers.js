import React, { useEffect, useState } from 'react';
import DatabaseApi from '../api/DatabaseApi';
import CrewMember from './CrewMember';
import DeleteButton from './DeleteButton';
const CrewMembers = () => {
    const [crewMembers, setCrewMembers] = useState([]);
    const fetchData = async () => {
        const result = await DatabaseApi.getAllCrewMembers();
        if (result.success) {
            setCrewMembers(result.crewMembers);
        } else {
            console.error(result.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h1>Crew Members</h1>
            {crewMembers.map(member => ( 
                <div key={member.passenger_id}>
                    <CrewMember key={member.passenger_id} id={member.passenger_id} name={member.passenger_name} age={member.age}/> 
                    <DeleteButton key={member.passenger_id} id={member.passenger_id} fetchData={fetchData}/>
                </div>    
            ))}
        </div>
    );
};
export default CrewMembers;


