import React, { useEffect } from 'react';
import '../styles/LoginPage.css'; 
import backgroundImage1 from '../images/titanic5.png'; 
import backgroundImage2 from '../images/titanic6.png';
import backgroundImage3 from '../images/titanic7.png';
import backgroundImage4 from '../images/titanic8.png';
import backgroundImage5 from '../images/titanic9.png';
import backgroundImage6 from '../images/titanic3.png';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { keycloak, initialized } = useKeycloak(); 
    const navigate = useNavigate();
    const login = async () => { 

        if (keycloak && !keycloak.authenticated) {
          await keycloak.login()  
          console.log("Authenticated:", keycloak.authenticated);
        }
      };
      useEffect(() => {
        if(keycloak.authenticated){
            console.log("Redirecting to logged page")
            navigate("/logged")
        }

      },[keycloak.authenticated])

    return (
        <div className="login-container">
            <h1>Go enjoy your time on a titanic cruise!</h1>  
            <h2 className="ampersand">& <br/> See chance of survive! </h2>
            <button className="login-button" onClick={login}>Log In</button>
            <div className="photo-grid">
                <div className="photo-row">
                    <div className="photo" style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
                    <div className="photo" style={{ backgroundImage: `url(${backgroundImage2})` }}></div>
                    <div className="photo" style={{ backgroundImage: `url(${backgroundImage3})` }}></div>
                </div>
                <div className="photo-row">
                    <div className="photo" style={{ backgroundImage: `url(${backgroundImage4})` }}></div>
                    <div className="photo" style={{ backgroundImage: `url(${backgroundImage5})` }}></div>
                    <div className="photo" style={{ backgroundImage: `url(${backgroundImage6})` }}></div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;