import Image from "next/image";
import CustomButton from "@/components/StyledLink";
import SquaredBackground from "@/public/SquaredBackground.png";
import Section from "@/components/Section";
interface imgPropProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export default function GetStarted() {
  const imgProps: imgPropProps[] = [
    {
      src: "/achievements/Cal.comOnG2.svg",
      alt: "Cal.com Featured on G2",
      width: 75,
      height: 36,
    },
    {
      src: "/achievements/Cal.comOnGoogle.svg",
      alt: "Cal.com Featured on Google",
      width: 75,
      height: 36,
    },
    {
      src: "/achievements/Cal.comOnProductHunt.svg",
      alt: "Cal.com Featured on Product Hunt",
      width: 75,
      height: 36,
    },
    {
      src: "/achievements/ProductOfTheDay.svg",
      alt: "Product of the Day",
      width: 122,
      height: 37,
    },
    {
      src: "/achievements/ProductOfTheMonth.svg",
      alt: "Product of the Month",
      width: 122,
      height: 37,
    },
    {
      src: "/achievements/ProductOfTheWeek.svg",
      alt: "Product of the Week",
      width: 122,
      height: 37,
    },
  ];

  return (
    <Section>
      <div className="card-shadow  overflow-clip rounded-xl px-1 py-6 md:px-1 md:py-20 bg-white border border-gray relative mt-5 mb-3">
        <div className="flex flex-col items-center gap-8 relative z-10">
          <h1 className="font-cal md:leading-tight text-[35px] md:text-[45px] max-w-lg text-center">
            Smarter, simpler scheduling
          </h1>
          <CustomButton href="https://cal.com/signup">Get Started</CustomButton>
          <div className="max-w-[900px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-7 lg:gap-8">
            {imgProps.map(({ src, alt, width, height }: imgPropProps) => (
              <Image
                key={alt}
                src={src}
                width={width}
                height={height}
                alt={alt}
                className="m-auto"
              />
            ))}
          </div>
        </div>
        <Image
          fill
          src={SquaredBackground}
          alt="Get Started Bg"
          style={{
            objectFit: "cover",
            objectPosition: "left",
            maskImage:
              "radial-gradient(circle, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%), linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.7) 100%)",
          }}
        />
      </div>
    </Section>
  );
}
