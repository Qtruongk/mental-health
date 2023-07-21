import React from "react";
import { Outlet, Link } from "react-router-dom";
import backgroundhome from "../assets/backgroundhome.png";
import image5 from "../assets/image 5.png";
import image6 from"../assets/image 6.png";
import image7 from "../assets/image 7.png";
import "./Home.css";
const Home = () => {
    return (
        <>
        <div className="home">
            <img src={backgroundhome} className="img__backgroundhome" alt="Icon"></img>
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
            <div className="quiz__container">
                <div class="mental-health-quiz-container">
                        <Link to="/services" className="mental-health-quiz">
                            <p className="mental-health-quiz">Mental Health Quiz</p>
                        </Link>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
  };
  export default Home;