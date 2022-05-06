import React, { useState } from "react";
import KidContext from "./KidContext";

const KidProvider: React.FC<any> = ({props}) => {
  const [isKid, setIsKid] = useState(false);

  return (
      <KidContext.Provider
          value={{
              isKidMode: isKid,
              setKidMode: (kidMode: boolean) => {
                  setIsKid(kidMode)
              },
          }}
      >
          {props.children}
      </KidContext.Provider>
  ); 
}

export default KidProvider;