import React from "react";
import { Outlet, Link } from "react-router-dom";
import backgroundhome from "../assets/backgroundhome.png";
import image5 from "../assets/image 5.png";
import image6 from"../assets/image 6.png";
import image7 from "../assets/image 7.png";
import anhavt1 from "../assets/IMG_9751 1.png";
import anhavt2 from "../assets/image 11 (1).png";
import anhavt3 from "../assets/image 12.png";
import image8 from "../assets/image 8.png";
import "./Home.css";
const Home = () => {
    return (
        <>
        <div className="home">
            <img src={backgroundhome} className="img__backgroundhome" alt="Icon"></img>
            <div className="quiz__container">
                <div class="mental-health-quiz-container">
                        <Link to="/services" className="mental-health-quiz">
                            <p className="mental-health-quiz">TAKE A SERVICE NOW !</p>
                        </Link>
                        <img src={image8} class="image-8-icon" alt=""></img>
                </div>
            </div>
            <div class="what-is-mental-container">
                <img src={image5} className="image__icon" alt="Icon"></img>
                <p class="what-is-mental-health">
                    <b>What is mental health?</b>
                </p>
                <p class="blank-line">&nbsp;</p>
                <p class="blank-line">Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices.1 Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
            </div>
            <div class="why-is-mental-container">
                <img src={image6} className="image__icon" alt="Icon"></img>
                <p class="why-is-mental-health-important">
                    <b class="why-is-mental">Why is mental health important for overall health?</b>
                </p>
                <p class="why-is-mental-health-important">
                    <span>&nbsp;</span>
                </p>
                <p class="mental-and-physical-health-are">
                    <span>Mental and physical health are equally important components of overall health. For example, depression increases the risk for many types of physical health problems, particularly long-lasting conditions like
                    </span>
                    <a class="diabetes" href="https://www.cdc.gov/diabetes/managing/mental-health.html" target="_blank" rel="noreferrer">
                        <span>
                            <span class="diabetes1">diabetes</span>
                        </span>
                    </a>
                    <span>,
                    </span>
                    <a class="diabetes" href="https://www.cdc.gov/heartdisease/mentalhealth.htm" target="_blank" rel="noreferrer">
                        <span>
                            <span class="diabetes1">heart disease</span>
                        </span>
                    </a>
                    <span>, and stroke. Similarly, the presence of chronic conditions can increase the risk for mental illness.2
                    </span>
                </p>
            </div>
            <div class="what-causes-mental-container">
                <img src={image7} className="image__icon" alt="Icon"></img>
                <p class="what-causes-mental-illness">
                    <b class="what-causes-mental">What causes mental illness?</b>
                </p>
                <p class="what-causes-mental-illness">
                    <span>&nbsp;
                    </span>
                </p>
                <p class="what-causes-mental-illness">
                    <span>There is no single cause for mental illness. A number of factors can contribute to risk for mental illness, such as
                    </span>
                </p>
                <ul class="adverse-childhood-experiences">
                    <li class="experiences-related-to-other-o">
                        <a class="adverse-childhood-experiences2" href="https://www.cdc.gov/violenceprevention/aces/index.html" target="_blank" rel="noreferrer">
                            <span>
                                <span class="adverse-childhood-experiences3">Adverse Childhood Experiences</span>
                            </span>
                        </a>
                        <span>, such as trauma or a history of abuse (for example, child abuse, sexual assault, witnessing violence, etc.)
                        </span>
                    </li>
                    <li class="experiences-related-to-other-o">
                        <span>Experiences related to other ongoing (chronic) medical conditions, such as cancer or diabetes
                        </span>
                    </li>
                    <li class="experiences-related-to-other-o">
                        <span>Biological factors or chemical imbalances in the brain
                        </span>
                    </li>
                    <li class="experiences-related-to-other-o">
                        <span>Use of alcohol or drugs
                        </span>
                    </li>
                    <li>
                        <span>Having feelings of loneliness or isolation
                        </span>
                    </li>
                </ul>
            </div>
            
            <div className="review">
                <div className="anh-pht-phng-container">
                    <img class="img-9751-1-icon" alt="" src={anhavt1}/>
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p class="anh-pht">Anh Phát </p>
                    <p class="anh-pht">(Phường 9, Xã Hoà Tân,TP. Cà Mau)</p>
                    <div class="mnh-tn">Mình ở tận Cà Mau và bị stress trong thời gian dài. Nhờ đến Blog của các bạn mình đã thoát khỏi tiêu cực và sống hạnh phúc❤️❤️</div>
                </div>
                <div className="anh-l-lm-container">
                    <img class="image-11-icon" alt="" src={anhavt2}/>
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p class="anh-l-lm">Anh Lê Lâm</p>
                    <p class="anh-l-lm"> (Đường CMT8, Q.10, TPHCM)</p>
                    <div class="nhn-vin-t">Nhờ bạn bè mà mình biết đến XPT và ngày đêm đọc blog của các bạn, mình cũng dần hoà nhập lại với nhịp sống bình thường.</div>
                </div>
                <div className="anh-khoa-tho-container">
                    <img class="image-12-icon" alt="" src={anhavt3} />
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p class="anh-khoa">Anh Khoa </p>
                    <p class="anh-khoa">(Thảo Điền, Q.2, TPHCM) </p>
                    <div class="nh-bn-b">Bạn phát rất đẹp trai và phong độ, đã tư vấn nhiệt tình mọi nơi, giúp mình thoải mái hơn ạ</div>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
  };
  export default Home;