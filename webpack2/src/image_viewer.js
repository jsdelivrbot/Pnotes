
import small from '../assets/200.jpg';


export default () => {
  const image = document.createElement('img');
  console.log(small);
  image.src = small; // because it's a row data inside our bundle.js
  document.body.appendChild(image);

}

