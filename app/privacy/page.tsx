"use client"

import { useState } from 'react'
import Link from 'next/link'

type Language = 'en' | 'fr' | 'ar'

type Section = {
  title: string
  content: string
}

type PrivacyContent = {
  title: string
  lastUpdated: string
  intro: string
  sections: Section[]
}

const privacyContent: Record<Language, PrivacyContent> = {
  en: {
    title: "Privacy Policy – DalilMind",
    lastUpdated: "Last updated: May 20, 2025",
    intro: "DalilMind respects your privacy. This privacy policy explains how we handle your data in a clear and transparent way.",
    sections: [
      {
        title: "1. No personal data collection",
        content: "DalilMind does not collect, store, or share any personally identifiable information.\nYou can use the app without creating an account or providing any personal details such as your name or email address."
      },
      {
        title: "2. Local-only data storage",
        content: "All content you create in DalilMind (rules, evidences, notes) is stored locally on your device.\nYou are the sole owner of your data.\nThe app does not sync your entries with any external server or cloud service."
      },
      {
        title: "3. Device permissions",
        content: "DalilMind may request certain permissions, only when required for core functionality, such as:\n\nStorage access: to let you export or back up your data manually.\n\nThese permissions are used only locally and no data is sent or shared externally."
      },
      {
        title: "4. No ads – No tracking",
        content: "DalilMind is completely ad-free and tracker-free.\nWe do not collect any data for marketing, analytics, or third-party services."
      },
      {
        title: "5. Security",
        content: "While DalilMind doesn't process sensitive personal data, we follow good development practices to ensure your content remains secure on your device."
      },
      {
        title: "6. Changes to this policy",
        content: "If we update this privacy policy in the future, changes will be reflected here and the \"last updated\" date will be revised accordingly."
      },
      {
        title: "7. Contact",
        content: "If you have any questions about this privacy policy, you can contact us at:\n\n📧 contact@deentech.net\n🌐 deentech.net"
      }
    ]
  },
  fr: {
    title: "Politique de confidentialité – DalilMind",
    lastUpdated: "Dernière mise à jour : 20 mai 2025",
    intro: "DalilMind respecte votre vie privée. Cette politique de confidentialité explique comment vos données sont traitées de manière claire et transparente.",
    sections: [
      {
        title: "1. Aucune collecte de données personnelles",
        content: "DalilMind ne collecte, ne stocke, ni ne partage aucune information personnelle identifiable.\nVous pouvez utiliser l'application sans créer de compte ni fournir d'informations personnelles comme votre nom ou votre adresse e-mail."
      },
      {
        title: "2. Stockage local uniquement",
        content: "Tout le contenu que vous créez dans DalilMind (règles, preuves, notes) est stocké localement sur votre appareil.\nVous êtes le seul propriétaire de vos données.\nL'application ne synchronise pas vos entrées avec un serveur externe ou un service cloud."
      },
      {
        title: "3. Permissions de l'appareil",
        content: "DalilMind peut demander certaines autorisations, uniquement si nécessaire pour ses fonctionnalités principales, telles que :\n\nAccès au stockage : pour vous permettre d'exporter ou sauvegarder vos données manuellement.\n\nCes autorisations sont utilisées uniquement localement et aucune donnée n'est envoyée ni partagée à l'extérieur."
      },
      {
        title: "4. Pas de publicité – Pas de suivi",
        content: "DalilMind est entièrement sans publicité et sans traqueur.\nAucune donnée n'est collectée à des fins de marketing, d'analyse ou pour des services tiers."
      },
      {
        title: "5. Sécurité",
        content: "Même si DalilMind ne traite pas de données personnelles sensibles, nous suivons de bonnes pratiques de développement afin de sécuriser vos contenus sur votre appareil."
      },
      {
        title: "6. Modifications de cette politique",
        content: "En cas de modification de cette politique de confidentialité, les changements seront indiqués ici avec une nouvelle date de mise à jour."
      },
      {
        title: "7. Contact",
        content: "Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à :\n\n📧 contact@deentech.net\n🌐 deentech.net"
      }
    ]
  },
  ar: {
    title: "سياسة الخصوصية – DalilMind",
    lastUpdated: "آخر تحديث: 20 مايو 2025",
    intro: "تقدّر DalilMind خصوصيتك. توضح سياسة الخصوصية هذه كيف نتعامل مع بياناتك بطريقة واضحة وشفافة.",
    sections: [
      {
        title: "1. عدم جمع أي بيانات شخصية",
        content: "لا تقوم DalilMind بجمع أو تخزين أو مشاركة أي معلومات تعريف شخصية.\nيمكنك استخدام التطبيق دون إنشاء حساب أو تقديم أي معلومات شخصية مثل اسمك أو بريدك الإلكتروني."
      },
      {
        title: "2. تخزين البيانات محليًا فقط",
        content: "يتم تخزين جميع المحتويات التي تنشئها في DalilMind (القواعد، الأدلة، الملاحظات) محليًا على جهازك.\nأنت المالك الوحيد لبياناتك.\nلا يقوم التطبيق بمزامنة بياناتك مع أي خادم خارجي أو خدمة سحابية."
      },
      {
        title: "3. أذونات الجهاز",
        content: "قد يطلب تطبيق DalilMind بعض الأذونات، فقط عند الضرورة من أجل الوظائف الأساسية، مثل:\n\nالوصول إلى التخزين: للسماح لك بتصدير بياناتك أو نسخها احتياطيًا يدويًا.\n\nتُستخدم هذه الأذونات محليًا فقط، ولا يتم إرسال أو مشاركة أي بيانات خارجية."
      },
      {
        title: "4. بدون إعلانات – بدون تتبع",
        content: "DalilMind خالٍ تمامًا من الإعلانات والتتبع.\nلا نقوم بجمع أي بيانات لأغراض التسويق أو التحليل أو لأي خدمات طرف ثالث."
      },
      {
        title: "5. الأمان",
        content: "على الرغم من أن DalilMind لا يعالج بيانات شخصية حساسة، إلا أننا نتبع أفضل الممارسات في التطوير للحفاظ على أمان بياناتك على جهازك."
      },
      {
        title: "6. التعديلات على هذه السياسة",
        content: "إذا قمنا بتحديث سياسة الخصوصية هذه في المستقبل، فسيتم عرض التعديلات هنا، وسيتم تحديث تاريخ \"آخر تحديث\" وفقًا لذلك."
      },
      {
        title: "7. التواصل",
        content: "إذا كانت لديك أي استفسارات بخصوص سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:\n\n📧 contact@deentech.net\n🌐 deentech.net"
      }
    ]
  }
}

export default function Privacy() {
  const [language, setLanguage] = useState<Language>('en')
  const content = privacyContent[language]
  
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
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {language === 'en' ? 'Terms of Use' : language === 'fr' ? 'Conditions d\'Utilisation' : 'شروط الاستخدام'}
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