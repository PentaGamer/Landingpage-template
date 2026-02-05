
import React, { useEffect, useState } from 'react';
import { PartyPopper, MessageSquare, ChevronRight, Gift, AlertCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_GROUP_URL, BONUS_SURVEY_URL } from '../constants';

interface ThankYouPageProps {
  leadName: string;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ leadName }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-2">
            <PartyPopper className="w-10 h-10 text-whatsapp-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Parabéns, {leadName.split(' ')[0]}!
          </h1>
          <p className="text-xl text-slate-600 font-semibold">
            Seu cadastro foi confirmado com sucesso.
          </p>
          <div className="flex items-center justify-center gap-2 bg-green-500/10 text-green-700 py-2 px-4 rounded-full text-sm font-bold border border-green-500/20">
            <CheckCircle2 className="w-4 h-4" />
            Vaga garantida para 20/02 às 19h
          </div>
        </div>

        {/* Main Actions */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-800">Próximo Passo Obrigatório:</h2>
              <p className="text-slate-500">Entre no Grupo VIP para receber o link da aula e os materiais.</p>
            </div>

            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-whatsapp-green hover:bg-green-600 text-white text-xl font-black py-6 rounded-2xl shadow-lg shadow-green-200 transform active:scale-95 transition-all flex items-center justify-center gap-3 animate-pulse"
            >
              <MessageSquare className="w-6 h-6 fill-white" />
              ENTRAR NO GRUPO VIP AGORA
              <ChevronRight className="w-6 h-6" />
            </a>

            <div className="pt-4 flex items-center justify-center gap-2 text-slate-400">
              <div className="flex -space-x-1">
                {[1,2,3].map(i => (
                  <img key={i} className="w-6 h-6 rounded-full border border-white" src={`https://picsum.photos/seed/${i+10}/50/50`} alt="user" />
                ))}
              </div>
              <span className="text-xs font-medium">+84 pessoas entraram nos últimos 15 min</span>
            </div>
          </div>

          {/* Bonus Survey */}
          <div className="bg-slate-50 border-t border-slate-100 p-8 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs">
              <Gift className="w-4 h-4" />
              Bônus Exclusivo Liberado
            </div>
            <h3 className="text-xl font-bold text-slate-800">Quer ganhar um material extra?</h3>
            <p className="text-slate-600 text-sm">Responda nossa pesquisa rápida (30 seg) para nos ajudar a personalizar sua aula.</p>
            <a
              href={BONUS_SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Responder Pesquisa e Ganhar Bônus
            </a>
          </div>
        </div>

        {/* Validation Instructions */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
          <div className="space-y-2">
            <h4 className="font-bold text-amber-800">Validação Importante</h4>
            <p className="text-sm text-amber-700 leading-relaxed">
              Em até <strong>{formatTime(secondsRemaining)}</strong> você receberá uma mensagem automática no seu WhatsApp para validar seu cadastro. Se não receber, verifique se o número que você informou está correto ou entre em contato com nosso suporte.
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <button 
            onClick={() => window.location.hash = ''} 
            className="text-slate-400 hover:text-slate-600 transition-colors text-sm"
          >
            ← Voltar para a página inicial
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
