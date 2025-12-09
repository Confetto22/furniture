"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  initials: string;
  bio?: string;
  experience?: string;
  qualifications?: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Robert Frimpong Ofori",
    title: "Managing Director",
    initials: "RF",
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765272161/jcl/WhatsApp_Image_2025-12-09_at_08.56.57_2_dbocmj.jpg",
    bio: "Established and ran this business for the past 18 years, facing challenges that would have scared any faint-hearted away.",
    experience: "18+ years",
    qualifications:
      "Controls the International Order and Import section, including sourcing projects for the company.",
  },
  {
    name: "Gideon Ofori Korankye",
    title: "General Manager",
    initials: "GK",
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765272161/jcl/WhatsApp_Image_2025-12-09_at_08.56.56_i0pjds.jpg",
    bio: "Strategic Planning Executive of the setup, advising on modern equipment and products from outside likely to be on request on the Ghanaian market.",
    experience: "Long-term strategic planning",
    qualifications:
      "Has held this Strategic Planning position for a long time with valuable counsel on all range of goods and services.",
  },
  {
    name: "Anniversary Thomas Tehoda",
    title: "Administrator",
    initials: "AT",
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765272161/jcl/WhatsApp_Image_2025-12-09_at_08.56.57_rhmihp.jpg",
    bio: "Walk-in Administrator for the setup, has been in this position for the past 9 years.",
    experience: "9 years",
    qualifications:
      "Diploma in Business Studies (DBS), Certificate in Project Monitoring & Evaluation from GIMPA. Previously worked on World Bank Projects with Department of Urban Roads.",
  },
  {
    name: "Janice Omari Frimpong Ofori",
    title: "Directress",
    initials: "JO",
    image:
      "https://res.cloudinary.com/dxsom7jmx/image/upload/v1765272161/jcl/WhatsApp_Image_2025-12-09_at_08.56.57_1_jqocbd.jpg",
    bio: "Highly accomplished Civil Engineer responsible for Civil Works, Interior Décor, and Furniture Supply.",
    experience: "18+ years",
    qualifications:
      "Civil Engineer leading execution of interior finishing, space planning, décor installations, and tailored furniture solutions for residential, commercial, and institutional projects.",
  },
];

export default function SpecialTeam() {
  return (
    <section className="bg-brand-dark-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
            COMFORT CRAFTERS
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Special Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-brand-dark rounded-lg overflow-hidden hover:border-brand-gold/40 transition-all border border-brand-white/10 shadow-md hover:shadow-lg"
            >
              {/* Member Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-brand-dark-light">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top hover:scale-110 transition-transform duration-500"
                    priority={index < 2}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-brand-gold/20">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-gold flex items-center justify-center shadow-lg">
                      <span className="text-brand-dark text-4xl md:text-5xl font-bold">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Member Info */}
              <div className="p-6 text-center bg-brand-dark">
                <h3 className="text-xl md:text-2xl font-semibold text-brand-white mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-gold text-sm md:text-base font-medium mb-3">
                  {member.title}
                </p>
                {member.experience && (
                  <p className="text-brand-white/60 text-xs mb-2">
                    {member.experience} Experience
                  </p>
                )}
                {member.bio && (
                  <p className="text-brand-white/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
