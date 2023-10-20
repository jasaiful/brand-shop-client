import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signInUser} = useContext(AuthContext);

    const handleLoginUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user);

            // database
            const user = {email, lastLoggedAt: result.user?.metadata?.lastSignInTime}
            
            fetch('http://localhost:5000/user', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            } )
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


        })
        .catch(error => {
            console.error(error)
        })
    }



    return (
        <div>
            <div className="hero my-5 bg-slate-950 rounded-xl max-w-5xl mx-auto">
                <div className="hero-content py-10 flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl text-white font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginUser} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-red-600">Login</button>
                            </div>
                        </form>
                        <p className="text-center pb-10">Do not have an account? <Link to="/register" className="font-bold">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;