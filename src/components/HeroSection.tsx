
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-hypereduc-white to-hypereduc-gray"
    >
      <div className="max-container px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hypereduc-blue mb-6">
              Agir pour protéger, informer pour prévenir.
            </h1>
            <p className="text-lg md:text-xl text-hypereduc-black/80 mb-8 max-w-xl">
              HyperEduc lutte contre le harcèlement scolaire et les risques numériques 
              à travers l'éducation, l'écoute et l'action.
            </p>
            <a 
              href="#association" 
              className={cn(
                "inline-block px-8 py-3 rounded-md font-medium transition-all",
                "bg-hypereduc-red text-white hover:bg-hypereduc-red/90",
                "shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              )}
            >
              Découvrir notre engagement
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-hypereduc-blue to-hypereduc-blue/80 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Jeune personne utilisant un smartphone" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-white text-center px-6">
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold mb-3">
                    Ensemble contre le harcèlement
                  </h3>
                  <p className="text-sm md:text-base max-w-md">
                    Parce que chaque enfant mérite de grandir dans un environnement sûr et bienveillant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
