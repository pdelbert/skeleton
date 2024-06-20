import React, { useState, useEffect, useMemo, useContext } from "react";
import { pageServices } from "../services/pageServices";
import { actions } from "../actions";

interface IAction {
  eventAction: keyof typeof actions
  route: string
}

const baseRequestUrl = `http://localhost:4000/`;

const PageContext = React.createContext<undefined>(undefined)


const PageProvider = (props:any) => {
  
  const currentUrl = window.location.href.split('/').pop();

  const [pageEvent, setPageEvent] = useState('');
  const [pageData, setPageData] = useState<undefined>(undefined);
  const [pageRoute, setPageRoute] = useState(currentUrl && currentUrl.length > 0 ? currentUrl : 'main');

  useEffect(() => {
      (async () => {
        const data = await pageServices(`${baseRequestUrl}${pageRoute}`);
        window.history.replaceState(null, '', `/${pageRoute}`)
        setPageData(data);
      })();
  },[pageRoute]);

  const triggerActionEvent = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, action:IAction) => {
    e && e.stopPropagation();
    const {eventAction, route } = action;
    actions[eventAction](route, setPageRoute);
    setPageEvent('triggerActionEvent')
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
