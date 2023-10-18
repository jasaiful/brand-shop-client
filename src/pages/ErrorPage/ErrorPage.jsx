import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className=" max-w-7xl text-center p-24 bg-base-200 mx-auto mt-32 space-y-5">
            <h2 className="text-5xl font-semibold text-red-600">Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
            <Link to={'/'}><button className="btn btn-sm mt-10 bg-red-600 text-white btn-ghost">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;