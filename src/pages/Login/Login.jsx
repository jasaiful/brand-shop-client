import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { googleLogin, signInUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    console.log('locate to', location);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")

                const googleUser = { email: result.user?.email, name: result.user?.displayName, userCreated: result.user?.metadata?.creationTime, lastLoggedAt: result.user?.metadata?.lastSignInTime };

                fetch('https://brand-shop-server-sigma-wine.vercel.app/googleUser', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(googleUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success',
                                text: 'Welcome, Login success!',
                                icon: 'success',
                                confirmButtonText: 'Done'
                            })

                        }
                        navigate('/'); 
                    })

            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleLoginUser = e => {
        e.preventDefault();

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                setError("")
                navigate(location?.state ? location.state : "/")

                // database
                const user = { email, lastLoggedAt: result.user?.metadata?.lastSignInTime }

                fetch('https://brand-shop-server-sigma-wine.vercel.app/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged === true) {
                            Swal.fire({
                                title: 'Success',
                                text: 'Welcome, Login success!',
                                icon: 'success',
                                confirmButtonText: 'Done'
                            })
                            // clear input fields
                            setEmail('');
                            setPassword('');
                        }
                        else {
                            setError("Email or password doesn't match.")
                        }
                    })
                    .catch(error => {
                        console.error(error)
                        setError("An error occurred. Please try again");
                    });

            })
            .catch(error => {
                console.error(error)
                setError("Email or password doesn't match.")
            });
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
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />

                            </div>
                            <p className="text-red-600">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-red-600">Login</button>
                            </div>
                        </form>
                        <p className="text-center pb-5">Do not have an account? <Link to="/register" className="font-bold">Register</Link> </p>
                        <div className="mx-auto pb-2">
                            <button onClick={handleGoogleLogin} className="btn btn-outline"> <FaGoogle className="text-red-600"></FaGoogle> Login with <span className="text-xl font-bold text-red-600">Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;