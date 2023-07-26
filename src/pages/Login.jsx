
const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Nexus Chat</span>
                <span className="titel">Login</span>
                <form>
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <button>Log In</button>
                </form>
                <p> Want to create an account? Register</p>
            </div>
        </div>
    )
}

export default Login
