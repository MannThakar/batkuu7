import Magnet from "@/Animations/Magnet/Magnet";
import PixelTransition from "@/Animations/PixelTransition/PixelTransition";
import Masonry from "@/Components/Masonry/Masonry";
import Stack from "@/Components/Stack/Stack";
import CountUp from "@/TextAnimations/CountUp/CountUp";
import SplitText from "@/TextAnimations/SplitText/SplitText";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/picnic/01_picnic.jpg",
    height: 400,
  },
  { id: 2, image: "/picnic/02_picnic.jpg", height: 400 },
  { id: 3, image: "/picnic/03_picnic.jpg", height: 300 },
  { id: 4, image: "/picnic/04_picnic.jpg", height: 400 },
  { id: 5, image: "/picnic/05_picnic.jpg", height: 400 },
  { id: 6, image: "/picnic/06_picnic.jpg", height: 400 },
  { id: 7, image: "/picnic/07_picnic.jpg", height: 400 },
  { id: 8, image: "/picnic/08_picnic.jpg", height: 300 },
  { id: 9, image: "/picnic/09_picnic.jpg", height: 400 },
  { id: 10, image: "/picnic/10_picnic.jpg", height: 400 },
];
export default function Home() {
  return (
    <>
      <div className="flex justify-center mx-auto">
        <SplitText
          text="Hello, Bachuu!!"
          className="text-[100px] font-semibold text-center text-white mt-20"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
      <div className="flex justify-between w-11/12 mx-auto mt-40">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 400, height: 600 }}
        />

        <p className="text-white w-1/2 text-xl mt-16">
          I’m so sorry for not being able to reply properly since morning. I got
          caught up with so much, and I never meant to make you feel ignored or
          upset. Please don’t think even for a second that it means I don’t love
          you, because, baby, you are my entire world. You are my sunshine, the
          light that brightens up my day, my little cutu bachuu who makes
          everything feel so special and beautiful. I never want to see you sad,
          my love. Your happiness means everything to me. I love seeing you
          laugh, smile, and do your cute little gand masti 24/7, just being your
          adorable and crazy self. That’s what makes my heart so full. No matter
          how busy I get, always remember that you are always on my mind and in
          my heart
        </p>
      </div>
      <div className="flex justify-center flex-col mt-32">
        <h1 className="text-[100px] font-semibold text-center text-white mt-20">
          Our Best Movements
        </h1>

        <Masonry data={data} className="mx-auto" />
      </div>
      <div className="mt-10 w-11/12 mx-auto flex justify-between mb-20">
        <PixelTransition
          firstContent={
            <img
              src="/pics/chashmis.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                I love you
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <div className="flex items-center">
          <h1 className="text-6xl font-semibold text-center text-white mt-20">
            That’s much i love you
          </h1>
          <CountUp
            from={0}
            to={100000000000}
            separator=","
            direction="up"
            duration={20}
            className="count-up-text text-6xl"
          />
        </div>
      </div>
    </>
  );
}
