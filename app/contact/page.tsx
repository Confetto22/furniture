import React from "react";

const Contact = () => {
  return (
    <section className=" bg-[#010101]">
      <section className="relative w-full min-h-[40vh] overflow-hidden">
        <div className="bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')] bg-cover bg-center w-full min-h-[60vh] ">
          <div className="content min-h-[60vh] bg-black/70 flex flex-col items-center justify-center w-full h-full">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-[var(--font-playfair)] mb-6 drop-shadow-lg">
              Contact Us
            </h1>

            {/* Breadcrumbs */}
            <div className="text-sm font-semibold md:text-base text-white/90 font-light tracking-wide">
              <span className="hover:text-white transition-colors cursor-pointer">
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="text-white/70">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-7 space-y-8">
        <div className="flex flex-col items-center justify-center max-w-2xl text-center gap-2 mx-auto">
          <h3 className="uppercase text-sm text-[#d97010]">Drop Us a Line</h3>
          <h2 className="text-3xl text-white">Round-the-clock Service</h2>
          <p className="text-white/70">
            Sed id semper risus in hendrerit gravida rutrum quisque. Vitae proin
            sagittis nisl Vel elit scelerisque mauris rhoncus mattis rhoncus
            urna.
          </p>
        </div>

        <form className="contact_form bg-[#101010] px-7 py-12 rounded-3xl grid grid-cols-2 gap-y-6 gap-x-6 max-w-4xl mx-auto">
          <input
            type="text"
            required
            placeholder="Name"
            className="col-span-2 md:col-span-1"
          />
          <input
            type="text"
            required
            placeholder="Phone Number"
            className="col-span-2  md:col-span-1"
          />
          <input
            type="text"
            required
            placeholder="Location"
            className="col-span-2"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            id="message"
            className="col-span-2"
          />

          <button className="bg-[#dd7210] mx-auto w-full uppercase font-semibold text-white col-span-2 max-w-[200px] px-3 py-4 rounded-4xl">
            submit
          </button>
        </form>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.089954925776!2d-0.23115302566045084!3d5.700142832184745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s6CQXPQ2C%2B3H3!5e0!3m2!1sen!2sgh!4v1765225817376!5m2!1sen!2sgh"
        className="w-full min-h-[70vh]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
