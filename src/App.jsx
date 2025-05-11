import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="font-sans bg-backgroundLight text-gray-900 dark:bg-backgroundDark dark:text-gray-100 transition-colors duration-300">
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-10">
        <h1 className="text-2xl font-bold text-primary">SoftSell</h1>
        <DarkModeToggle />
      </header>
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800 text-sm">
        &copy; 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
