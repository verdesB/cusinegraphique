import { Palette, Monitor, Printer, PenTool, Film, Box } from 'lucide-react';

const MenuServices = () => {
    return (
        <section className="futura flex flex-col items-center justify-center my-12 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Menu </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="bg-white shadow-md rounded-2xl overflow-hidden">
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                            <Palette className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center">Identité visuelle et logo</h3>
                        <p className="text-lg text-center">Création d&apos;une identité visuelle unique qui reflète l&apos;essence de votre marque, incluant la conception de logos distinctifs et mémorables.</p>
                    </div>
                </article>
                <article className="bg-white shadow-md rounded-2xl overflow-hidden">
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                            <Monitor className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center">Webdesign</h3>
                        <p className="text-lg text-center">Conception de sites web esthétiques et fonctionnels, optimisés pour une expérience utilisateur fluide et engageante.</p>
                    </div>
                </article>
                <article className="bg-white shadow-md rounded-2xl overflow-hidden">
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                            <Printer className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center">Supports de communication print</h3>
                        <p className="text-lg text-center">Création de supports imprimés tels que brochures, flyers, cartes de visite et affiches, pour promouvoir efficacement votre entreprise.</p>
                    </div>
                </article>
                <article className="bg-white shadow-md rounded-2xl overflow-hidden">
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                            <PenTool className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center">Illustrations personnalisées</h3>
                        <p className="text-lg text-center">Réalisation d&apos;illustrations sur mesure pour enrichir vos projets visuels, qu&apos;il s&apos;agisse de dessins, de graphiques ou d&apos;icônes.</p>
                    </div>
                </article>
                <article className="bg-white shadow-md rounded-2xl overflow-hidden">
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                            <Film className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center">Motion design</h3>
                        <p className="text-lg text-center">Conception d&apos;animations et de vidéos dynamiques pour capter l'attention de votre audience et transmettre vos messages de manière impactante.</p>
                    </div>
                </article>
                <article className="bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                            <Box className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center">Packaging créatif</h3>
                        <p className="text-lg text-center">Développement de designs d&apos;emballage innovants et attrayants qui mettent en valeur vos produits et attirent les consommateurs.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default MenuServices;