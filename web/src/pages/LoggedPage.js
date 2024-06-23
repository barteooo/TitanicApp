import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react';
import { navigate, useNavigate } from 'react-router-dom';



const LoggedPage = () => {
  const {keycloak, initialized} = useKeycloak();  
  const navigate = useNavigate()

  const logout =  () => {
     keycloak.logout(); 
  } 
  useEffect(() => {
    if(!keycloak.authenticated){
      navigate("/")
    }
  }, [keycloak.authenticated])
 return (
   <>
   
   <div>
     <h1 className="text-green-800 text-4xl">Welcome to the LoggedPage</h1>
   </div>
   <div>
    <button 
    type='button'
    className='text-blue-800' 
    onClick={() => logout()}
    >
      Logout 
    </button>

   </div>
   </>

 );
};

export default LoggedPage;