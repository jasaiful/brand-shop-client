import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateUser = e => {
        e.preventDefault();
        // const form = e.target;
        // const name = form.name.value;
        // const email = form.email.value;
        // const password = form.password.value;
        console.log(name, email, password);

        if (!/^(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/.test(password)) {
            setError("Minium 6 characters, at least one uppercase & at least one special character");
           
        }
        else {
            setError('');
            if (email, password) {
                createUser(email, password)
                    .then(result => {
                        console.log(result.user);

                        const name = result.user?.displayName;
                        const createdAt = result.user?.metadata?.creationTime;
                        const user = { email, userCreated: createdAt, Name: name };

                        fetch('https://brand-shop-server-sigma-wine.vercel.app/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success',
                                        text: 'You successfully registered',
                                        icon: 'success',
                                        confirmButtonText: 'Done'
                                    })
                                    // clear input fields
                                    setName('');
                                    setEmail('');
                                    setPassword('');
                                }
                            })
                        setError('');
                    })

                    .catch(error => {
                        setError(error.message)
                    })
            }
        }
    };

    return (
        <div className="hero my-5 bg-slate-950 rounded-xl max-w-5xl mx-auto">
            <div className="hero-content py-10 flex-col">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold">Registration Form!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="your name"
                                className="input input-bordered"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className="text-red-600">{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-red-600">Register</button>
                        </div>
                    </form>
                    <p className="text-center pb-10">Already have an account? <Link to="/login" className="font-bold">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;