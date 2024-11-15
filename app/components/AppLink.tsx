import { Link, useLocation } from "@remix-run/react";
import { routes } from "~/utils/routes";

interface AppLinkProps {
  route: keyof typeof routes;
  lang?: "en" | "fr";
  children: React.ReactNode;
  className?: string;
}

export function AppLink({ route, lang, children, className }: AppLinkProps) {
  const location = useLocation();
  const currentLang = lang || getCurrentLanguage(location.pathname);
  const path = routes[route][currentLang];
  
  return (
    <Link to={`/${currentLang}${path}`} className={className}>
      {children}
    </Link>
  );
}

function getCurrentLanguage(pathname: string): "en" | "fr" {
  const match = pathname.match(/^\/([a-z]{2})\//);
  return (match?.[1] === "fr" ? "fr" : "en") as "en" | "fr";
}