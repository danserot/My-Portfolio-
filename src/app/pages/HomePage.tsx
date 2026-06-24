import HomeHero from "../components/HomeHero";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { useLanguage } from "../i18n/context";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <PageShell>
      <Seo title={t.seo.home.title} description={t.seo.home.description} path="/" />
      <HomeHero />
    </PageShell>
  );
}
