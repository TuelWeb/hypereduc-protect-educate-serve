
const ResourcesSection = () => {
  const resources = [
    {
      type: "Article",
      title: "Comment repérer les signes de harcèlement scolaire",
      description: "Guide pour les parents et enseignants sur les signaux d'alerte.",
      url: "#",
      isPDF: false,
    },
    {
      type: "PDF",
      title: "Prévenir le harcèlement en 5 points",
      description: "Document synthétique avec les bonnes pratiques pour lutter contre le harcèlement.",
      url: "#",
      isPDF: true,
    },
    {
      type: "Vidéo",
      title: "Les dangers des réseaux sociaux expliqués aux enfants",
      description: "Vidéo pédagogique sur l'usage responsable d'internet.",
      url: "#",
      isPDF: false,
    },
    {
      type: "PDF",
      title: "Guide Parents : protéger son enfant en ligne",
      description: "Guide complet pour accompagner son enfant dans sa vie numérique.",
      url: "#",
      isPDF: true,
    },
    {
      type: "Lien",
      title: "Centre national de lutte contre le harcèlement",
      description: "Ressources officielles et contacts d'aide.",
      url: "https://www.nonauharcelement.education.gouv.fr/",
      isPDF: false,
    },
    {
      type: "Article",
      title: "Comment réagir face au cyberharcèlement",
      description: "Conseils pratiques pour aider les victimes de harcèlement en ligne.",
      url: "#",
      isPDF: false,
    },
  ];

  return (
    <section id="ressources" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hypereduc-blue mb-4">Ressources</h2>
          <p className="max-w-2xl mx-auto text-hypereduc-black/80">
            Découvrez nos contenus pédagogiques et informatifs pour mieux comprendre
            et lutter contre le harcèlement scolaire et les risques numériques.
          </p>
          <div className="w-20 h-1 bg-hypereduc-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-hypereduc-gray rounded-lg p-6 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  resource.type === "PDF" 
                    ? "bg-hypereduc-red/10 text-hypereduc-red" 
                    : resource.type === "Vidéo"
                    ? "bg-blue-100 text-blue-600"
                    : resource.type === "Lien"
                    ? "bg-green-100 text-green-600"
                    : "bg-purple-100 text-purple-600"
                }`}>
                  {resource.type}
                </span>
                {resource.isPDF && (
                  <span className="text-xs text-hypereduc-black/60">Téléchargeable</span>
                )}
              </div>
              <h3 className="text-lg font-poppins font-semibold mb-2 text-hypereduc-blue">
                {resource.title}
              </h3>
              <p className="text-sm text-hypereduc-black/80 mb-4">
                {resource.description}
              </p>
              <a 
                href={resource.url} 
                target={resource.type === "Lien" ? "_blank" : "_self"}
                rel={resource.type === "Lien" ? "noopener noreferrer" : ""}
                className={`text-sm font-medium ${
                  resource.isPDF 
                    ? "text-hypereduc-red hover:underline" 
                    : "text-hypereduc-blue hover:underline"
                }`}
              >
                {resource.isPDF ? "Télécharger" : "Consulter"} →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-hypereduc-blue/10 p-6 rounded-lg">
          <h3 className="text-xl font-poppins font-semibold mb-3 text-hypereduc-blue">
            Besoin de ressources spécifiques ?
          </h3>
          <p className="mb-4 text-hypereduc-black/80">
            Notre équipe peut développer des contenus adaptés à vos besoins spécifiques,
            que vous soyez un établissement scolaire, une collectivité ou une association.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-2 bg-hypereduc-blue text-white font-medium rounded-md hover:bg-hypereduc-blue/90 transition-colors text-sm"
          >
            Demander des ressources
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
