import React from "react";
import "./TimeLine.css"; // Import your CSS file for styling

const TimeLine = () => {
  return (
    <div className="container-tl">
      <div className="timeline-tl">
        <ul>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 1</h1>
              <div className="image-tl">
                <img src="img/music1.jpg" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">20th may, 2010</h3>
              <h1>Heading 4</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeLine;
