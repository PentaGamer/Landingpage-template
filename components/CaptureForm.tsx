
import React, { useState } from 'react';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { LeadData } from '../types';
import { WEBHOOK_URL } from '../constants';

interface CaptureFormProps {
  onSuccess: (data: LeadData) => void;
}

const CaptureForm: React.FC<CaptureFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // n8n Webhook Integration
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          capturedAt: new Date().toISOString(),
          source: 'Landing Page Principal'
        }),
      });

      // Even if webhook fails in this demo env, we proceed to UX success
      // In production, you'd handle 4xx/5xx errors specifically.
      console.log('Lead captured and sent to n8n:', formData);
      
      // Artificial delay for UX
      setTimeout(() => {
        onSuccess(formData);
        setLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Error sending lead to webhook:', error);
      // For resilience, we still proceed to the Thank You page
      onSuccess(formData);
      setLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Basic formatting for international phone numbers
    if (!value.startsWith('+')) value = '+' + value.replace(/\D/g, '');
    else value = '+' + value.substring(1).replace(/\D/g, '');
    
    setFormData({ ...formData, whatsapp: value });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-6 text-center md:text-left">
        Garanta sua Vaga Agora!
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Nome Completo</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Ex: João Silva"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">E-mail Principal</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Ex: joao@email.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-1">
            WhatsApp com DDD <span className="text-xs text-slate-400 font-normal">(Ex: +55 11 99999-9999)</span>
          </label>
          <input
            id="whatsapp"
            type="tel"
            required
            placeholder="+55 11 99999-9999"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all font-mono"
            value={formData.whatsapp}
            onChange={handlePhoneChange}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-whatsapp-green hover:bg-green-600 text-white font-extrabold py-4 rounded-lg shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 group text-sm md:text-base uppercase tracking-tight"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Quero meu acesso e lembretes no WhatsApp!
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
        </button>

        <div className="flex items-start gap-2 mt-4 text-slate-500">
          <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p className="text-[11px] leading-relaxed">
            Ao se cadastrar, você concorda em receber comunicações sobre o evento via e-mail e WhatsApp. Pode sair a qualquer momento. Respeitamos sua privacidade.
          </p>
        </div>
      </form>
    </div>
  );
};

export default CaptureForm;
