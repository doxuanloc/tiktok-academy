import React from "react";
import dynamic from "next/dynamic";
const CategorySlider = dynamic(
  () => import("../Elements/Slider/CategorySlider"),
  {
    ssr: false,
  }
);
import CourseTabTwo from "../Elements/Tabs/CourseTabTwo";
import FeatureSection from "../Home/FeatureSection";
import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import CounterSection from "./CounterSection";
import HeroSectionTwo from "./HeroSectionTwo";
// import PartnerSection from "./PartnerSection";
import SkillSection from "./SkillSection";
import TeacherSection from "./TeacherSection";
import ZoomSection from "./ZoomSection";

const HomeMain = () => {
  return (
    <main>
      <HeroSectionTwo />
      <CounterSection />
      <CategorySlider />
      <CourseTabTwo />
    </main>
  );
};

export default HomeMain;
