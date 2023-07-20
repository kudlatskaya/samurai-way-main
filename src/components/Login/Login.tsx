const Login = () => {
    return (
        <div>
            <div>
                <h1>Login</h1>
                <form action="">
                    <div>
                        <input type="text" placeholder={"Login"}/>
                    </div>
                     <div>
                        <input type="text" placeholder={"Password"}/>
                    </div>
                     <div>
                         <label> <input type="checkbox" />remember me</label>
                    </div>
                     <div>
                         <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;