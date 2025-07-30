import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, Calendar, Building } from 'lucide-react';
import dtuMlLabLogo from '@/assets/dtu-ml-lab-logo.jpg';

const ProfessionalExperience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      title: "Research Intern",
      organization: "DESIDOC Lab, Defence Research & Development Organisation (DRDO)",
      organizationLogo: "https://media.licdn.com/dms/image/v2/C510BAQHr5P1OHJ7ZUw/company-logo_200_200/company-logo_200_200/0/1630563928812/drdo_ministry_of_defence_govt_of_india_logo?e=1755129600&v=beta&t=zK1oGGjiNrbSGePOueWa-CFbpWm02Ex7S5IZLAZOmR8",
      date: "Jan 2025 - Jul 2025",
      location: "Near Netcalfe House, Delhi",
      supervisor: "Dr. Mohd Yousuf Ansari, Scientist 'F', DRDO",
      icon: <Building className="w-6 h-6 text-bioluminescent" />,
      impact: "Implemented an image compression pipeline using unsupervised learning, feature engineering, and adaptive quantization to process high-dimensional visual data",
      details: [
        "Implemented an image compression pipeline using unsupervised learning, feature engineering, and adaptive quantization to process high-dimensional visual data",
        "Achieved up to 65% storage reduction, evaluated using PSNR, SSIM, and other perceptual quality benchmarks",
        "Worked under Dr. Mohd Yousuf Ansari, Scientist 'F', DRDO",
        "Contributing to national defense research initiatives"
      ]
    },
    {
      title: "ML Research Intern",
      organization: "ML Research Lab, Delhi Technological University, Delhi",
      organizationLogo: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
      date: "May 2024 - Jul 2024",
      location: "Rohini, New Delhi",
      supervisor: "Prof. Anil Singh Parihar, CSE Department, DTU",
      icon: <Building className="w-6 h-6 text-coral" />,
      impact: "Received foundational training in Machine Learning, Deep Learning, NLP, and Generative AI with the CSE Department, DTU",
      details: [
        "Received foundational training in Machine Learning, Deep Learning, NLP, and Generative AI with the CSE Department, DTU",
        "Worked on individual and group projects applying these concepts, and was further selected to contribute to a computer vision project focused on optimizing object detection under varying lighting conditions using TensorFlow, Keras, OpenCV, and deep learning techniques",
        "Worked under Prof. Anil Singh Parihar, CSE Department, DTU",
        "Collaborated with faculty and research scholars on cutting-edge ML projects"
      ]
    }
  ];

  const handleToggle = (index: number) => {
    const element = document.getElementById(`experience-${index}`);
    const content = element?.nextElementSibling as HTMLElement;
    
    if (content) {
      if (expandedItems.includes(index)) {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        setTimeout(() => {
          content.style.display = 'none';
        }, 300);
      } else {
        content.style.display = 'block';
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
      }
    }
    
    toggleExpanded(index);
  };

  return (
    <section id="professional-experience" className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-white mb-4 sm:mb-6 animate-glow">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Professional experiences that have shaped my technical expertise
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
              <div 
                id={`experience-${index}`}
                className="cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <CardHeader className="hover:bg-primary/5 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {experience.icon}
                        {experience.organizationLogo && (
                          <img 
                            src={experience.organizationLogo} 
                            alt={`${experience.organization} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                          {experience.title}
                        </CardTitle>
                        <p className="text-sm sm:text-base text-bioluminescent font-medium">{experience.organization}</p>
                        <div className="flex flex-col gap-1 text-xs sm:text-sm text-gray-300 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {experience.date}
                          </span>
                        </div>
                        <div className="flex flex-col items-end text-xs sm:text-sm text-gray-400">
                          {experience.location && (
                            <span>{experience.location}</span>
                          )}
                        </div>
                        {experience.supervisor && (
                          <div className="text-xs sm:text-sm text-gray-400 mt-1 text-left">
                            <span className="font-medium">Supervisor:</span> {index === 0 ? 'Worked under the guidance of Dr. Mohd Yousuf Ansari, Scientist \'F\', DRDO' : 'Worked under the guidance of Prof. Anil Singh Parihar, CSE Department, DTU'}
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        expandedItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CardHeader>
              </div>

              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: expandedItems.includes(index) ? '1000px' : '0px',
                  opacity: expandedItems.includes(index) ? 1 : 0,
                  display: expandedItems.includes(index) ? 'block' : 'none'
                }}
              >
                <CardContent className="pt-0">
                  <div className="border-t border-border/30 pt-4">
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                        Impact
                      </h4>
                      <p className="text-sm sm:text-base text-gray-200 bg-primary/10 p-3 rounded-lg">
                        {experience.impact}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Key Highlights</h4>
                      <ul className="space-y-2">
                        {experience.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-200">
                            <span className="w-1.5 h-1.5 bg-bioluminescent rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
