import ThemeToggle from "./Themetoggle";

const Landingpage = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Servixo</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#about" className="hover:text-blue-500">About Us</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <a href="#track" className="hover:text-blue-500">Track Status</a>
            <ThemeToggle />
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login / Register
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 dark:bg-gray-800 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Your One-Stop Solution for Mini Online  Services</h2>
        <p className="text-lg mb-6">From PAN & Aadhaar to Passport Services – Servixo makes it simple, secure, and fast.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Explore Services</button>
          <button className="bg-white dark:bg-gray-700 dark:text-white text-blue-600 border border-blue-600 px-6 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-600">Track My Application</button>
        </div> 
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Passport Services", desc: "Assistance with new and renewal of passports." },
              { title: "Aadhaar Services", desc: "Update and correction support for Aadhaar details." },
              { title: "PAN Card", desc: "Apply for a new PAN or make corrections." },
              { title: "Voter ID Help", desc: "Assistance with registration and updates." },
              { title: "Driving License", desc: "New applications and renewals made easy." },
              { title: "Utility Bill Payments", desc: "Pay your bills quickly and securely." },
            ].map((service, index) => (
              <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Choose a Service", "Submit Documents", "Get Updates & Delivery"].map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <div className="text-4xl text-blue-600 font-bold mb-4">{index + 1}</div>
                <p className="text-gray-700 dark:text-gray-200 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-4">About Servixo</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Servixo is a local mini service provider offering trusted and fast solutions for government-related services.
            With a commitment to customer satisfaction and years of experience, we ensure a smooth process for all your
            needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-6">Get in Touch</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700 dark:text-white" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700 dark:text-white" />
            <textarea placeholder="Your Message"  className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-700 dark:text-white"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2025 Servixo. All rights reserved.
      </footer>
    </div>
  );
};

export default Landingpage;
