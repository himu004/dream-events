import { useEffect, useState } from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {

    const [pricing, setPricing] = useState([]);

    useEffect(() => {
        fetch('/pricingDetails.json')
        .then(res => res.json())
        .then(data => setPricing(data))
    }, [])
 
  return (
    <div className="grid grid-cols-3 gap-5">
      {
        pricing?.map(price => <PriceCard key={price.id} price={price}/>)
      }
    </div>
  );
};

export default Pricing;
