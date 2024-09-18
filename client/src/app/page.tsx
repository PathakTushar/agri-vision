import BlogSection from "@/components/cards/BlogSection";
import ScholarShipSection from "@/components/cards/ScholarShipSection";
import UniversityExplorer from "@/components/cards/Universities";
import HeroSection from "@/components/hero/HeroSection";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/specific/ContactUs";
import ServicePlan from "@/components/specific/ServicePlan";

export default function Home() {
    return (
        <>
            <Container>
                <HeroSection name="Tushar" />
                <UniversityExplorer />
                <ScholarShipSection />
            </Container>
            <ServicePlan />
            <Container>
                <BlogSection />
                <ContactUs />
            </Container>
            <Footer />
        </>
    );
}
