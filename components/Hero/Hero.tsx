import AnimatedText from "../AnimatedText/AnimatedText";
import test from '@/public/tetetest.webp'
import Image from "next/image";
interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="font-futura overflow-x-hidden min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Container principal */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-6xl font-400 mb-6 text-gray-900">
          {title}
        </h1>
        <div className="my-4">
        <AnimatedText />
        </div>
        {/* Sous-titre optionnel */}
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            {subtitle}
          </p>
        )}
        
        {/* Div en dessous */}
        
      </div>
    {/* <Image 
      src={test.src} 
      alt="Hero Image" 
      height={500} 
      width={500}  
      className="absolute -top-20 -right-32 opacity-80"
      priority={true}
      quality={50}
      placeholder="blur"
      blurDataURL={test.blurDataURL}
    /> */}
    </section>
  );
};

export default Hero; 