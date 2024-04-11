import { useState } from 'react'
import Parallax from './Components/parallax'


function App() {


  return (
    <> 
      <Parallax/>
    </>
  )
}

export default App



// useEffect(() => {
//   // GSAP timeline
//   const tl = gsap.timeline({
//     defaults: { ease: "power1.in" },
//     repeat: -1, // Repeat indefinitely
//     repeatDelay: 1 // Delay between repeats
//   });

//   // Get the starting position of the first image
//   const { x: lastX, y: lastY } = image1Ref.current.getBoundingClientRect();

//   // Loop over each image ref and create the animations
//   [image1Ref, image2Ref, image3Ref, image4Ref].forEach((imgRef, index) => {

  
//     // Animate to the position of the first image
//     tl.to(imgRef.current, {
//       x: lastX - imgRef.current.offsetLeft,
//       y: lastY - imgRef.current.offsetTop,
//       duration: 1,
//       delay: index * 0.3
//     })
//     .to(imgRef.current, {
//       y: "+=300", // Relative value: moves the image 300px down from its new position
//       x: "+=250", // Relative value: moves the image 250px to the right from its new position
//       opacity: 0,
//       scale: 0.5,
//       duration: 2,
//     }, "=-0.5"); // Overlap the end of the travel animation with the beginning of the falling animation
//   });
// }, []);
