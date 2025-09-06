import { useLocation, Link } from "react-router-dom";

function CheckoutPage() {
  const { state } = useLocation();

  if (!state) {
    return <p>No reservation found. Please <Link to="/reservation">make a booking</Link>.</p>;
  }

  return (
    <main className="checkout">
      <h2>Reservation Confirmed ✅</h2>
      <p>Thank you {state.name}, your table for {state.guests} guests is reserved.</p>
      <p>Date: {state.date} at {state.time}</p>
      <p>We’ve sent a confirmation to {state.email}</p>
      <Link to="/" className="cta">Back to Home</Link>
    </main>
  );
}

export default CheckoutPage;
