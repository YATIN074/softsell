const ContactForm = () => (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 px-6 dark:text-white">
      <h3 className="text-3xl font-bold text-center mb-10">Get In Touch</h3>
      <form className="max-w-3xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input required placeholder="Your Name" className="p-3 rounded-md w-full bg-gray-100 dark:bg-gray-800" />
          <input required type="email" placeholder="Your Email" className="p-3 rounded-md w-full bg-gray-100 dark:bg-gray-800" />
        </div>
        <input required placeholder="Company" className="p-3 rounded-md w-full bg-gray-100 dark:bg-gray-800" />
        <select required className="p-3 rounded-md w-full bg-gray-100 dark:bg-gray-800">
          <option value="">Select License Type</option>
          <option value="office">Microsoft Office</option>
          <option value="adobe">Adobe Suite</option>
          <option value="cloud">Cloud Tools</option>
        </select>
        <textarea required placeholder="Your Message" rows="4" className="p-3 rounded-md w-full bg-gray-100 dark:bg-gray-800"></textarea>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </section>
  );
  
  export default ContactForm;
  