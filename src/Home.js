import React from 'react'
import Img from "./moroccan1.jpg"
import { Link } from "@reach/router"

const Home = () => {
    return (
        <div className="flex flex-col  w-full">
            <div className=" relative" style={{ height: "82vh" }}>

                <img className="w-full h-full  " src={Img} />

                <div className=" absolute top-0 right-0 left-0  bottom-0 bg-purple-800 opacity-60 z-20 text-white ">
                    <span className="z-30 text-white text-3xl relative top-10 left-6  py-10 capitalize"> helpify</span>

                    <div className="flex items-center  space-x-3 absolute right-6 p-2 ">
                        <Link to="/register" >
                            <button className="bg-green-500 p-3  rounded-3xl"> s'enregistrer</button>
                        </Link>
                        <Link to="/login">
                            <button > s'authentifier</button>
                        </Link>
                    </div>





                </div>



            </div>

        </div>
    )
}

export default Home
