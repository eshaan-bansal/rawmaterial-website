
import React from 'react';
import { useContent } from '../hooks/useContent';

const AboutSection = () => {
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const aboutContent = content.about;

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            {aboutContent.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {aboutContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {aboutContent.founders.map((founder, index) => (
            <div key={founder.name} className="text-center">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                {founder.name}
              </h3>
              <a 
                href={`mailto:${founder.email}`} 
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label={`Email ${founder.name}`}
              >
                {founder.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
