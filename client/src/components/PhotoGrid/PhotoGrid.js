import React from "react";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES = 

[{
    src: "",
    thumbnail: "",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: ""
}]

render(
    <Gallery images={IMAGES}/>,
    document.getElementById('example-0')
);