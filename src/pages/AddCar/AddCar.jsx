import Swal from 'sweetalert2'

const AddCar = () => {

    const handleAddModel = e => {
        e.preventDefault();
        const form = e.target;
        const model = form.model.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const color = form.color.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
       
        const newModel = {model, brand, type, price, description, color, photo, rating}
        console.log(newModel);

        // send to DB
        fetch('http://localhost:5000/brand', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newModel)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Model added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            }
        })
    }
    return (
        <div className="hero my-5 bg-slate-950 rounded-xl max-w-5xl mx-auto">
            <div className="hero-content py-5 flex-col">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold">Add a New Model</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddModel} className="card-body">
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Model Name</span>
                                </label>
                                <input type="text" name="model" placeholder="model name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <input type="text" name="brand" placeholder="brand name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="text" name="type" placeholder="model type" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Color</span>
                                </label>
                                <input type="text" name="color" placeholder="Price in USD" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price in USD" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="description" placeholder="short description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-red-600">Add Model</button>
                        </div>
                    </form>
                    {/* <p className="text-center pb-10">Already have an account? <Link to="/login" className="font-bold">Login</Link> </p> */}
                </div>
            </div>
        </div>
    );
};

export default AddCar;