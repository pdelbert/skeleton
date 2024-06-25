import { Routes } from "../Routes";

const eventActions =  {
    trigerNavEvent(params: any, setPageRoute:React.Dispatch<React.SetStateAction<string>>): void {
        const { route }  = params
        const redirect:string = route in Routes ? route : Routes.main;
        window.history.replaceState(null, '', `/${redirect}`)
        setPageRoute(redirect)
    }
}

export default eventActions;  
