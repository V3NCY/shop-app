import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easter-movies-1579898838.png",
    altText: "Slide 1",
    header: "MOVIES",
    key: "1",
  },
  {
    src:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-best-tv-shows-6up-02-1513694051.jpg",
    altText: "Slide 2",
    header: "TV SERIES",
    key: "2",
  },
  {
    src:
      "https://crushingfilm.files.wordpress.com/2018/04/black-panther-poster-title.jpg",
    altText: "Slide 3",
    header: "EXPERIENCE",
    key: "3",
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
