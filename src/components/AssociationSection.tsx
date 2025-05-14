
const AssociationSection = () => {
  return (
    <section id="association" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hypereduc-blue mb-4">L'association</h2>
          <div className="w-20 h-1 bg-hypereduc-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Founder Column */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-hypereduc-blue">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5" 
                alt="Portrait de Léo D'Aversi, fondateur" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-poppins font-semibold mb-2">Léo D'Aversi</h3>
              <p className="text-sm text-hypereduc-black/70">Fondateur de HyperEduc</p>
            </div>
          </div>
          
          {/* Text Content Column */}
          <div>
            <h3 className="text-2xl font-poppins text-hypereduc-blue mb-4">Notre histoire</h3>
            <p className="mb-6 text-hypereduc-black/80">
              HyperEduc est une association à but non lucratif fondée en 2022 par Léo D'Aversi. Elle agit pour 
              sensibiliser et protéger les jeunes face aux dangers du harcèlement scolaire et du numérique.
            </p>
            
            <h3 className="text-2xl font-poppins text-hypereduc-blue mt-8 mb-4">Nos valeurs</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Prévention", description: "Anticiper pour protéger" },
                { name: "Éducation", description: "Informer pour responsabiliser" },
                { name: "Soutien", description: "Accompagner les victimes" },
                { name: "Inclusion", description: "N'oublier personne" }
              ].map((value) => (
                <div key={value.name} className="bg-hypereduc-gray p-4 rounded-lg">
                  <h4 className="font-poppins font-medium text-hypereduc-blue mb-2">{value.name}</h4>
                  <p className="text-sm text-hypereduc-black/70">{value.description}</p>
                </div>
              ))}
            </div>
            
            <blockquote className="border-l-4 border-hypereduc-red pl-4 mt-8 italic text-hypereduc-black/80">
              "Le harcèlement n'est jamais une fatalité. Par l'éducation et la prévention, 
              nous pouvons construire ensemble un monde numérique et scolaire plus sûr pour tous."
              <footer className="text-sm mt-2 not-italic">— Léo D'Aversi</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociationSection;
