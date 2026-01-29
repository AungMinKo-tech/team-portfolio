import React from "react";
import Header from "../components/contact/Header";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#f2f2f2] pb-20">
      <Header />
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
