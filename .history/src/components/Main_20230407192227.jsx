import React from 'react';
import {useNavigate} from "react-router-dom";
import img from '../Images/c-1.png';
import img2 from "../Images/c-2.png";

const Main = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <div className="main-cont">
                <div className="main-cont-left">
                    <img src={img2} alt="" />
                </div>
                <div className="main-cont-right">
                    <div className="main-cont-right-1">
                        <img src={img} alt="" />
                        <form className="form-main">
                            <input className="ip" type="text" placeholder="Admin Id" />
                            <input className="ip" type="password" placeholder="Password" />
                            <p onClick={()=>navigate("/for-pass")}>forget password?</p>
                            <button onClick={()=>navigate("/dashboard")}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;