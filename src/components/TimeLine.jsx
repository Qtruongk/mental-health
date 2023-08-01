import React from "react";
import "./TimeLine.css"; // Import your CSS file for styling

const TimeLine = () => {
  return (
    <div className="container-tl">
      <div className="timeline-tl">
        <ul>
          <li>
            <div className="timeline-content">
              <h3 className="date">1991</h3>
              <h1>WHAT ABOUT BOB?</h1>
              <div className="image-tl">
                <img src="img/v2.png" alt="" />
              </div>
              <p>
                Frank Oz's What About Bob? tells the story of Bob (Bill Murray) who has a massive list of phobias that interfere with his everyday life. His therapist Dr. Leo Marvin (Richard Dreyfuss) is certain that the answer to all of Bob's problems is his own best-selling book, "Baby Steps". Chaos ensues when Bob can't leave Dr. Marvin alone, even following him while the doctor tries to take a family vacation.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">2001</h3>
              <h1>A BEAUTIFUL MIND</h1>
              <div className="image-tl">
                <img src="img/v3.png" alt="" />
              </div>
              <p>
                A Beautiful Mind is an inspiring biographical look at the life of John Nash (Russell Crowe). Nash was a mathematician who lived with schizophrenia. The movie acknowledges the many contributions Nash made to the field of mathematics while acknowledging the very real struggles he faced when his mental health was at its worst.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">2011</h3>
              <h1>BOB'S BURGERs</h1>
              <div className="image-tl">
                <img src="img/v1.png" alt="" />
              </div>
              <p>
                If burger puns and fart jokes make you happy, you’ll fit right in with the Belchers. At Bob’s burger joint, there often aren’t enough butts in the seats, much to backside-obsessed eldest daughter Tina’s chagrin. But on this animated family series, there’s always a lot of love to go around.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">2014-2022</h3>
              <h1>BLACK-ISH</h1>
              <div className="image-tl">
                <img src="img/v4.png" alt="" />
              </div>
              <p>
                Black-ish as a comedy never shied away from portraying serious issues. The show handled racism and sexism, and the COVID-19 pandemic was among the many real-world issues the show's characters encountered during the series' run. Tracee Ellis Ross received critical acclaim for her role as Dr. Rainbow Johnson.
                dges the many contributions Nash made to the field of mathematics while acknowledging the very real struggles he faced when his mental health was at its worst.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">I DON'T KNOW</h3>
              <h1>SEX EDUCATION</h1>
              <div className="image-tl">
                <img src="img/v5.png" alt="" />
              </div>
              <p>
                Sex Education features head boy Jackson Marchetti (Kedar Williams-Stirling), and his experiences at Moordale Secondary School. He's a championship swimmer and is on a quest to get Maeve (Emma Mackey) to date him. Even with all of his successes, he still lives with anxiety and panic attacks.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">I DON'T KNOW</h3>
              <h1>MOON KNIGHT</h1>
              <div className="image-tl">
                <img src="img/v6.png" alt="" />
              </div>
              <p> 
Marvel's Moon Knight showcases a little-known Marvel hero, Marc Spector. Spector lives with Dissociative Identity Disorder (DID). This manifests as Marc having at least three alter-egos, that have different powers and abilities. He is the avatar of the Egyptian god Khonshu. Oscar Isaac plays each of Spector's alters.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
