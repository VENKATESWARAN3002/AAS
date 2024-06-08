import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from './Header';
import HeroSection from './HeroSection';
import ProgramSection from './ProgramSection';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';

function LandingPages() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Container>
       
        <ProgramSection />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </Container>
    </div>
  );
}

export default LandingPages;
