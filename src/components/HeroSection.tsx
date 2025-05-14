
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-hypereduc-white via-hypereduc-gray to-hypereduc-blue/10"
    >
      <div className="max-container px-4 lg:px-8 w-full relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 right-10 w-32 h-32 bg-hypereduc-red/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-hypereduc-blue/20 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="relative animate-fade-in order-2 lg:order-1 z-10">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-hypereduc-red/30 rounded-full blur-xl"></div>
            <span className="inline-block px-4 py-1 rounded-full bg-hypereduc-red/10 text-hypereduc-red font-medium text-sm mb-6 border border-hypereduc-red/20">
              Association de lutte contre le harcèlement
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-to-r from-hypereduc-blue to-hypereduc-red mb-6">
              Agir pour protéger, informer pour prévenir.
            </h1>
            <p className="text-lg md:text-xl text-hypereduc-black/80 mb-8 max-w-xl">
              HyperEduc lutte contre le harcèlement scolaire et les risques numériques 
              à travers l'éducation, l'écoute et l'action.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#association" 
                className={cn(
                  "inline-block px-8 py-3 rounded-md font-medium transition-all",
                  "bg-gradient-to-r from-hypereduc-red to-hypereduc-red/90 text-white hover:from-hypereduc-red/90 hover:to-hypereduc-red",
                  "shadow-lg shadow-hypereduc-red/30 hover:shadow-xl hover:shadow-hypereduc-red/40 transform hover:-translate-y-1"
                )}
              >
                Découvrir notre engagement
              </a>
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 rounded-md font-medium transition-all bg-transparent border-2 border-hypereduc-blue text-hypereduc-blue hover:bg-hypereduc-blue/10 transform hover:-translate-y-1"
              >
                Nous contacter
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-hypereduc-red/30 rounded-lg transform rotate-3"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-hypereduc-blue/30 rounded-lg transform -rotate-3"></div>
              
              <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-hypereduc-blue to-hypereduc-blue/80 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Jeune personne utilisant un smartphone" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hypereduc-blue/60 to-transparent"></div>
                
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-white text-center px-6 z-10">
                    <div className="inline-block p-1 px-4 rounded-full bg-white/10 backdrop-blur-sm mb-4 border border-white/20">
                      <span className="text-sm font-medium">Ensemble contre le harcèlement</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-poppins font-semibold mb-3">
                      Un environnement sûr pour chaque enfant
                    </h3>
                    <p className="text-sm md:text-base max-w-md">
                      Parce que chaque enfant mérite de grandir dans un environnement sûr et bienveillant
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-12 right-8 w-16 h-16 bg-hypereduc-red/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
