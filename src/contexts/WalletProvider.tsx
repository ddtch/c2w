import React, {useState} from "react";
import {WalletContext} from './WalletContext';

export const WalletProvider:React.FC<any> = ({ children }) => {
  const [summ, setSumm] = useState<number>(12.5);
  const topUp = (amount: number) => setSumm(summ + amount);

  return (
    // @ts-ignore
    <WalletContext.Provider value={{ summ, topUp }}>
      {children}
    </WalletContext.Provider>
  );
};