
import { File, MessageSquare, Users, Calendar } from "lucide-react";

const ActionsSection = () => {
  const actions = [
    {
      icon: <Calendar className="w-8 h-8 text-hypereduc-red" />,
      title: "Interventions en milieu scolaire",
      description: "Ateliers de sensibilisation, débats et formations pour les élèves et le personnel éducatif.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-hypereduc-red" />,
      title: "Prévention des risques numériques",
      description: "Éducation aux réseaux sociaux, e-réputation et lutte contre le cyberharcèlement.",
    },
    {
      icon: <Users className="w-8 h-8 text-hypereduc-red" />,
      title: "Soutien aux familles",
      description: "Orientation, conseils et médiation pour les familles confrontées au harcèlement.",
    },
    {
      icon: <File className="w-8 h-8 text-hypereduc-red" />,
      title: "Ressources pédagogiques",
      description: "Kits pour enseignants, vidéos et fiches pratiques pour sensibiliser au harcèlement.",
    },
  ];

  return (
    <section id="actions" className="section-padding bg-hypereduc-gray">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hypereduc-blue mb-4">Nos actions</h2>
          <p className="max-w-2xl mx-auto text-hypereduc-black/80">
            Nos interventions couvrent plusieurs domaines pour lutter efficacement contre le harcèlement
            scolaire et les risques numériques.
          </p>
          <div className="w-20 h-1 bg-hypereduc-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {action.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-center mb-3 text-hypereduc-blue">
                {action.title}
              </h3>
              <p className="text-center text-sm text-hypereduc-black/80">
                {action.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-hypereduc-blue text-white font-medium rounded-md hover:bg-hypereduc-blue/90 transition-colors"
          >
            Collaborer avec nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
