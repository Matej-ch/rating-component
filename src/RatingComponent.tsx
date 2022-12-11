import {useState} from 'react'
import './RatingComponent.css'
import iconStar from './assets/icon-star.svg'

interface RatingComponentProps {
    handleSubmit: Function;
}

function RatingComponent({handleSubmit}: RatingComponentProps) {
    const [rating, setRating] = useState<number>(0)

    const availableRatings: number[] = [1, 2, 3, 4, 5]

    return (
        <div className="rating-container">
            <div className={'star-icon'}><img src={iconStar}/></div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve
                our offering!</p>

            <div className="rating-numbers-container">
                {availableRatings.map((number) => (
                    <div className={rating === number ? 'checked' : ''} onClick={() => setRating(number)} key={number}>
                        {number}
                    </div>
                ))}
            </div>

            <div>
                <button onClick={() => handleSubmit(true, rating)} className={'rating-button'}>Submit</button>
            </div>
        </div>
    )
}


export default RatingComponent
