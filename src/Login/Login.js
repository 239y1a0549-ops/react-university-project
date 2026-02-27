
import './Login.css'
function Login()
{
return(
<>
<div className="card">  
    <h2>Login</h2>
    <form> 
       
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br /><br />          
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" />
        <br /><br />
        <input type="submit" value="Login" />
    </form> 
</div>
</>
)
}
export default Login; 