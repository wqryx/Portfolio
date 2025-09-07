import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import axios from 'axios';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(''); // Limpiar mensajes anteriores

    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData);
      if (response.status === 200) {
        setSubmitMessage('¡Mensaje enviado correctamente! Te responderé pronto.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000); // Ocultar mensaje después de 5 segundos
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Trabajemos Juntos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Información de contacto */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${data.email}`}
                  className="flex items-center p-4 bg-black/40 rounded-xl border border-gray-800/50 hover:border-emerald-400/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white group-hover:text-emerald-400 transition-colors duration-300">{data.email}</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-black/40 rounded-xl border border-gray-800/50">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Teléfono</p>
                    <p className="text-white">{data.phone}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-black/40 rounded-xl border border-gray-800/50">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Ubicación</p>
                    <p className="text-white">{data.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enlaces sociales */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Sígueme en</h4>
              <div className="flex space-x-4">
                <a 
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/40 rounded-xl border border-gray-800/50 hover:border-purple-400/30 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                </a>
                <a 
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/40 rounded-xl border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-black/40 rounded-2xl border border-gray-800/50 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-lg text-emerald-400">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Nombre *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-emerald-400/50 focus:ring-emerald-400/20"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-emerald-400/50 focus:ring-emerald-400/20"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Asunto *</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-emerald-400/50 focus:ring-emerald-400/20"
                    placeholder="¿De qué quieres hablar?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Mensaje *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-emerald-400/50 focus:ring-emerald-400/20 resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;