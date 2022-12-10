import RatingComponent from "./RatingComponent";
import { useState } from 'react'
import RatedComponent from "./RatedComponent";

function App()
{
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [selectedRating, setSelectedRating] = useState<number>(0);

    const handleSubmit = (sub:boolean,value: number) => {
        setIsSubmit(sub);
        setSelectedRating(value)
    };

    if(!isSubmit) {
        return (<RatingComponent handleSubmit={handleSubmit} />);
    }

    return (<RatedComponent rating={selectedRating}/>);

}

export default App
