const features = [
    {
      title: "Fast Payouts",
      description: "Get paid within 24 hours of license approval.",
      icon: "⚡",
    },
    {
      title: "Secure Transactions",
      description: "End-to-end encryption and privacy guaranteed.",
      icon: "🔒",
    },
    {
      title: "Expert Support",
      description: "Our team guides you every step of the way.",
      icon: "🧑‍💼",
    },
  ];
  
  const WhyChooseUs = () => (
    <section className="py-16 px-6 text-center bg-white dark:bg-gray-900">
      <h3 className="text-3xl font-bold mb-10">Why Choose Us</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map(({ title, description, icon }) => (
          <div key={title} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">{icon}</div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default WhyChooseUs;
  