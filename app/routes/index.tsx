import type { MetaFunction } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { AppLink } from "~/components/AppLink";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            {t('home.welcome')} <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/logo-light.png"
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        
        <nav className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4">
            <AppLink route="about" lang="en" className="text-blue-600 hover:underline">
              {t('home.about')}
            </AppLink>
            <AppLink route="about" lang="fr" className="text-blue-600 hover:underline">
              {t('home.aboutFr')}
            </AppLink>
          </div>
          
          <div className="flex gap-4">
            <AppLink route="contact" lang="en" className="text-blue-600 hover:underline">
              {t('home.contact')}
            </AppLink>
            <AppLink route="contact" lang="fr" className="text-blue-600 hover:underline">
              {t('home.contactFr')}
            </AppLink>
          </div>
        </nav>
      </div>
    </div>
  );
}