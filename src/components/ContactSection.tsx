
import { useState } from 'react';
import { Mail, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-hypereduc-gray">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hypereduc-blue mb-4">Contact</h2>
          <p className="max-w-2xl mx-auto text-hypereduc-black/80">
            Une question, un signalement ou une proposition de collaboration ?
            N'hésitez pas à nous contacter.
          </p>
          <div className="w-20 h-1 bg-hypereduc-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-poppins font-semibold mb-6 text-hypereduc-blue">
                Informations de contact
              </h3>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-hypereduc-blue w-5 h-5" />
                  <span className="font-medium">Email</span>
                </div>
                <a href="mailto:contact@hypereduc.eu" className="text-hypereduc-blue hover:underline ml-8">
                  contact@hypereduc.eu
                </a>
              </div>
            </div>
            
            <div className="bg-hypereduc-red text-white p-6 rounded-lg flex items-start gap-4 mt-8">
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
              <div>
                <h4 className="font-poppins font-semibold mb-2">Situation d'urgence ?</h4>
                <p className="text-sm mb-3">
                  Pour toute situation d'urgence liée au harcèlement ou à une mise en danger :
                </p>
                <div className="bg-white/20 px-4 py-3 rounded-md text-center font-medium">
                  Appelez le <span className="text-lg">3018</span>
                </div>
                <p className="text-xs mt-2">Numéro national de signalement des violences numériques</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-6 text-hypereduc-blue">
              Formulaire de contact
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom et prénom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hypereduc-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hypereduc-blue"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Objet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hypereduc-blue"
                >
                  <option value="">Sélectionnez un objet</option>
                  <option value="question">Question</option>
                  <option value="signalement">Signalement</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hypereduc-blue"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-hypereduc-blue text-white font-medium rounded-md hover:bg-hypereduc-blue/90 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
