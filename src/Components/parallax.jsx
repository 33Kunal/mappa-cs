import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Parallax = () => {

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);



useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.in" },
      repeat: -1,
      repeatDelay: 0,
    });
  

    const { x: firstX, y: firstY } = image1Ref.current.getBoundingClientRect();
  

    const imageRefs = [image1Ref, image2Ref, image3Ref, image4Ref];
  

    const offsets = imageRefs.map(imgRef => {
      const { left, top } = imgRef.current.getBoundingClientRect();
      return { x: firstX - left, y: firstY - top };
    });
  

    const staggerDuration = 0.4;
  

    imageRefs.forEach((imgRef, index) => {
      const startTime = staggerDuration * index;
  

      tl.to(imgRef.current, {
        x: `+=${offsets[index].x}`,
        y: `+=${offsets[index].y}`,
        duration: 3,
      }, startTime)
      .to(imgRef.current, {  
        y: "+=300",  
        x: "+=250",  
        opacity: 0,
        scale: 0.5,
        duration: 2,
      }, startTime + 3);  
    });
  }, []);
  
  
  

  return (
    <>
      <div className="relative bg-white h-screen w-screen overflow-hidden">
        <div className="relative ml-64">
          <div className="">
            <img
              ref={image4Ref}
              src="/images.jpeg"
              className="absolute top-16 left-16 w-32 h-32 rotate-[40deg]"
              alt="Image description"
            />
            <img
              ref={image3Ref}
              src="/images.jpeg"
              className="absolute top-16 left-10 w-32 h-32 rotate-[35deg]"
              alt="Image description"
            />
            <img
              ref={image2Ref}
              src="/images.jpeg"
              className="absolute top-20 left-6 w-32 h-32 rotate-[25deg]"
              alt="Image description"
            />
            <img
              ref={image1Ref}
              src="/images.jpeg"
              className="absolute top-24 left-0 w-32 h-32 rotate-[15deg]"
              alt="Image description"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <img
            src="/middle-eye.png"
            className="w-40 h-44 rotate-[60deg]"
            alt="Image description"
          />
        </div>
      </div>
    </>
  );
};

export default Parallax;
