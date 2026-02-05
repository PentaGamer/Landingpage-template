
import React from 'react';
// Added MessageSquare to the import list from lucide-react
import { Play, Star, Calendar, Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import CaptureForm from './CaptureForm';
import { BENEFITS, AGENDA_TOPICS } from '../constants';
import { LeadData } from '../types';

interface LandingPageProps {
  onCapture: (data: LeadData) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onCapture }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-whatsapp-green text-white py-2 text-center text-xs font-bold uppercase tracking-widest px-4">
        ⚡️ Apenas 47 vagas restantes para a live de 20/02
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-4 md:px-8 bg-slate-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-green-400 font-semibold text-sm">
              <Star className="w-4 h-4 fill-green-400" />
              Aula Gratuita e Exclusiva
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Domine Marketing Digital em <span className="text-whatsapp-green italic">90 Minutos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Aprenda o método "Fórmula Descomplica MKT" e receba links de acesso e lembretes diretamente no seu WhatsApp para não perder nenhum detalhe.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 pt-4">
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-5 h-5 text-whatsapp-green" />
                <span className="font-semibold">20/02/2026</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Clock className="w-5 h-5 text-whatsapp-green" />
                <span className="font-semibold">Às 19h00</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-whatsapp-green" />
                <span className="font-semibold">Online (YouTube)</span>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="mt-8 relative group cursor-pointer aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-2xl mx-auto lg:mx-0">
              <img 
                src="https://picsum.photos/seed/mkt/1280/720" 
                alt="Thumbnail da aula" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-whatsapp-green rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white">
                Assista ao convite (2 min)
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-slate-900" src={`https://picsum.photos/seed/${i}/100/100`} alt="user" />
                ))}
              </div>
              <span>+12.450 pessoas já participaram do método</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5">
            <CaptureForm onSuccess={onCapture} />
          </div>
        </div>
      </section>

      {/* Onboarding Benefits */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
              Tudo Organizado Para Você Não Perder Nada!
            </h2>
            <p className="text-slate-600 text-lg">
              Utilizamos automação inteligente via WhatsApp para garantir sua melhor experiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  {benefit.icon}
                </div>
                <p className="font-semibold text-slate-700 mt-2">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-8">
              O que Você Vai Aprender Nessa Aula?
            </h2>
            <ul className="space-y-4">
              {AGENDA_TOPICS.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-whatsapp-green flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-slate-800 rounded-2xl text-white">
              <p className="text-sm uppercase tracking-widest font-bold text-whatsapp-green mb-2">Bônus Especial</p>
              <h4 className="text-xl font-bold mb-2">Checklist "Descomplica Ads"</h4>
              <p className="text-slate-300">Entregue apenas para quem estiver presente na live e participar do Grupo VIP.</p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/workspace/800/600" 
              alt="Ambiente de trabalho" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-whatsapp-green rounded-full -z-10 blur-3xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/profile/500/600" 
                  alt="Instrutor" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm font-bold text-slate-800">Review 5.0/5.0</p>
                  <p className="text-xs text-slate-500">Baseado em +5k alunos</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <h3 className="text-3xl font-extrabold text-slate-800 mb-6">Quem será seu mentor?</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Com mais de 10 anos de experiência no mercado digital, já ajudei centenas de empresas e profissionais autônomos a saírem do absoluto zero para faturamentos consistentes usando o poder das redes sociais e automação.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Minha missão com o <strong>Fórmula Descomplica MKT</strong> é democratizar o conhecimento técnico e mostrar que qualquer pessoa, com as ferramentas certas (e o WhatsApp no bolso), pode ter um negócio lucrativo.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="bg-whatsapp-green/10 p-2 rounded-full">
                  <MessageSquare className="w-6 h-6 text-whatsapp-green" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Suporte e lembretes via WhatsApp</p>
                  <p className="text-sm text-slate-500">Atendimento humanizado para tirar suas dúvidas pré-evento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-100 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full bg-whatsapp-green text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
        >
          QUERO MINHA VAGA GRATUITA
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 px-4 md:px-8 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">© 2026 Fórmula Descomplica MKT. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto mb-8 opacity-60">
            Este site não faz parte do Facebook ou do Google. Além disso, este site NÃO é endossado pelo Facebook ou Google de nenhuma maneira. FACEBOOK e GOOGLE são marcas comerciais independentes.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
