

import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bg from '../../assets/banner-bg11.jpg';


const Details = () => {
    const [event, setEvent] = useState();
  const { img, price } = event || {};
  const { id } = useParams();

  const details = useLoaderData();
  console.log(details);

  useEffect(() => {
    const findDetails = details?.find(details => details.id === id);
    // console.log(findDetails);
    setEvent(findDetails);
  }, [id, details]);

    
    return (
        <div>
           <img src={bg} alt="" />
           <p>{price}</p>
        </div>
    );
};

export default Details;