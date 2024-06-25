import React, { useState, useEffect, useMemo, useContext } from "react";
import { pageServices } from "../services/pageServices";
import { actions } from "../actions";
import { Methods, Routes } from "../types";

interface IAction {
  eventAction: keyof typeof actions
  route: string
}

const PageContext = React.createContext<undefined>(undefined)


const PageProvider = (props:any) => {
  const initRequestType:Methods = 'get';
  const currentUrl:string = window.location.href.split('/').pop() || "main";
  
  const [pageData, setPageData] = useState<object | unknown>(undefined);
  const [pageRoute, setPageRoute] = useState(currentUrl);

  useEffect(() => {
      (async () => {
        const data = await pageServices(initRequestType,`${pageRoute}`);
        window.history.replaceState(null, '', `/${pageRoute}`)
        setPageData(data);
      })();
  },[pageRoute]);

  const triggerActionEvent = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, action:IAction) => {
    e && e.stopPropagation();
    const {eventAction, route } = action;
    actions[eventAction](route, setPageRoute);
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
