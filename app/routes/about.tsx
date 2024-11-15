import { useTranslation } from "react-i18next";
import { AppLink } from "~/components/AppLink";

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {t('about.title')}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {t('about.description')}
      </p>

      <AppLink route="contact" className="text-blue-600 hover:underline">
        {t('about.goToContact')}
      </AppLink>
    </div>
  );
}