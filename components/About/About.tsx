import daniel from '@/public/daniel.jpg'
import { Avatar,AvatarImage } from '../ui/avatar';

import Image from 'next/image'

interface AboutProps {
  chefName: string;
  description: string;
    additionalInfo: string;
    imageUrl: string;
}

const About: React.FC<AboutProps> = ({ chefName, description, additionalInfo, imageUrl }) => {
 
  return (
    <section className="flex flex-col  items-center justify-center my-12 px-4 max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center mb-16">Bienvenue à La Cuisine Graphique !</h2>
        <p className="rounded-lg p-4 text-lg text-gray-700 mb-6 text-center">Chez La Cuisine Graphique, nous transformons vos idées en véritables festins visuels. Notre atelier de design est comme une cuisine où chaque projet est une recette unique, préparée avec soin et attention.</p>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4 my-24'>
        <Avatar className='w-24 h-24 relative'>
          <Image 
            src={daniel.src}
            alt={chefName}
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 96px) 100vw, 96px"
            priority
          />
        </Avatar>
        <div className='w-full text-center'>
        <p className=' font-bold mb-8 rounded-lg p-4'>Notre Chef </p>
            <p className=' rounded-lg p-4'>

             {' '}Derrière les fourneaux de La Cuisine Graphique, daniel monteiro, un chef du design avec 8 années d’expérience, prépare chaque projet avec une attention particulière aux détails et une créativité sans limite.</p>
        </div>
        </div>
       
     
    </section>
  );
};

export default About; 