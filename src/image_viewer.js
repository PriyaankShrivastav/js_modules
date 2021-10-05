import '../styles/image_viewer.css'
import big from '../assets/big.jpg'
import small from '../assets/small.jpg'
const image = document.createElement('img')
image.src   = 'http://lorempixel.com/400/400'

document.body.appendChild(image)


// Webpack by itself only knows javascript, so when we want it to pack any other type of resources like 
// .css or .scss or .ts, webpack needs help in order to compile and bundle those non-javascript types of 
// resources.
