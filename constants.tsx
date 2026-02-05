
import React from 'react';
import { CheckCircle2, MessageSquare, Bell, Gift, BookOpen } from 'lucide-react';
import { BenefitItem } from './types';

export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/exemplo-grupo-vip';
export const BONUS_SURVEY_URL = 'https://forms.gle/exemplo-pesquisa-bonus';
export const WEBHOOK_URL = 'https://n8n.seudominio.com/webhook/capture-lead'; // Placeholder para n8n

export const BENEFITS: BenefitItem[] = [
  {
    icon: <MessageSquare className="w-6 h-6 text-green-500" />,
    text: "Entrada imediata no Grupo VIP do evento (após o cadastro)"
  },
  {
    icon: <Bell className="w-6 h-6 text-green-500" />,
    text: "Lembretes automáticos no seu WhatsApp para não esquecer"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-green-500" />,
    text: "Link da aula e materiais enviados na hora certa"
  },
  {
    icon: <Gift className="w-6 h-6 text-green-500" />,
    text: "Oportunidade de bônus exclusivos via pesquisa rápida"
  }
];

export const AGENDA_TOPICS = [
  "Como iniciar no Marketing Digital do zero absoluto em 2026",
  "O método 3P para criar campanhas que vendem dormindo",
  "A estrutura de automação via WhatsApp que converte 4x mais",
  "Análise de casos reais: De 0 a R$ 10k faturados em 30 dias",
  "O segredo para atrair leads qualificados sem gastar fortunas"
];
