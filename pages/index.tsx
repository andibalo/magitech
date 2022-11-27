import Head from 'next/head'
import Image from 'next/image'
import { Hero, LearningPath, TargetAudience, TechStack, WhyUs } from '../components/home'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Hero/>
      <TechStack/>
      <TargetAudience/>
      <WhyUs/>
      <LearningPath/>
    </>
  )
}
