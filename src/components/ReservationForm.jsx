import {useState} from "react"
import {useNavigate} from "react-router-dom"

function ReservationForm() {
    const[form,setform] = useState({name:"",email:"", date:"", time:"",guests:""})
    const navigate = useNavigate()
    const handleChange = (e) =>{
        setform({...form, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate ("/checkout", {state:form})
    }
    
    return(
         <form className="form-container" onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>

      <label>Name</label>
      <input name="name" value={form.name} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />

      <label>Date</label>
      <input type="date" name="date" value={form.date} onChange={handleChange} required />

      <label>Time</label>
      <input type="time" name="time" value={form.time} onChange={handleChange} required />

      <label>Guests</label>
      <input type="number" name="guests" min="1" value={form.guests} onChange={handleChange} required />

      <button type="submit" className="cta">Continue to Checkout</button>
    </form>
  );
    

}
export default ReservationForm;
