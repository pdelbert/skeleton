const eventActions =  {
    trigerNavEvent(params: string, setPageRoute:React.Dispatch<React.SetStateAction<string>>): void {
        window.history.replaceState(null, '', `/${params}`)
        setPageRoute(params)
    }
}

export default eventActions;  
