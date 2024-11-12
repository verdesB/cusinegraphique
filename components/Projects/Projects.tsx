import Link from 'next/link';

const Projects = () => {
    return (
        <section className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/identite-visuelle">
                    <article 
                        className="relative bg-cover bg-center h-64 shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
                        style={{ 
                            backgroundImage: "url('/path/to/image1.jpg')",
                            clipPath: "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)" // Diamond shape
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 className="text-2xl font-semibold text-white">Identité visuelle et logo</h3>
                        </div>
                    </article>
                </Link>
                <Link href="/webdesign">
                    <article 
                        className="relative bg-cover bg-center h-64 shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
                        style={{ 
                            backgroundImage: "url('/path/to/image2.jpg')",
                            clipPath: "ellipse(50% 35% at 50% 50%)" // Elliptical shape
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 className="text-2xl font-semibold text-white">Webdesign</h3>
                        </div>
                    </article>
                </Link>
                <Link href="/supports-print">
                    <article 
                        className="relative bg-cover bg-center h-64 shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
                        style={{ 
                            backgroundImage: "url('/path/to/image3.jpg')",
                            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" // Hexagonal shape
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 className="text-2xl font-semibold text-white">Supports de communication print</h3>
                        </div>
                    </article>
                </Link>
            </div>
        </section>
    )
}

export default Projects;