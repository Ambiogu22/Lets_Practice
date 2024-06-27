import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const Home = () => {

        const schema = yup.object().shape({
            fullName: yup.string().required("Please enter your Full Name"),
            age: yup.number().positive().integer().min(18).required(),
            email: yup.string().email().required("Please enter a valid email address"),
            password: yup.string().min(5).max(10).required("Please enter a valid password"),
            confirmPassword: yup.string().oneOf([yup.ref("passowrd"), null], "Password doesn't match").required()
        });

        const {register, handleSubmit, formState: {errors} } = useForm({
            resolver: yupResolver(schema)
        })

        const onSubmit = (data) => {
            console.log(data)
        }

    return(
        <div className="">
            <form className="flex flex-col gap-2 p-6 border-2" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Full Name..." {...register("fullName")}/>
                <p>{errors.fullName?.message}</p>
                <input type="number" placeholder="Age..." {...register("age")}/>
                <p>{errors.age?.message}</p>
                <input type="text" placeholder="Email address..." {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input type="password" placeholder="Password" {...register("password")}/>
                <p>{errors.password?.message}</p>
                <input type="password" placeholder="Confirm your password" {...register("confirmPassword")}/>
                <p>{errors.confirmPassword?.message}</p>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Home;