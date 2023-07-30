import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import thư viện Link
import "./Blog.css";
const Blogs =() =>{

    return(
        <div className="blogs">
            <div className="common">
                common
            </div>
            <div className="title1">
                <p className="date1">May 20,2023</p>
                <p className="main title">How to stop feeling</p>
                <p className="para1"> Here are 10 tips to help you overcome loneliness</p>
                <Link to="/blog1">Read more</Link> {/* Navigate to Blog1 */}
            </div>
            <div className="title2">
                <p className="date2">December 20, 2022</p>
                <p className="main title">What to do if you feel disconnected from your family?</p>
                <p className="para2"> Identify why you feel disconected and techniques to hep rebuld your relationship</p>
                <a href="Blog2.js">Read more</a>
            </div>
            <div className="title3">
                <p className="date3">February 14, 2022</p>
                <p className="main title">How does Black-and-White thinking affect your mood and behavior?</p>
                <p className="para3"> Learn how to overcome black-and-white thinking</p>
                <a href="Blog3.js">Read more</a>
            </div>
            <div className="title 4">
                <p className="date4">January 24, 2022</p>
                <p className="main title">Living with Regrets and how to deal with them</p>
                <p className="para4"> If you live with regret consider these 5 tips to cape</p>
                <a href="Blog4.js">Read more</a>
            </div>
            <div className="title 5">
                <p className="date5">April 18, 2022 </p>
                <p className="main title">Do positve affirmations work?</p>
                <p className="para5"> Here we discuss the pyschology behind affirmations</p>
                <a href="Blog5.js">Read more</a>
            </div>
            <div className="title 6">
                <p className="date6">August 26, 2023</p>
                <p className="main title">Understanding Maladaptive Daydreaming</p>
                <p className="para6"> Maladaptive daydreaming involves long periods of structured fantasy that may interfere with your daily life, typically in response to trauma. But help…</p>
                <a href="Blog6.js">Read more</a>
            </div>
            <div className="title 7">
                <p className="date7">August 30, 2023</p>
                <p className="main title">Relationships Where Women Earn More (and it Bothers 1 of You)</p>
                <p className="para7"> Here are 4 ways to navigate power dynamics in your relationship.</p>
                <a href="Blog7.js">Read more</a>
            </div>
            <div className="title 8">
                <p className="date8">September 5, 2023</p>
                <p className="main title">The Link Between PCOS and Depression</p>
                <p className="para8"> Discover the connection between PCOS and depression.</p>
                <a href="Blog8.js">Read more</a>
            </div>
            <div className="title 9">
                <p className="date9">September 10, 2023</p>
                <p className="main title">8 Schizophrenia Tattoos</p>
                <p className="para9"> Consider these 8 tattoos ideas to honor your mental health journey.</p>
                <a href="Blog9.js">Read more</a>
            </div>
            <div className="title 10">
                <p className="date10">September 15, 2023</p>
                <p className="main title">Summer Sadness: How to Cope with SAD</p>
                <p className="para10"> Discover signs and treatment options that can help you cope with summer onset SAD.</p>
                <a href="Blog10.js">Read more</a>
            </div>
        </div>
    );
};
export default Blogs;