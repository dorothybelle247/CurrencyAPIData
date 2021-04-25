import React, { useEffect, useState, useContext } from "react";
import JarGetko from "../apis/JarGetko";
import { WatchListContext } from "../Context/WatchList";
import Coin from "./Coin"

const JarList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(watchList);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await JarGetko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(" , ")
        }
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const renderCoins = () => {
    if(isLoading){
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <ul className="jarList list.group mt-2">
    {coins.map(coin => {
   return (
    <Coin 
        key={coin.id} 
        coin={coin}
      />
   ) 
    })}
      </ul>
    )
  }
  return <div>
    {renderCoins()}
  </div>
  ;
};

export default JarList;
