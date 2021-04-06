import React from 'react'
import Img from "./moroccan1.jpg"
import { Link } from "@reach/router"
import Login from './components/login'
import LoginAdmin from './components/Loginadmin'

const Home = () => {
    return (
        <div className="flex flex-col  w-full">
       
          <LoginAdmin/>
      
        </div>
    )
}

export default Home
