import Head from "next/head";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HealthyInside from "@/components/HealthyInside";
import DailyChallenges from "@/components/DailyChallenges";
import FullBodyWorkout from "@/components/FullBodyWorkout";
import DailyMorningWorkout from "@/components/DailyMorningWorkout";
import HowItWorks from "@/components/HowItWorks";
import OurPrograms from "@/components/OurPrograms";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>GYM BARAN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <HeroSection />
        <HealthyInside />
        <DailyChallenges />
        <FullBodyWorkout />
        <DailyMorningWorkout />
        <HowItWorks />
        <OurPrograms />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
