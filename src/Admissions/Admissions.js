
import './Admissions.css'
import React from 'react';

function Admissions(){
    return(
        <>
        <div className="card">
            <h2>Book Your Admissions</h2>
            <p>Fill all the details</p>
            <form className="form">
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" /><br /><br />
               
                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" /><br /><br />
               
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" /><br /><br />
               
                <label htmlFor="Reason">Reason:</label><br />
                <textarea id="message" name="Reason" rows="4" cols="50"></textarea><br /><br />
               
                <label htmlFor="doctor">Select Department:</label>
                <select id="doctor">
                    <option>AI&ML</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>ME</option>
                    <option>Civil</option>
                </select><br /><br />
               
                <label htmlFor="date">Admissions Date:</label>
                <input type="date" id="date" /><br /><br />
               
                <input type="submit" value="Admission Successful" />
            </form>
        </div>
        </>
    );
}
export default Admissions;