import big from '../assets/1200.jpg';
import small from '../assets/200.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
console.log(small);
image.src = small; // because it's a row data inside our bundle.js
document.body.appendChild(image);

const bigImage = document.createElement('img');
console.log(big);
bigImage.src = big;
document.body.appendChild(bigImage);