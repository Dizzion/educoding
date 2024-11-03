export const metadata = {
  title: "Home - EDUCoding",
  description: "Landing Page",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import LandingHeader from "@/components/ui/landingheader";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
