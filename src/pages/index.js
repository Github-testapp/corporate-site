import Layout from '../components/common/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import PricingSection from '../components/home/PricingSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TeamSection from '../components/home/TeamSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function Home() {
  return (
    <Layout
      title="ビジネスを次のレベルへ"
      description="革新的なSaaSソリューションで業務効率を劇的に改善。スタートアップから大企業まで、あらゆるビジネスに対応します。"
      noPadding
    >
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <NewsletterSection />
    </Layout>
  );
}