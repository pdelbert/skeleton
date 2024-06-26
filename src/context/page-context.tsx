import React, { useState, useEffect, useMemo, useContext } from "react";
import { pageServices } from "../services/pageServices";
import { actions } from "../actions";
import { Methods } from "../types";
import { Routes } from "../Routes";

interface IAction {
  eventAction: keyof typeof actions
  params: object
}

const EMPTY = '';
const initRequestType:Methods = 'get';
const currentRoute:string = window.location.href.split('/').pop() || EMPTY;
const PageContext = React.createContext<undefined>(undefined);


const PageProvider = (props:any) => {
  const [pageData, setPageData] = useState<object | unknown>(undefined);
  const [pageRoute, setPageRoute] = useState(currentRoute in Routes ? currentRoute : Routes.main);

  
  useEffect(() => {
      (async () => {
        setPageData(await pageServices(initRequestType,`${pageRoute}`));
        window.history.replaceState(null, '', `/${pageRoute}`);
      })();
  },[pageRoute]);


  const triggerActionEvent = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, action:IAction) => {
    e.stopPropagation();
    const {eventAction, params } = action;
    actions[eventAction](params, setPageRoute);
  }


  const value = useMemo(() => {
    return { 
      pageData, 
      triggerActionEvent 
    };
  }, [pageData]);


  return <PageContext.Provider value={value} {...props} />; 
};

const Context = () => {
  const context = useContext(PageContext);
  if (!context) { throw new Error(context) }
  return context;
};

export { PageProvider, Context };
