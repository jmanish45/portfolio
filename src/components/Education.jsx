import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Building a strong foundation in artificial intelligence, data science, and computer science fundamentals.
          </p>
        </div>

        <div data-aos="fade-up" className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#ff2a2a]/70 via-gray-200 to-[#ff2a2a]/30 mb-6">
          <div className="rounded-3xl bg-[#f8f8f8] p-7 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[#ff2a2a] text-xs font-black tracking-widest uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#ff2a2a]" />
                  {education.duration}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">
                  {education.degree}
                </h3>
                <p className="text-gray-600 font-bold text-base md:text-lg">{education.institution}</p>
                <p className="text-gray-500 text-sm mt-1">{education.location}</p>
              </div>
              <div className="shrink-0 bg-[#ff2a2a] text-white rounded-2xl px-6 py-5 text-center shadow-[0_12px_30px_rgba(255,42,42,0.25)]">
                <span className="block text-[10px] font-black tracking-widest uppercase text-red-100 mb-1">CGPA</span>
                <span className="block text-2xl font-black">{education.cgpa}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.schools.map((school, index) => (
            <div
              key={school.qualification}
              data-aos="fade-up"
              data-aos-delay={String((index + 1) * 100)}
              className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-7 hover:scale-[1.02] hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_45px_rgba(255,42,42,0.08)] transition-all duration-500"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="text-gray-400 text-xs font-mono font-bold tracking-widest uppercase">
                  {school.yearLabel}
                </span>
                <span className="bg-white text-[#ff2a2a] border border-red-100 rounded-full px-3 py-1 text-xs font-black">{school.result}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight mb-2">{school.qualification}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{school.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
