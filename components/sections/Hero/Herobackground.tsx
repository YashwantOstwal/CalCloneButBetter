import SquaredImage from "@/public/SquaredBackground.png";
import Image from "next/image";
const Herobackground = () => (
  <Image
    src={SquaredImage}
    alt=""
    style={{
      maskImage:
        "linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,0) 0%,rgba(255,255,255,0) 42%, rgba(255,255,255,0.4) 50%,rgba(255,255,255,0.6))",
    }}
    className="lg:scale-125 origin-cover origin-top absolute inset-0 w-full h-full "
    priority
  />
);

export default Herobackground;
