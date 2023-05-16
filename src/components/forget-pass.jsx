import React from 'react';
import {useNavigate} from "react-router-dom";
import img from '../Images/c-41.png';
import img2 from "../Images/c-2.png";

const ForgetPass = ()=>{
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
                            <input className="ip" type="password" placeholder="Enter New Password" />
                            <input className="ip" type="password" placeholder="Confirm New Password" />
                            <button onClick={()=>navigate("/")} style={{marginTop:"20px"}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPass;