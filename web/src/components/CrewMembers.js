import React, { useEffect, useState } from 'react';
import DatabaseApi from '../api/DatabaseApi';
import CrewMember from './CrewMember';
const CrewMembers = () => {
    const [crewMembers, setCrewMembers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await DatabaseApi.getAllCrewMembers();
            if (result.success) {
                setCrewMembers(result.crewMembers);
            } else {
                console.error(result.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Crew Members</h1>
            {crewMembers.map(member => (
               <CrewMember key={member.passenger_id} id={member.passenger_id} name={member.passenger_name} age={member.age}/> 
               
            ))}
        </div>
    );
};

export default CrewMembers;