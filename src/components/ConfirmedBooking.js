import React from "react"
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div>
      <h2>Booking has been confirmed</h2>
      <Link to="/home"><button>Go back</button></Link>
    </div>
  )
};

export default ConfirmedBooking;
