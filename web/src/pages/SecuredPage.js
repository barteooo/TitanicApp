import React, { useEffect, useState } from 'react';
import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const { keycloak } = useKeycloak();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await keycloak.tokenParsed;
      setUserInfo(JSON.stringify(info));
    };

    fetchUserInfo();
  }, [keycloak]);

  return (
    <div>
      <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
      <p className="text-black text-2xl">User info: {userInfo}</p>
    </div>
  );
};

export default Secured;