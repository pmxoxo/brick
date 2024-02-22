import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for the context value
interface SiteContextType {
  siteTitle: string;
  setSiteTitle: (title: string) => void;
  telegramLink: string;
  setTelegramLink: (url: string) => void;
  twitterLink: string;
  setTwitterLink: (url: string) => void;
}

// Create the context with initial dummy values
const SiteContext = createContext<SiteContextType>({
  siteTitle: 'BRICK',
  setSiteTitle: title => {}, // Dummy function
  telegramLink: 'https://t.me/bricksolchain',
  setTelegramLink: url => {}, // Dummy function
  twitterLink: 'https://twitter.com/bricksolchain',
  setTwitterLink: url => {} // Dummy functionhavent' don
});

export const useSiteTitle = () => useContext(SiteContext);
export const useTelegramLink = () => useContext(SiteContext).telegramLink;
export const useTwitterLink = () => useContext(SiteContext).twitterLink;

// Define the type for the props
interface SiteProviderProps {
  children: ReactNode;
}

export const SiteProvider: React.FC<SiteProviderProps> = ({ children }) => {
  const [siteTitle, setSiteTitle] = useState<string>('BRICK');
  const [telegramLink, setTelegramLink] = useState<string>('https://t.me/bricksolchain');
  const [twitterLink, setTwitterLink] = useState<string>('https://twitter.com/bricksolchain');

  return (
    <SiteContext.Provider value={{ siteTitle, setSiteTitle, telegramLink, setTelegramLink, twitterLink, setTwitterLink }}>
      {children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;
