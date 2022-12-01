import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/commons'
import { Faq, FounderMessage, Hero, LearningPath, TargetAudience, TechStack, WhyUs } from '../components/home'

export default function Home() {
  return (
    <>
      <Hero/>
      <TechStack/>
      <TargetAudience/>
      <WhyUs/>
      <LearningPath/>
      <FounderMessage/>
      <Faq/>
      <Footer/>
    </>
  )
}
