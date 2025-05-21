"use client"

import { useState } from 'react'
import Link from 'next/link'

type Language = 'en' | 'fr' | 'ar'

type Section = {
  title: string
  content: string
}

type TermsContent = {
  title: string
  lastUpdated: string
  intro: string
  sections: Section[]
}

const termsContent: Record<Language, TermsContent> = {
  en: {
    title: "Terms of Use – DalilMind",
    lastUpdated: "Last updated: May 20, 2025",
    intro: "Thank you for using DalilMind. By using this app, you agree to the following terms:",
    sections: [
      {
        title: "1. Purpose of the app",
        content: "DalilMind is designed to help users document, organize, and consult their personal Islamic knowledge (fiqh rulings, evidences, notes, etc.)."
      },
      {
        title: "2. Personal use only",
        content: "This app is intended for personal and educational use only. Any commercial, illegal, or harmful use is strictly prohibited."
      },
      {
        title: "3. Intellectual property",
        content: "All elements of the app (logo, design, original content) are the property of Deentech. You may not copy, modify, or distribute them without permission."
      },
      {
        title: "4. Data & privacy",
        content: "DalilMind does not collect any personal data. All your information is stored locally on your device. Please refer to our privacy policy for more details."
      },
      {
        title: "5. Disclaimer",
        content: "The app is provided \"as is\", without warranty of accuracy or regular updates. You are fully responsible for how you use the information stored in the app."
      },
      {
        title: "6. Changes to these terms",
        content: "These terms may be updated at any time. Any changes will be announced through the app or our official website."
      },
      {
        title: "7. Contact",
        content: "If you have any questions, feel free to contact us at:\n\n📧 contact@deentech.net"
      }
    ]
  },
  fr: {
    title: "Conditions Générales d'Utilisation – DalilMind",
    lastUpdated: "Dernière mise à jour : 20 mai 2025",
    intro: "Merci d'utiliser DalilMind. En utilisant cette application, vous acceptez les conditions suivantes :",
    sections: [
      {
        title: "1. Objet de l'application",
        content: "DalilMind est une application destinée à aider les utilisateurs à documenter, organiser et consulter leurs connaissances islamiques personnelles (règles de fiqh, preuves, notes, etc.)."
      },
      {
        title: "2. Utilisation personnelle",
        content: "L'application est fournie pour un usage personnel et éducatif uniquement. Il est interdit de l'utiliser à des fins commerciales, illégales ou nuisibles."
      },
      {
        title: "3. Propriété intellectuelle",
        content: "Tous les éléments de l'application (logo, design, contenu original) sont la propriété de Deentech. Il est interdit de les copier, modifier ou distribuer sans autorisation."
      },
      {
        title: "4. Données et confidentialité",
        content: "DalilMind ne collecte aucune donnée personnelle. Toutes vos informations sont stockées localement sur votre appareil. Veuillez consulter notre politique de confidentialité pour plus de détails."
      },
      {
        title: "5. Responsabilité",
        content: "L'application est fournie \"telle quelle\", sans garantie d'exactitude ou de mise à jour permanente. L'utilisateur reste responsable de l'utilisation des informations stockées dans l'application."
      },
      {
        title: "6. Modifications des conditions",
        content: "Ces conditions peuvent être mises à jour à tout moment. Toute modification sera communiquée via l'application ou notre site officiel."
      },
      {
        title: "7. Contact",
        content: "Pour toute question, contactez-nous à :\n\n📧 contact@deentech.net"
      }
    ]
  },
  ar: {
    title: "شروط الاستخدام – DalilMind",
    lastUpdated: "آخر تحديث: 20 مايو 2025",
    intro: "شكرًا لاستخدامك تطبيق DalilMind. باستخدام هذا التطبيق، فإنك توافق على الشروط التالية:",
    sections: [
      {
        title: "1. هدف التطبيق",
        content: "DalilMind هو تطبيق يهدف إلى مساعدة المستخدمين على توثيق وتنظيم ومراجعة معارفهم الإسلامية الشخصية (أحكام فقهية، أدلة، ملاحظات...)."
      },
      {
        title: "2. الاستخدام الشخصي فقط",
        content: "يُوفر هذا التطبيق للاستخدام الشخصي والتعليمي فقط. يُمنع استخدامه لأغراض تجارية أو غير قانونية أو ضارة."
      },
      {
        title: "3. الملكية الفكرية",
        content: "جميع مكونات التطبيق (الشعار، التصميم، المحتوى الأصلي) هي ملك لشركة Deentech. لا يجوز نسخها أو تعديلها أو توزيعها دون إذن."
      },
      {
        title: "4. البيانات والخصوصية",
        content: "لا يقوم تطبيق DalilMind بجمع أي بيانات شخصية. يتم تخزين جميع بياناتك محليًا على جهازك. يُرجى مراجعة سياسة الخصوصية لمزيد من التفاصيل."
      },
      {
        title: "5. إخلاء المسؤولية",
        content: "يُقدّم التطبيق \"كما هو\"، دون أي ضمانات بخصوص دقة أو تحديث المعلومات. أنت المسؤول الوحيد عن كيفية استخدامك للمعلومات داخل التطبيق."
      },
      {
        title: "6. التعديلات على الشروط",
        content: "قد يتم تعديل هذه الشروط في أي وقت. سيتم الإعلان عن أي تغييرات من خلال التطبيق أو موقعنا الرسمي."
      },
      {
        title: "7. التواصل",
        content: "إذا كان لديك أي استفسارات، يمكنك التواصل معنا على:\n\n📧 contact@deentech.net"
      }
    ]
  }
}

export default function Terms() {
  const [language, setLanguage] = useState<Language>('en')
  const content = termsContent[language]
  
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Stylish background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0806] via-[#15100c] to-[#1e1411] z-0"></div>
      <div className="absolute inset-0 green-overlay opacity-10"></div>
      <div className="absolute inset-0 noise-texture opacity-25"></div>
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      
      {/* Gradient spots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full max-w-[80vw] max-h-[80vh] bg-gradient-to-br from-[#27BA61]/25 via-[#8FC540]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-full max-w-[80vw] max-h-[80vh] bg-gradient-to-tl from-[#27BA61]/20 via-[#8FC540]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-full h-full max-w-[40vw] max-h-[40vh] bg-gradient-to-r from-[#8FC540]/20 via-[#27BA61]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <header className="bg-card/30 backdrop-blur-sm border-b border-[#1a1a1d]/50 relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 relative">
              <img src="/logo.png" alt="DalilMind Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold">DalilMind</span>
          </Link>
          <div className="flex gap-4">
            <button 
              onClick={() => setLanguage('en')} 
              className={'px-2 py-1 rounded ' + (language === 'en' ? 'bg-[#27BA61] text-white' : '')}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('fr')} 
              className={'px-2 py-1 rounded ' + (language === 'fr' ? 'bg-[#27BA61] text-white' : '')}
            >
              FR
            </button>
            <button 
              onClick={() => setLanguage('ar')} 
              className={'px-2 py-1 rounded ' + (language === 'ar' ? 'bg-[#27BA61] text-white' : '')}
            >
              عربي
            </button>
          </div>
        </div>
      </header>
      
      <main className={'max-w-4xl mx-auto px-4 py-8 relative z-10 ' + (language === 'ar' ? 'rtl' : 'ltr')}>
        <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
        <p className="text-muted-foreground mb-6">{content.lastUpdated}</p>
        <p className="mb-8">{content.intro}</p>
        
        <div className="space-y-8">
          {content.sections.map((section: Section, index: number) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
} 