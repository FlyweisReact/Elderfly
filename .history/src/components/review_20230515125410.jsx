import React  from "react";
import img from "../Images/c-23.png";
import img2 from "../Images/c-24.png";
import img3 from "../Images/c-25.png";
import img4 from "../Images/c-26.png";
import img5 from "../Images/c-27.png";
import img6 from "../Images/c-28.png";
import img7 from "../Images/c-29.png";
import img8 from "../Images/c-30.png";
import img9 from "../Images/c-31.png";
import img10 from "../Images/c-32.png";
import img11 from "../Images/c-33.png";
import img12 from "../Images/c-34.png";
import img13 from "../Images/c-35.png";
import img14 from "../Images/c-36.png";
import HOC from "./HOC";


const Review = () => {
return (
    <>
   
      <div className="dash-cont">
      
        <div className="dash-right">

          <div className="review-top-cont">
            <div className="review-top-l">
              <div className="review-top-l-cont">
                <img src={img} alt="" />
                <h6>Karan Jain</h6>
                <p>Manager</p>
              </div>
              <div className="review-top-l-cont">
                <img src={img2} alt="" />
                <h6>Karan Jain</h6>
                <p>Manager</p>
              </div>
              <div className="review-top-l-cont">
                <img src={img3} alt="" />
                <h6>Karan Jain</h6>
                <p>Manager</p>
              </div>
            </div>
            <div className="review-top-r">
              <div className="review-top-r-cont">
                <div className="review-top-r-cont-2">
                  <div className="review-top-r-head">
                    <h6>Average Team Sentiment</h6>
                  </div>
                  <div className="review-cont2-it">
                    <img src={img6} alt="" />
                    <h6>Nailing it</h6>
                    <p>50%</p>
                  </div>

                  <div className="review-cont2-it">
                    <img src={img5} alt="" />
                    <h6>Nailing it</h6>
                    <p>50%</p>
                  </div>

                  <div className="review-cont2-it">
                    <img src={img7} alt="" />
                    <h6>Nailing it</h6>
                    <p>50%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-mid-cont">
              <div className="review-mid-l">
                <h6>Staff Review and Feedback</h6>
                <div className="review-mid-l-2">
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img8} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img9} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img10} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                  <div className="review-mid-l-it">
                    <div className="review-mid-l-it-left">
                      <img src={img11} alt="" />
                    </div>
                    <div className="review-mid-l-it-right">
                      <h6>Karan Jain</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fermentum{" "}
                      </p>
                    </div>
                  </div>
                  <img className="line-img" src={img4} alt="" />
                </div>
              </div>
              <div className="review-mid-r">
                <h6>Recent Questions</h6>
                <div className="review-mid-r-cont">
                  <div className="review-mid-r-cont-it">
                    <img src={img12} alt="" />
                    <p>Lorem ipsum is a dummy text</p>
                  </div>
                  <div
                    className="review-mid-r-cont-it"
                    style={{ backgroundColor: "#6A55F3" }}
                  >
                    <img src={img13} alt="" />
                    <p>Lorem ipsum is a dummy text</p>
                  </div>
                  <div
                    className="review-mid-r-cont-it"
                    style={{ backgroundColor: "#1F1F1F" }}
                  >
                    <img src={img14} alt="" />
                    <p>Lorem ipsum is a dummy text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default HOC(Review);
