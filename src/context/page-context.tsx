import React, { useState, useEffect, useMemo, useContext } from "react";
import { pageServices } from "../services/pageServices";

const route = 'http://localhost:4000/main';
   
const PageContext = React.createContext<undefined>(undefined)
   
const PageProvider = (props:any) => {
  const [pageData, setPageData] = useState<undefined>(undefined);
  
  useEffect(() => {
      (async () => {
        const data = await pageServices(route);
        setPageData(data);
      })();
  },[]);

  const value = useMemo(() => {
    return { pageData };
  }, [pageData]);

  return <PageContext.Provider value={value} {...props} />; 
};

const Context = () => {
  const context = useContext(PageContext);
  if (!context) { throw new Error(context) }
  return context;
};

export { PageProvider, Context };
