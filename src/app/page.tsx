"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Shield, TrendingUp } from "lucide-react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "Services", id: "#services" },
        { name: "Parts", id: "#catalog" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="TractorPro Parts"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "gradient-bars" }}
      title="Genuine Tractor Parts & Expert Repair — All in One Place"
      description="Don't let downtime stop your productivity. Find the exact OEM parts you need or book an expert repair service to get your tractor back in the field faster."
      testimonials={[
        { name: "John Miller", handle: "@jmiller", testimonial: "Saved me weeks of waiting. Fast shipping and the part fit perfectly.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-farmer-taking-care-his-business_329181-15961.jpg" },
        { name: "Sarah Davis", handle: "@sarahd", testimonial: "The repair service team is incredible. Fixed my engine on-site!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-farmer-taking-care-his-business_329181-15940.jpg" },
        { name: "Mike Brown", handle: "@mbrown", testimonial: "Authorized dealer quality at a fraction of the cost.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-mechanic-workshop_329181-11863.jpg" },
        { name: "Alice Green", handle: "@aliceg", testimonial: "The best selection of parts in the region. Highly recommended.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/person-tractor_23-2150454935.jpg" },
        { name: "Tom Baker", handle: "@tbaker", testimonial: "Excellent diagnostics. They knew exactly what was wrong immediately.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-greenhouse_1398-1871.jpg" },
      ]}
      buttons={[
        { text: "Call Now", href: "tel:+1234567890" },
        { text: "Request Quote", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-uniform-truck-repair-car-malfunction_1157-46544.jpg"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/man-uniform-truck-repair-car-malfunction_1157-46544.jpg", alt: "John Miller" },
        { src: "http://img.b2bpic.net/free-photo/portrait-mechanic-workshop_329181-11863.jpg", alt: "Mike Brown" },
        { src: "http://img.b2bpic.net/free-photo/young-farmer-taking-care-his-business_329181-15940.jpg", alt: "Sarah Davis" },
        { src: "http://img.b2bpic.net/free-photo/gear-metal-wheels-isolated-white-background_93675-135487.jpg", alt: "Alice Green" },
        { src: "http://img.b2bpic.net/free-photo/harvesters-combine-parts-plant-are-waiting-sales_146671-19060.jpg", alt: "Tom Baker" },
      ]}
      avatarText="Trusted by 500+ farmers"
      marqueeItems={[
        { type: "text", text: "Engine Repairs" },
        { type: "text", text: "Genuine OEM Parts" },
        { type: "text", text: "Transmission Services" },
        { type: "text", text: "Field Diagnostics" },
        { type: "text", text: "Tractor Maintenance" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Engine Overhaul", description: "Full diagnostic and precision engine rebuilding for maximum power.", imageSrc: "http://img.b2bpic.net/free-photo/gear-metal-wheels-isolated-white-background_93675-135487.jpg" },
        { title: "Transmission Repair", description: "Expert gear and transmission system fixes with genuine parts.", imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-dirty-metal-gears-grid-light_181624-28278.jpg" },
        { title: "On-Site Maintenance", description: "We bring our service center to you for quick fluid and filter changes.", imageSrc: "http://img.b2bpic.net/free-photo/harvesters-combine-parts-plant-are-waiting-sales_146671-19060.jpg" },
      ]}
      title="Expert Repair & Maintenance Services"
      description="Our certified technicians handle everything from routine maintenance to complex engine rebuilds to keep your equipment running reliably."
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "High-Flow Oil Filter", price: "Call for price", imageSrc: "http://img.b2bpic.net/free-photo/vintage-typewriter_53876-23417.jpg" },
        { id: "p2", name: "Engine Pistons Set", price: "Call for price", imageSrc: "http://img.b2bpic.net/free-photo/closeup-view-wheels-train_1112-1091.jpg" },
        { id: "p3", name: "Transmission Gear Kit", price: "Call for price", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-hydraulic-elements_23-2149333338.jpg" },
        { id: "p4", name: "Body Panel Red", price: "Call for price", imageSrc: "http://img.b2bpic.net/free-photo/train-wheels_1136-74.jpg" },
        { id: "p5", name: "Electrical Sensor Array", price: "Call for price", imageSrc: "http://img.b2bpic.net/free-photo/electrical-panel-electric-meter-circuit-breakers-electric-frequency-converter-motor-speed-controller-rework-station_627829-10704.jpg" },
        { id: "p6", name: "Suspension Bushing Kit", price: "Call for price", imageSrc: "http://img.b2bpic.net/free-photo/tractor-tire-muddy-field_23-2151979269.jpg" },
      ]}
      title="Premium Tractor Spare Parts"
      description="Search our extensive inventory of genuine OEM parts for all major tractor brands and models."
      buttons={[{ text: "Browse All Parts", href: "#" }]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      title="About Our Expertise"
      description="With years of experience in agricultural machinery, our team delivers top-tier service and parts to minimize your downtime and maximize yield."
      metrics={[
        { label: "Total Experience", value: "500+" },
        { label: "Satisfied Farmers", value: "10k+" },
      ]}
      useInvertedBackground={false}
      imageSrc="http://img.b2bpic.net/free-photo/brutal-tattooed-bearded-mechanic-specialist-repairs-car-engine-which-is-raised-hydraulic-lift-garage-service-station_613910-5606.jpg"
      imageAlt="Brutal tattooed bearded mechanic specialist repairs the car engine which is raised on the hydraulic lift in the garage. Service station."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Need a specific part or need to book a repair? Call our experts today for the fastest service in the region."
      buttons={[
        { text: "Call Now (+1234567890)", href: "tel:+1234567890" },
        { text: "WhatsApp Us", href: "https://wa.me/1234567890" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="TractorPro Parts"
      leftLink={{ text: "© 2024 TractorPro Parts. All rights reserved.", href: "#" }}
      rightLink={{ text: "Privacy Policy", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
