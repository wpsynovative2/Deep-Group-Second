/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ShowcaseBanner from './components/ShowcaseBanner';
import Locations from './components/Locations';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Deals from './components/Deals';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProperties />
        <Services />
        <WhyChooseUs />
        <ShowcaseBanner />
        <Locations />
        <Team />
        <Testimonials />
        <Deals />
        <MobileApp />
      </main>
      <Footer />
    </div>
  );
}
