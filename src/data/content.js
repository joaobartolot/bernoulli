import fillingStation from '../assets/projects/filling-station.svg';
import adblueMonitoring from '../assets/projects/adblue-monitoring.svg';
import hydrogenUnit from '../assets/projects/hydrogen-unit.svg';
import personOne from '../assets/team/person-1.svg';
import personTwo from '../assets/team/person-2.svg';
import personThree from '../assets/team/person-3.svg';

export const content = {
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About Us', contact: 'Contact' },
    theme: { dark: 'Dark', light: 'Light', toggleTheme: 'Toggle theme' },
    accessibility: { toggleMenu: 'Toggle menu' },
    hero: {
      badge: 'Fluid automation engineering + software',
      title: 'Industrial fluid control that feels simple, fast, and safe.',
      description:
        'Bernoulli Automation designs digital control systems for complex plants, with a user experience that keeps operators confident from first glance.',
      ctaPrimary: 'Book a discovery call',
      ctaSecondary: 'See project cases',
      highlights: ['Fast visual reading', 'Safety-focused workflows', 'Real-world engineering reliability']
    },
    projects: {
      title: 'Project cases',
      subtitle: 'Mock cases showing how we design the software layer for fluid-critical operations.',
      items: [
        {
          title: 'Filling Station Intelligence',
          description: 'Sequencing, alerts, and throughput guidance to reduce downtime and improve operator decision speed.',
          image: fillingStation
        },
        {
          title: 'AdBlue Production Control',
          description: 'Recipe validation and process health dashboards that keep quality and compliance on track.',
          image: adblueMonitoring
        },
        {
          title: 'Hydrogen Unit Supervisor',
          description: 'A safe-by-design orchestration layer that translates field data into clear operational actions.',
          image: hydrogenUnit
        }
      ]
    },
    about: {
      title: 'Three engineers. One systems mindset.',
      description:
        'Our team blends mechanical, electrical, and software expertise so projects are practical on the plant floor and robust in code.',
      team: [
        { name: 'Nicolas Bartolote', role: 'Mechanical Engineer', note: 'Process and equipment behavior specialist.', photo: personOne },
        { name: 'Raphael Bruno', role: 'Electrical Engineer', note: 'Instrumentation, panel, and controls integration.', photo: personTwo },
        { name: 'Joao Bartolot', role: 'Software Engineer', note: 'Control software architecture and platform development.', photo: personThree }
      ]
    },
    contact: {
      title: 'Let’s map your next automation build',
      description: 'Send a quick brief. The form currently performs a mock submit and logs data in the browser console.',
      name: 'Name',
      email: 'Email',
      message: 'Tell us your process challenge',
      submit: 'Send message',
      success: 'Message received (mock). We logged it in the console.'
    },
    footer: {
      slogan: 'Engineering software for fluid systems.',
      rights: 'All rights reserved.'
    }
  },
  pt: {
    nav: { home: 'Início', projects: 'Projetos', about: 'Sobre nós', contact: 'Contato' },
    theme: { dark: 'Escuro', light: 'Claro', toggleTheme: 'Alternar tema' },
    accessibility: { toggleMenu: 'Alternar menu' },
    hero: {
      badge: 'Engenharia de automação de fluidos + software',
      title: 'Controle industrial de fluidos com experiência simples, rápida e segura.',
      description:
        'A Bernoulli Automation projeta sistemas digitais de controle para plantas complexas, com UX que dá confiança ao operador desde o primeiro olhar.',
      ctaPrimary: 'Agendar conversa',
      ctaSecondary: 'Ver casos de projeto',
      highlights: ['Leitura visual rápida', 'Fluxos com foco em segurança', 'Confiabilidade de engenharia no mundo real']
    },
    projects: {
      title: 'Casos de projeto',
      subtitle: 'Casos mockados mostrando como desenhamos a camada de software para operações críticas de fluidos.',
      items: [
        {
          title: 'Inteligência para Estações de Abastecimento',
          description: 'Sequenciamento, alertas e orientação de produtividade para reduzir paradas e acelerar decisões.',
          image: fillingStation
        },
        {
          title: 'Controle de Produção de AdBlue',
          description: 'Validação de receitas e dashboards de saúde do processo para garantir qualidade e conformidade.',
          image: adblueMonitoring
        },
        {
          title: 'Supervisor para Unidade de Hidrogênio',
          description: 'Camada de orquestração focada em segurança que transforma dados de campo em ações claras.',
          image: hydrogenUnit
        }
      ]
    },
    about: {
      title: 'Três engenheiros. Uma visão sistêmica.',
      description:
        'Unimos experiência mecânica, elétrica e de software para criar soluções práticas no chão de fábrica e robustas no código.',
      team: [
        { name: 'Nicolas Bartolote', role: 'Engenheiro Mecânico', note: 'Especialista em comportamento de processo e equipamentos.', photo: personOne },
        { name: 'Raphael Bruno', role: 'Engenheiro Elétrico', note: 'Integração de instrumentação, painéis e controle.', photo: personTwo },
        { name: 'Joao Bartolot', role: 'Engenheiro de Software', note: 'Arquitetura de software de controle e plataformas.', photo: personThree }
      ]
    },
    contact: {
      title: 'Vamos mapear seu próximo projeto de automação',
      description: 'Envie um resumo rápido. O formulário faz um envio simulado e registra os dados no console.',
      name: 'Nome',
      email: 'E-mail',
      message: 'Conte seu desafio de processo',
      submit: 'Enviar mensagem',
      success: 'Mensagem recebida (mock). Registramos no console.'
    },
    footer: {
      slogan: 'Software de engenharia para sistemas de fluidos.',
      rights: 'Todos os direitos reservados.'
    }
  }
};
