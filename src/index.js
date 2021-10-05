// it will look for the sum file in our current directory and will import whatever
// being exported from the sum file.
import sum from './sum'
import './image_viewer' // here we have simply imported the file since it was not exporting anything.
// importing the file simply will get the file executed and whatever there in file(image_viewer) will get executed

 
const total = sum(10, 5);
console.log(total);