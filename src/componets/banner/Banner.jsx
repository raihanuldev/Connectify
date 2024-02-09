import { useForm } from "react-hook-form";

const Banner = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // You can do further processing with the data here
        // For example, send it to a backend API
        // Reset the form, etc.
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://image.similarpng.com/very-thumbnail/2021/05/Instagram-3d-social-media-icons-with-smartphone-on-transparent-background-PNG.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Stay Connect with Connectify!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Create New Post</button>
                </div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Upload an Image with Caption!</h3>
                    <div className="modal-action">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea {...register("text", { required: true })} placeholder='What is your Mind' name="text" id="text" cols="60" rows="10"></textarea>
                            <input {...register("file", { required: true })} className='file-input-secondary' type="file" name="file" id="file" />
                            {/* if there is a button in form, it will close the modal */}
                            <button type="submit" className="btn bg-primary">submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Banner;
