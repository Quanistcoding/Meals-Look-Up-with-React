import { ReactNode, createContext, useContext, useState } from "react";

interface SearchTextContextType {
  text: string;
  setSearchText: (name: string) => void;
}

export const SearchTextContext = createContext({} as SearchTextContextType);

interface Props {
  children: ReactNode;
}

const SearchContext = ({ children }: Props) => {
  const [text, setText] = useState("");

  const setSearchText = (name: string) => {
    setText(name);
  };

  return (
    <SearchTextContext.Provider value={{ text, setSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
};

export default SearchContext;

export const useSearchContext = () => {
  return useContext(SearchTextContext);
};
