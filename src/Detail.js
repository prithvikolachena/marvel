
import React from 'react'
import './detail.css';
function Detail() {
    return (
        <div>
            <div className="detail-section">
                <form>
                    <label htmlFor="fname">First Name</label><br></br>
                    <input type="text" id ="fname" name="fname"/><br></br>
                
                    <label htmlFor="Company name">Company name</label><br></br>
                    <input type="text" id="company name" name="company name" /><br></br>
                    <label htmlFor="email">Email Address</label><br></br>
                    <input type="text" id ="email" name="email"/><br></br>
                    <label htmlFor="phno">Mobile Number</label><br></br>
                    <input type="text" id ="phno" name="phno"/><br></br>
                    <label htmlFor="OTP">Enter OTP</label><br></br>
                    <input type="text" id ="OTP" name="OTP"/><br></br>
                    <h6>Didn't receive SMS? <a href ="" >Resend OTP</a></h6>
                    <button>Continue</button><br></br>
                    <input type="checkbox" id="Terms and Conditions" name="checkbox" value="T&C"/>
                    <label htmlFor="T&C">I agree to <a href="T&C">Terms and Conditions</a></label>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Detail
