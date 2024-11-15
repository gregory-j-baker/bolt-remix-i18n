import { useTranslation } from "react-i18next";
import { AppLink } from "~/components/AppLink";

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {t('contact.title')}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {t('contact.description')}
      </p>
      
      <AppLink route="about" className="text-blue-600 hover:underline">
        {t('contact.goToAbout')}
      </AppLink>
    </div>
  );
}