import Image from "next/image"
import { AiFillCloseCircle } from "react-icons/ai"

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"

const Overlay = ({
  clickedImg,
  setClickedImg,
  handleRotationRight,
  handleRotationLeft,
}) => {
  const closeModal = () => {
    setClickedImg(null)
  }

  return (
    <div
      id="openModal"
      className="fixed top-0 left-0 right-0 items-center justify-center hidden w-full h-full md:flex bg-ba-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal()
        }
      }}
    >
      <BsArrowLeftCircle
        fill="white"
        size={"60px"}
        onClick={handleRotationLeft}
        className="hover:cursor-pointer absolute top-[50%] left-[20%] fill-ba-color-gold"
      />
      <div className="flex flex-col items-center justify-center height-auto">
        <Image
          src={`/${clickedImg}`}
          width={800}
          height={400}
          alt="bigger picture"
          className="h-auto mx-auto mt-4 rounded-md w-[500px]"
        ></Image>
        <h2 className="mt-0 text-4xl text-white">{clickedImg}</h2>
      </div>

      <AiFillCloseCircle
        fill="white"
        size={"60px"}
        onClick={closeModal}
        className="absolute hover:cursor-pointer top-20 right-20 fill-ba-color-gold"
      />

      <BsArrowRightCircle
        onClick={handleRotationRight}
        fill="white"
        size={"60px"}
        className="absolute hover:cursor-pointer top-[50%] right-[20%] fill-ba-color-gold"
        // size={"60px"}
      />
    </div>
  )
}

export default Overlay
