import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

const LoadingContext = createContext<any>(null);

const LoadingContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  return { isLoading, setIsLoading };
};

export { LoadingContext, LoadingContextProvider, useLoading };
