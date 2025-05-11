const testimonials = [
    {
      name: "Alice Johnson",
      role: "IT Manager",
      company: "TechNova Inc.",
      quote: "SoftSell made it incredibly easy to monetize our unused licenses. Smooth process!",
    },
    {
      name: "Raj Patel",
      role: "Procurement Head",
      company: "CloudWare",
      quote: "Fast payout and great customer service. Highly recommended!",
    },
  ];
  
  const Testimonials = () => (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 px-6">
      <h3 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map(({ name, role, company, quote }) => (
          <div key={name} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="italic text-gray-700 dark:text-gray-300 mb-4">“{quote}”</p>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{role} at {company}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Testimonials;
  