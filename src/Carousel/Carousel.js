import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easter-movies-1579898838.png',
    altText: 'Slide 1',
    header: 'MOVIES',
    key: '1'
  },
  {
    src: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/06/X-Men-Fantastic-Four-Movie-Crossover-SR.jpg',
    altText: 'Slide 2',
    header: 'PASSION',
    key: '2'
  },
  {
    src: 'https://crushingfilm.files.wordpress.com/2018/04/black-panther-poster-title.jpg',
    altText: 'Slide 3',
    header: 'ENERGY',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;