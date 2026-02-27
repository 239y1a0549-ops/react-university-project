
import './Contact.css'
function Contact()
{
return(
<>
<div className="card">  
    <h2>Contact</h2>
    <form> 
        <label htmlFor="fname">Student Name </label> 
        <input type="text" id="fname" name="fname" /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br /><br />          
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
        <br /><br />
        <input type="submit" value="Send Message" />
    </form> 
</div>
</>
)
}
export default Contact; 
