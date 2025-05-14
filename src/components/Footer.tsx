
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hypereduc-blue text-white pt-12 pb-6">
      <div className="max-container px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Block */}
          <div>
            <h3 className="text-xl font-poppins mb-4">À propos de HyperEduc</h3>
            <p className="text-sm leading-relaxed opacity-90">
              HyperEduc est une association nationale engagée dans la lutte contre le harcèlement scolaire 
              et les risques numériques. Notre mission est de protéger les jeunes à travers 
              l'éducation et la prévention.
            </p>
          </div>
          
          {/* Contact Block */}
          <div>
            <h3 className="text-xl font-poppins mb-4">Contact</h3>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={18} />
              <a href="mailto:contact@hypereduc.eu" className="text-sm hover:underline">
                contact@hypereduc.eu
              </a>
            </div>
            <p className="text-sm leading-relaxed opacity-90 mt-4">
              Pour toute urgence liée au harcèlement, appelez le 3018 (service d'assistance gratuit)
            </p>
          </div>
          
          {/* Links Block */}
          <div>
            <h3 className="text-xl font-poppins mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Mentions légales</a></li>
              <li><a href="#" className="text-sm hover:underline">Politique de confidentialité</a></li>
              <li><a href="#" className="text-sm hover:underline">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white/20 text-center">
          <p className="text-sm opacity-80">© {currentYear} HyperEduc. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
