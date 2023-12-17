import { useEffect, useState } from "react";
import CardEvent from "./CardEvent";


const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect( () => {
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    }
      , [])

    return (
        <div>
            <h1 className="text-center text-4xl text-blue-500 py-10 font-semibold underline ">Events That We Organize</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {
                events?.map(event => <CardEvent key={event.id} event={event}/>)
            }
            </div>
        </div>
    );
};

export default Events;