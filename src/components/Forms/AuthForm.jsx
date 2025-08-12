import '../../styles/authForm.css'

function AuthForm() {
    return (
        <div className="login">
            <h2>Sign In</h2>
            <div className="inputBox">
                <input type="text" placeholder="Username" />
            </div>
            <div className="inputBox">
                <input type="password" placeholder="Password" />
            </div>
            <div className="inputBox">
                <input type="submit" value="Login" id="btn" />
            </div>
            <div className="group">
                <a href="#">Forget Password</a>
                <a href="#">Signup</a>
            </div>
        </div>
    )
}

export default AuthForm