import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Social from '../../componets/Social/Social'
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {LoginUser} = useContext(AuthContex);
    const onSubmit = data => {
        LoginUser(data.email,data.password)
        .then(result=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Succesfully',
                showConfirmButton: false,
                timer: 1500
              })
              
        })
        .catch(error=>{
            console.log(error);
        })
    };
    return (
       
        <div className="bg-base-200 mx-auto sm:w-1/3 p-5 my-4 rounded-3xl">
            <p className="text-3xl text-center ">Please Login Your Account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("password", { required: true })} type="text" placeholder="PassWord" className="input input-bordered" />
                    </div>
                    <div className="flex">
                        <p><small> <Link to='/forget-password'>Forget Password?</Link> </small></p>
                        <p className="flex justify-end"><small><Link to='/singup'>Are you new?</Link></small></p>
                    </div>
                    <button className="btn btn-secondary">Login</button>
                </div>
                
            </form>
            <Social></Social>
        </div>
    );
};

export default Login;