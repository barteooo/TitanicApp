import React, { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web'; 
import { useNavigate } from 'react-router-dom';
import PredictionForm from '../components/PredictionForm';

const PredictionPage = () => {
    const {keycloak, initialized} = useKeycloak();   
    const navigate = useNavigate()

    useEffect(() => {
        if(!keycloak.authenticated){
          navigate("/")
        }
      }, [keycloak.authenticated])

 return (
   <div>
     <PredictionForm />
   </div>
 );
};

export default PredictionPage;