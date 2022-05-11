import React from 'react'

function form() {
    return (
        <div>
            <div className="form">
                <h2>Let's Setup Your Account</h2>
                <p>Already have an Account? <a href="/">Sign in</a> </p>
                <form action="/">
                    <input type="text" name="name" id="name" className='input' placeholder='Your Name' required /> <br />
                    <input type="email" name="email" id="email" className='input' placeholder='Email Address' required /> <br />
                    <select name="user" className='input' id="user" required>
                        <option value="user">I Would Describe My User Type As</option>
                        <option value="Developer">Developer</option>
                        <option value="Tester">Tester</option>
                        <option value="Support">Support</option>
                    </select> <br />
                    <input type="password" name="pass" id="pass" className='input' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" minLength="8" required placeholder='Password' /> <br />
                    <span>Minimum 8 Character</span>
                    <br />
                    <button type="submit" className='input button'>Next</button>
                    <p className='btn-p'>By Clicking the "Next" Button, you agree to creating a free account, and to <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></p>
                </form>
            </div>
        </div>
    )
}

export default form