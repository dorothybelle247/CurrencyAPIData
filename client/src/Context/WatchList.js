import React, {useState, createContext} from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["bitcoin", "etherem"])

    return(
        <div>
    <WatchListContext.Provider value={{ watchList}}>
      {props.children}
    </WatchListContext.Provider>
        </div>
    )
}