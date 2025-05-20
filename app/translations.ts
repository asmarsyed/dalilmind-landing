type Language = 'en' | 'fr' | 'ar'

type Translation = {
  title: string
  subtitle: string
  description: string
  features: {
    documentation: {
      title: string
      description: string
    }
    evidence: {
      title: string
      description: string
    }
    reference: {
      title: string
      description: string
    }
  }
  comingSoon: string
  privacyPolicy: string
  onStore: string
  followUs: string
}

const translations: Record<Language, Translation> = {
  en: {
    title: "Document Your",
    subtitle: "Islamic Knowledge",
    description: "Save, organize, and revisit your Islamic knowledge with their evidences. Build your personal Islamic knowledge reference library.",
    features: {
      documentation: {
        title: "Fiqh Documentation",
        description: "Record and organize Islamic rulings you follow, with their evidences from Quran and authentic hadith"
      },
      evidence: {
        title: "Evidence Management",
        description: "Easily attach and reference Quranic verses and hadith as evidence for each ruling you document"
      },
      reference: {
        title: "Quick Reference",
        description: "Access your documented rulings and their evidences anytime, anywhere, for easy revision and reference"
      }
    },
    comingSoon: "Coming soon on",
    privacyPolicy: "Privacy Policy",
    onStore: "Get updates on X",
    followUs: "@DeenTechNet"
  },
  fr: {
    title: "Documentez Votre",
    subtitle: "Savoir Islamique",
    description: "Sauvegardez, organisez et révisez vos connaissances islamiques avec leurs preuves. Construisez votre bibliothèque personnelle de référence.",
    features: {
      documentation: {
        title: "Documentation Fiqh",
        description: "Enregistrez et organisez les règles islamiques que vous suivez, avec leurs preuves du Coran et des hadiths authentiques"
      },
      evidence: {
        title: "Gestion des Preuves",
        description: "Attachez et référencez facilement les versets coraniques et les hadiths comme preuves pour chaque règle documentée"
      },
      reference: {
        title: "Référence Rapide",
        description: "Accédez à vos règles documentées et leurs preuves à tout moment, n'importe où, pour une révision et une référence faciles"
      }
    },
    comingSoon: "Bientôt disponible sur",
    privacyPolicy: "Politique de Confidentialité",
    onStore: "Suivez-nous sur X",
    followUs: "@DeenTechNet"
  },
  ar: {
    title: "وثّق",
    subtitle: "علمك الشرعي",
    description: "احفظ ونظّم وراجع معرفتك الإسلامية مع أدلتها. ابنِ مكتبتك المرجعية الشخصية للعلم الشرعي.",
    features: {
      documentation: {
        title: "توثيق الفقه",
        description: "سجّل ونظّم الأحكام الشرعية التي تتبعها، مع أدلتها من القرآن والحديث الصحيح"
      },
      evidence: {
        title: "إدارة الأدلة",
        description: "أضف وأشر بسهولة إلى الآيات القرآنية والأحاديث كأدلة لكل حكم توثقه"
      },
      reference: {
        title: "مرجع سريع",
        description: "اطّلع على أحكامك الموثقة وأدلتها في أي وقت وأي مكان، للمراجعة والرجوع السهل"
      }
    },
    comingSoon: "قريباً على",
    privacyPolicy: "سياسة الخصوصية",
    onStore: "تابعنا على X",
    followUs: "@DeenTechNet"
  }
}

export type { Language }
export { translations } 