import React from "react";
import "./PodCast.css"; // Import your CSS file for styling

const PodCast = () => {
  const LinkToMusic = [
    "https://open.spotify.com/episode/1siGzuEli3U7DUiQz2uvff?si=3ebd3b7960284c89",
    "https://open.spotify.com/show/2kH3ec1ljTia7VmwYsm8Xt?si=a9fdd4423dcf4c5e",
    "https://open.spotify.com/show/3E8WE4UaaFu0XmWn1hE4Z1?si=c732e7c3ee0d4fd2",
    "https://open.spotify.com/episode/68KZm2X13lUMl2dNpr7MVV?si=7b047cb6f8084016",
    "https://open.spotify.com/episode/6jpysSoS7iSd3SylIhKxXB?si=w0glQM0VRly4bJpsMw4ukw",
    "https://open.spotify.com/show/3XS5Pa9M1RHV6GMZfPFQLy?si=eeb68b3545d24b85",
    "https://open.spotify.com/episode/5hE3eM3dN6z1zlPmaTsLsK?si=1a5aa4f2175d45d8",
    "https://open.spotify.com/show/41arjde1lCIaz5njTtdqlW?si=44bb060c2f334e22"
  ];

  const openLink = (index) => {
    window.open(LinkToMusic[index], "_blank");
  };

  return (
    <div className="podwrap">
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod1.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Regret</h1>
            <p class="info-pod">The best of all possible podcasts, Leibniz would say. Putting big ideas in dialogue  with the everyday, Overthink offers accessible and fresh takes on philosophy from enthusiastic experts. Hosted by professors Ellie Anderson (Pomona College) and David M. Pena-Guzman (San Francisco State University).</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(0)}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod2.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Mental Health</h1>
            <p class="info-pod">Teaching you how to look after your mental health one week at a time, with practical tips you can apply immediately. Writer/host Jeremy Godwin draws on quality research and his own experience of learning to live with anxiety/ depression to help you build your mental health awareness and find tools that actually work. So, Let’s Talk About Mental Health... because the more we talk about it, the easier it get.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(1)}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod3.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Speaking of Psychology</h1>
            <p class="info-pod">“Speaking of Psychology” is an audio podcast series highlighting some of the latest, most important and relavant psychological research being conducted today. Producted by the American Psychological Association, these podcasts will help listeners apply the science of psychology to their everyday lives.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(3)}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod4.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Feel your feelings</h1>
            <p class="info-pod">Why do i avoid bad feeling? why is that a bad thing to do? how can i become a mindful observer of my emotions? let’s talk about it.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(4)}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod5.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Motivation Daily</h1>
            <p class="info-pod">Motivation Daily is for anyone looking for motivation, inspiration and encouraging words and advice to help you on your journey in life. Produced by Motiversity, this podcast features only the greatest motivational speeches, spoken by the best speakers in the world.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(5)}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod6.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Mental Health Matters</h1>
            <p class="info-pod">Talking mental health with psychologist Dr.Mark Burton. Each week we talk about different topics of mental health. Tune in each Thursday!</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(6)}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod7.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">The Healing Podcast</h1>
            <p class="info-pod">Hi gorgeous. Welcome to my poddie. I am your host Raquelle and I LOVE sharing my stories with you when it comes to healing. I am well known with being a highly sensitive person, ADHD and having anxiety
This podcast is a safe place for all of you who are looking to flourish into your highest vibing self. I’m here to guide you as much as I can and will always share real and raw stories without a filter</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(7)}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodCast;
