import { useState } from 'react';
import Swal from 'sweetalert2'
import Rating from 'react-rating-stars-component';

const AddCar = () => {
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const [photo, setPhoto] = useState('');

    const handleAddModel = e => {
        e.preventDefault();

        const newModel = { model, brand, type, price, description, color, photo, rating }
        console.log(newModel);

        // send the new model data to the server
        fetch('https://brand-shop-server-sigma-wine.vercel.app/brands', {
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
                    // clear fields
                    setModel('');
                    setBrand('');
                    setType('');
                    setColor('');
                    setPrice('');
                    setDescription('');
                    setRating(0);
                    setPhoto('');
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
                                <input
                                    type="text"
                                    name="model"
                                    placeholder="model name"
                                    className="input input-bordered"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    placeholder="brand name"
                                    className="input input-bordered"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input
                                    type="text"
                                    name="type"
                                    placeholder="model type"
                                    className="input input-bordered"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Color</span>
                                </label>
                                <input
                                    type="text"
                                    name="color"
                                    placeholder="Price in USD"
                                    className="input input-bordered"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Price in USD"
                                className="input input-bordered"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input
                                type="text"
                                name="description"
                                placeholder="short description"
                                className="input input-bordered"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>

                            <Rating
                                count={5}
                                size={24}
                                value={rating}
                                onChange={newRating => setRating(newRating)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="photo url"
                                className="input input-bordered"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                                required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white bg-red-600">Add Model</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCar;