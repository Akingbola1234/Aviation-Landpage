import React, {useRef, useEffect} from 'react'
import AirDeliveryImage from "../../Assets/images/Air Delivery.png"
import TicketImage from "../../Assets/images/ticket-background.png"
import "./BookFlight.css"
import  {gsap, Power3} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const BookFlight = () => {
  let bookFlight = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(bookFlight,{
            opacity: 0,
            scale: 0.5,
            y: -20
        },{
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 5,
            ease: Power3.easeIn,
            scrollTrigger: {
                markers: false,
                trigger: bookFlight,
                 start: "-190%",
                 end: "-100%",
                scrub: true
            }
        })
    }, [])
  return (
    <div className='book-flight-container' ref={el => {bookFlight = el}}>
        <div className='book-flight-details'>
            <div className='book-flight-text-image'>
                <h4>Book Popular Flight <br/> Tickets</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been the industry's</p>
                <img src={AirDeliveryImage} alt="Air Craft Delivery" className='air-delivery-image' />
            </div>
            <div className='book-flight-ticket'>
                <img src={TicketImage} alt="Book Flight Ticket" />
            </div>
        </div>
    </div>
  )
}

export default BookFlight