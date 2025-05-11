const steps = [
    {
      icon: "⬆️",
      title: "Upload License",
      description: "Submit your unused software license info easily.",
    },
    {
      icon: "📈",
      title: "Get Valuation",
      description: "We provide a fair market estimate in minutes.",
    },
    {
      icon: "💸",
      title: "Get Paid",
      description: "Receive your payment via your preferred method.",
    },
  ];
  
  const HowItWorks = () => (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 text-center px-6">
      <h3 className="text-3xl font-bold mb-10">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map(({ icon, title, description }) => (
          <div key={title} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">{icon}</div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default HowItWorks;
  