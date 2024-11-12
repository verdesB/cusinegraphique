import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Recepies from '@/components/Recepies/Recepies';
import MenuServices from '@/components/MenuServices/MenuServices';
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return (
    <main>
      <Hero 
        title="la cuisine"
        subtitle="Créons ensemble votre identité visuelle"
      />
      <About
        chefName="Daniel Monteiro"
        description="Daniel Monteiro est un chef renommé avec une passion pour la cuisine innovante."
        additionalInfo="Il a travaillé dans plusieurs restaurants étoilés et a été récompensé pour ses créations culinaires uniques."
        imageUrl="/public/daniel.jpg"
      />
      <Recepies />
      <MenuServices />
      <Projects />
    </main>
  );
}
