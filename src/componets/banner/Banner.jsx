import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Banner = () => {
    const { user } = useContext(AuthContex)
    const { register, handleSubmit } = useForm();
    const date = new Date().toISOString();

    const onSubmit = async (formData) => {
        try {
            // Check if formData and formData.file exist before accessing
            if (formData && formData.file) {
                const formDataToSend = new FormData();
                formDataToSend.append("image", formData.file[0]);
                const response = await axios.post("https://api.imgbb.com/1/upload?key=69b4009dc0c51e2fbc2c1455e4b97293", formDataToSend);
                console.log("Image uploaded successfully:", response.data);

                const newPost = {
                    email: user.email,
                    caption: formData.text,
                    image: response.data.data.url,
                    date: date,
                    like: 1
                };

                // Send newPost data to  server
                await axios.post("https://connectify-server-three.vercel.app/", newPost);

                // Show success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Post Uploaded!',
                    text: 'Your post has been successfully uploaded.',
                    timer: 2000, // Automatically close alert after 2 seconds
                    showConfirmButton: false
                });
                // Close modal after successful upload
                document.getElementById('my_modal_5').close();

            } else {
                console.error("No file selected.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            // Show error alert
            Swal.fire({
                icon: 'error',
                title: 'Upload Failed',
                text: 'An error occurred while uploading your post. Please try again later.',
            });
        }
    };
    const openModal = () => {
        if (user) {
            document.getElementById('my_modal_5').showModal();
        } else {
            // Prompt user to sign in or register
            Swal.fire({
                icon: 'warning',
                title: 'Sign In Required',
                text: 'You need to sign in or register to create a new post.',
            });
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://image.similarpng.com/very-thumbnail/2021/05/Instagram-3d-social-media-icons-with-smartphone-on-transparent-background-PNG.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Stay Connect with Connectify!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary" onClick={openModal}>Create New Post</button>
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
