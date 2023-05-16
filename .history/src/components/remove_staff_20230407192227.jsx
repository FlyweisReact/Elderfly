import React from 'react';
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import img from "../Images/c-16.png";
import img2 from "../Images/c-17.png";
import img3 from "../Images/c-18.png";
import img4 from "../Images/c-19.png";
import img5 from "../Images/c-20.png";
import img6 from "../Images/c-21.png";

const RemoveStaff = ()=>{
    return (
        <>
            <div className="dash-cont">
                <div className="dash-left">
                    <Sidebar />
                </div>
                <div className="dash-right">
                    <Navbar />
                    <div className="remove-staff-top">
                        <h4>Remove Staff</h4>
                    </div>
                    <div className="staff-mid-cont">
                        <div className="remove-staff-box">
                            <img src={img} alt="" />
                            <h4>Rahul Sharma</h4>
                            <p>Lorem Ipsum is a dummy text which is used to check and
                                deploy various elements in the static and dynamic website 
                                webud.</p>
                            <button>Remove</button>
                        </div>
                        <div className="remove-staff-box">
                            <img src={img2} alt="" />
                            <h4>Rahul Sharma</h4>
                            <p>Lorem Ipsum is a dummy text which is used to check and
                                deploy various elements in the static and dynamic website 
                                webud.</p>
                            <button>Remove</button>
                        </div>
                        <div className="remove-staff-box">
                            <img src={img3} alt="" />
                            <h4>Rahul Sharma</h4>
                            <p>Lorem Ipsum is a dummy text which is used to check and
                                deploy various elements in the static and dynamic website 
                                webud.</p>
                            <button>Remove</button>
                        </div>
                        <div className="remove-staff-box">
                            <img src={img4} alt="" />
                            <h4>Rahul Sharma</h4>
                            <p>Lorem Ipsum is a dummy text which is used to check and
                                deploy various elements in the static and dynamic website 
                                webud.</p>
                            <button>Remove</button>
                        </div>
                        <div className="remove-staff-box">
                            <img src={img5} alt="" />
                            <h4>Rahul Sharma</h4>
                            <p>Lorem Ipsum is a dummy text which is used to check and
                                deploy various elements in the static and dynamic website 
                                webud.</p>
                            <button>Remove</button>
                        </div>
                        <div className="remove-staff-box">
                            <img src={img6} alt="" />
                            <h4>Rahul Sharma</h4>
                            <p>Lorem Ipsum is a dummy text which is used to check and
                                deploy various elements in the static and dynamic website 
                                webud.</p>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RemoveStaff;