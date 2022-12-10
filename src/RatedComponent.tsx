import { useState } from 'react'
import './RatingComponent.css'
import illustration from './assets/illustration-thank-you.svg'


function RatedComponent({rating}: {rating:number}) {
    return (
        <div className="rating-container submitted">
            <div className={'illustration'}>
                <img src={illustration} />
            </div>

            <div className={'rating-notification-container'}>
                <span className={'center rating-notification'}>You selected {rating} out of 5</span>
            </div>


            <h1 className={'center'}>Thank you</h1>
            <p className={'center'}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
        </div>
    )
}


export default RatedComponent
