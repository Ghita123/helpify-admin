import React, { useState } from 'react'
import { FaHandsHelping } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { BsLock } from "react-icons/bs"
import { ImSpinner } from "react-icons/im"
import { GiCheckMark, GiSwordSpin } from "react-icons/gi"

import axios from "axios"

import RegisterImg from "../register.jpg"
import RegisterImgPsd from "../registerPsd.png"



const handleRegister = (email, password, agree, setMessage) => {

    console.log({ email, password, agree })

    setMessage(<GiSwordSpin size="30px" className="animate-spin text-purple-600" />)
    if (agree && email && password)

        axios.post("http://localhost:8081/register", {
            email: email,
            password: password
        }).then(res => {
            console.log(res.data)
            if (res.data == "sucess")
                setTimeout(() => { setMessage(<div className="text-green-500  flex items-center  gap-2"> <GiCheckMark />successfully register ! Welcome   </div>) }, 2000)

            else setMessage("Error! try again")
        })
            .catch(e => console.error(e))



}


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [match, setMatch] = useState(null)
    const [agree, setAgree] = useState(false)
    const [message, setMessage] = useState(null)



    return (
        <div className=" flex flex-wrap h-screen " style={{ fontFamily: "Montserrat" }} >
            <div className="md:w-1/2 w-full border flex flex-col items-center space-y-4  py-12 gap-3  ">
                <div className="flex flex-wrap  items-center ">
                    <p className="text-4xl " style={{ color: "#6F4BFF" }}>
                        Helpify
                 </p>
                    <FaHandsHelping className="text-blue-400" style={{ color: "#31E7EE" }} size="50px" />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-80">
                        <FiUser className="text-gray-200 mr-3" />
                        <input onChange={(evt) => setEmail(evt.target.value)} type="text" className="focus:outline-none placeholder-gray-300 " placeholder="email" />
                    </div>

                    <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-80">
                        <BsLock className="text-gray-200 mr-3" />
                        <input onChange={(evt) => setpassword(evt.target.value)} type="password" className="focus:outline-none placeholder-gray-300 " placeholder="password" />
                    </div>

                    <div className={` border ${match === false ? "border-red-500" : "border-gray-400 "} flex  items-center   p-3 rounded-3xl md:w-80`}>
                        <BsLock className="text-gray-200 mr-3" />
                        <input onChange={(evt) => { setMatch(evt.target.value === password ? true : false) }} type="password" className={`focus:outline-none placeholder-gray-300 `} placeholder="repeat password" />
                    </div>
                </div>

                <div className="flex items-center text-gray-300 text-sm gap-2">
                    <input value={agree} onChange={(evt) => { setAgree(!agree); console.log({ agree }) }} type="checkbox" />
                    <div> I agree to the <span className="cursor-pointer" style={{ color: "#6F4BFF" }}> Terms of conditions</span></div>
                </div>
                <button onClick={() => handleRegister(email, password, agree, setMessage)} className="p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-3xl">
                    Register
                  </button>

                <div className="text-sm text-gray-400">
                    already a user ? <span className="cursor-pointer" style={{ color: "#6F4BFF" }}> Login Here</span>
                </div>
                <div>
                    {message}
                </div>
            </div>

            <div className="md:w-1/2   bg-blue-200 overflow-hidden " style={{}} >
                <img src={RegisterImgPsd} className="h-full w-full object-cover" />
                <p className="transform text-gray-300 text-3xl  text-center translate-x-6 -translate-y-96">" When we give cheerfully and accept gratefully, everyone is blessed "</p>

            </div>
            {/* <div className="md:w-1/2 w-full object-fit border    bg-blue-500    " style={{}} >
                <p className="p-20  bg-register   ">hamid</p>
                <img src={RegisterImg} className="  bg-cover " />

            </div> */}

        </div >
    )
}

export default Register
