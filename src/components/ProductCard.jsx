import React from "react";
import "./ProductCard.css"; // Import your CSS file for styling

const ProductCard = () => {
  const LinkToMusic = [
    "https://open.spotify.com/playlist/53eixYVfvpnzKdFsBw2rJL?si=e21b02c9c49545d0",
    "https://open.spotify.com/album/6ird8EIdzbPlJRKpMkK9oh",
    "https://open.spotify.com/album/7mAKMhCn9BLWp24PgmOuv4?si=gSPBNzOaR3-STmoWrm737Q",
    "https://open.spotify.com/playlist/0VphEW6S0RDIVTz7pl16Ro?si=02592b25a7614470",
    "https://open.spotify.com/playlist/37i9dQZF1DXdk2DZvqpqJY?si=17c944fccfb446e9",
    "https://open.spotify.com/playlist/37i9dQZF1DXc8kgYqQLMfH?si=ec7fd5b2ff0c4294",
    "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS?si=252a99b1263a4655",
    "https://open.spotify.com/playlist/37i9dQZF1DX0jgyAiPl8Af?si=8936e95689454485"
  ];

  const openLink = (index) => {
    window.open(LinkToMusic[index], "_blank");
  };

  return (
    <div className="container-pc">
      <div className="header-pc">
        <h1>Music</h1>
      </div>

      <div className="products">
        <div className="product">
          <div className="image-pc">
            <img src="assets/m1.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>Healing</h3>
            <span>3 hr 2 mn</span>
          </div>
          <p>Altheavu - 51 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(0)}> Listen </button>
          </div>
        </div>

        <div className="product">
          <div className="image-pc">
            <img src="assets/m2.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>Piano ~~</h3>
            <span>34 mn 24 sc</span>
          </div>
          <p>Altheavu - 9 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(1)}> Listen </button>
          </div>
        </div>

        <div className="product">
          <div className="image-pc">
            <img src="assets/m3.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>Nhạc Thiền - Tĩnh tâm - An Nhiên</h3>
            <span>2 hr 40 mn</span>
          </div>
          <p>VPROD Publishing - 2021 - 8 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(2)}> Listen </button>
          </div>
        </div>

        <div className="product">
          <div className="image-pc">
            <img src="assets/m4.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>DREamlike HeAven</h3>
            <span>13 hr 31 mn</span>
          </div>
          <p>Althevu - 364 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(3)}> Listen </button>
          </div>
        </div>

        <div className="product">
          <div className="image-pc">
            <img src="assets/m5.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>Chill Out Jazz</h3>
            <span>6 hr</span>
          </div>
          <p>Swinging jazz for relaxing and unwinding</p>
          <p>Spotify - 52,529 likes - 100 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(4)}> Listen </button>
          </div>
        </div>
        <div className="product">
          <div className="image-pc">
            <img src="assets/m6.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>lush lofi</h3>
            <span>19 hr 27 mn</span>
          </div>
          <p>The chillest instrumental lofi beats, certified lush</p>
          <p>Spotify - 1,014,470 likes - 521 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(5)}> Listen </button>
          </div>
        </div>
        <div className="product">
          <div className="image-pc">
            <img src="assets/m7.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>chill lofi study beats</h3>
            <span>22 hr 34 mn</span>
          </div>
          <p>
            The perfect study beats. Find your focus, crush your productivity
          </p>
          <p>Spotify - 1,206,890 - 607 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(6)}> Listen </button>
          </div>
        </div>
        <div className="product">
          <div className="image-pc">
            <img src="assets/m8.jpg" alt="" />
          </div>
          <div className="namePrice">
            <h3>Peaceful Guitar</h3>
            <span>11 hr 18 mn</span>
          </div>
          <p>Unwind to these calm classNameical guitar pieces</p>
          <p>Spotify - 1,979,842 - 280 songs</p>
          <div className="gap"></div>
          <div className="bay">
            <button onClick={() => openLink(7)}> Listen </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
