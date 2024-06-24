import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react';
import { navigate, useNavigate } from 'react-router-dom'; 



const LoggedPage = () => {
  const {keycloak, initialized} = useKeycloak();  
  const navigate = useNavigate() 
  const isAdmin = keycloak.authenticated && keycloak.hasRealmRole('admin')

  const logout =  () => {
     keycloak.logout(); 
  } 

  const goToPredictionPage = () => {
    navigate("/predict")
  } 

  const goToAdminPage = () => {
    navigate("/admin")
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
    <button onClick={goToPredictionPage}>Check chance of survive</button>
    {isAdmin && (
          <button onClick={goToAdminPage}>Admin Section</button>
        )}
   </div>
   </>

 );
};

export default LoggedPage;