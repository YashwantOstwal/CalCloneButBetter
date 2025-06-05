import SquaredImage from "@/public/SquaredBackground.png";
import Image from "next/image";
const Herobackground = () => (
  <Image
    priority
    fill
    src={SquaredImage}
    alt=""
    style={{
      objectFit: "cover",
      objectPosition: "left",
    }}
    className="[mask-image:radial-gradient(circle,rgb(0,0,0)_20%,rgba(0,0,0,0)_80%),linear-gradient(rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_20%,rgba(0,0,0,0)_100%,rgba(0,0,0,0.7)_100%)]"
  />
);

export default Herobackground;
