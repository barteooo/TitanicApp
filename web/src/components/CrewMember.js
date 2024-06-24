import React from 'react';


const CrewMember = ({id,name,age}) => {

 return (
   <div>
    <p>Crew member with id {id}: {name} age: {age}</p>
   </div>
 );
};

export default CrewMember;