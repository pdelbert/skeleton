import React, { useState, useEffect, useMemo, useContext } from "react";
import { pageServices } from "../services/pageServices";

const route = 'http://localhost:4000/main';
const PageContext = React.createContext();
   
const PageProvider = (props) => {
  const [pageData, setPageData] = useState(null);
  
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
