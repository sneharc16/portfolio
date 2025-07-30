
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, Calendar, Users, Heart, Building, ExternalLink, Play } from 'lucide-react';
import algoQueenLogo from '@/assets/algoqueen-logo.png';

const Activities = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const activities = [
    {
      title: "Research Intern",
      organization: "DESIDOC, DRDO",
      organizationLogo: "https://media.licdn.com/dms/image/v2/C510BAQHr5P1OHJ7ZUw/company-logo_200_200/company-logo_200_200/0/1630563928812/drdo_ministry_of_defence_govt_of_india_logo?e=1755129600&v=beta&t=zK1oGGjiNrbSGePOueWa-CFbpWm02Ex7S5IZLAZOmR8",
      date: "Jul 2024 - Present",
      icon: <Building className="w-6 h-6 text-bioluminescent" />,
      type: "Professional",
      impact: "Contributing to defense research and development projects",
      details: [
        "Working on cutting-edge research projects",
        "Applying AI/ML techniques to defense applications",
        "Collaborating with senior researchers and scientists",
        "Contributing to national security initiatives"
      ]
    },
    {
      title: "ML Research Intern",
      organization: "ML Research Lab, DTU",
      date: "Jan 2024 - Jun 2024",
      icon: <Building className="w-6 h-6 text-coral" />,
      type: "Professional",
      impact: "Contributed to machine learning research and publications",
      details: [
        "Conducted research in machine learning algorithms",
        "Worked on computer vision and deep learning projects",
        "Collaborated with PhD students and faculty",
        "Contributed to research papers and publications"
      ]
    },
    {
      title: "AI Club Research Lead",
      organization: "IGDTUW",
      organizationLogo: "https://scontent.fdel11-3.fna.fbcdn.net/v/t39.30808-6/307326004_470404495130397_6217631844392639071_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=namGb8Vm9YUQ7kNvwFn3t7C&_nc_oc=Adl8Ya6XFcwpwwIeA4HKl6-eckuEowvByflBrdHWCakFnMzMSusCdZ6j6hmgpOW0PvDUCMuI7t66lV_NsvXBOW79&_nc_zt=23&_nc_ht=scontent.fdel11-3.fna&_nc_gid=0V3tISwvlwZr9xiojfCJpA&oh=00_AfTfxA35r4HjtnZnS8nWr1yskab6XFUrvdeTzRwt7bUtNQ&oe=68783668",
      date: "Aug 2024 - Present",
      icon: <Users className="w-6 h-6 text-ocean-surface" />,
      type: "Leadership",
      impact: "Leading research initiatives and mentoring students in AI/ML",
      details: [
        "Conducting AI/ML workshops for college students",
        "Leading research projects and initiatives",
        "Mentoring freshmen in artificial intelligence concepts",
        "Organizing technical events and competitions"
      ]
    },
    {
      title: "ICPC Algo Queen 2025 Mentor",
      organization: "Sponsored by Jane Street",
      organizationLogo: algoQueenLogo,
      date: "Dec 2024 - Present",
      icon: <Users className="w-6 h-6 text-bioluminescent" />,
      type: "Mentorship",
      impact: "Mentoring competitive programming enthusiasts",
      details: [
        "Sponsored mentorship program by Jane Street",
        "Guiding students in competitive programming",
        "Conducting algorithm and data structure sessions",
        "Preparing students for ICPC competitions"
      ],
      sessions: [
        {
          title: "CP Platforms & Learning Resources",
          date: "Apr 28, 2025",
          link: "https://www.youtube.com/watch?v=nER7o2DG85o"
        },
        {
          title: "Road Map Ahead - What to do from here?",
          date: "May 21, 2025",
          link: null
        }
      ]
    },
    {
      title: "Lead, Finance & Research Team, Finance Society",
      organization: "Finivesta - Finance Society, IGDTUW",
      organizationLogo: "https://scontent.fdel11-3.fna.fbcdn.net/v/t39.30808-6/307326004_470404495130397_6217631844392639071_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=namGb8Vm9YUQ7kNvwFn3t7C&_nc_oc=Adl8Ya6XFcwpwwIeA4HKl6-eckuEowvByflBrdHWCakFnMzMSusCdZ6j6hmgpOW0PvDUCMuI7t66lV_NsvXBOW79&_nc_zt=23&_nc_ht=scontent.fdel11-3.fna&_nc_gid=0V3tISwvlwZr9xiojfCJpA&oh=00_AfTfxA35r4HjtnZnS8nWr1yskab6XFUrvdeTzRwt7bUtNQ&oe=68783668",
      date: "2024-25",
      icon: <Building className="w-6 h-6 text-coral" />,
      type: "Leadership",
      impact: "Led finance society with 300+ members, organized events and competitions",
      details: [
        "Finance and Research Head of Finivesta - The Finance and Economics Society of IGDTUW",
        "Contributed towards the success of Finance Club by curating relevant content for 300+ members",
        "Collaborated with team members to enhance finance knowledge",
        "Participated in competitions and secured wins",
        "Researched and curated content for social media",
        "Developed strategies boosting social media reach"
      ]
    },
    {
      title: "Lean In IGDTUW - Active Member",
      organization: "Lean In",
      organizationLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQEoZnrBTr3r6A/company-logo_200_200/company-logo_200_200/0/1693577613741/lean_in_igdtuw_logo?e=1755129600&v=beta&t=hSXHUfkSHNI9wNZ38tWZcvDVo45RyEEjfbYu5fEWpUQ",
      date: "2023 - Present",
      icon: <Users className="w-6 h-6 text-pink-400" />,
      type: "Community",
      impact: "Promoting women's empowerment and leadership development",
      details: [
        "Active participant in women empowerment initiatives",
        "Attended workshops on leadership and career development",
        "Engaged in community building activities",
        "Supported initiatives for gender equality in tech"
      ]
    }
  ];

  const handleToggle = (index: number) => {
    const element = document.getElementById(`activity-${index}`);
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
    <section id="activities" className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-white mb-4 sm:mb-6 animate-glow">
            Professional Experience & Leadership
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Professional experiences and leadership roles that shape my journey
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {activities.map((activity, index) => (
            <Card key={index} className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
              <div 
                id={`activity-${index}`}
                className="cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <CardHeader className="hover:bg-primary/5 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {activity.icon}
                        {activity.organizationLogo && (
                          <img 
                            src={activity.organizationLogo} 
                            alt={`${activity.organization} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                          {activity.title}
                        </CardTitle>
                        <p className="text-sm sm:text-base text-bioluminescent font-medium">{activity.organization}</p>
                        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {activity.date}
                          </span>
                          <span className="px-2 py-1 bg-primary/20 rounded-full text-xs">
                            {activity.type}
                          </span>
                        </div>
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
                        {activity.impact}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Key Highlights</h4>
                      <ul className="space-y-2">
                        {activity.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-200">
                            <span className="w-1.5 h-1.5 bg-bioluminescent rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activity.sessions && (
                      <div className="mt-6 pt-4 border-t border-border/30">
                        <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Recorded Sessions</h4>
                        <div className="space-y-3">
                          {activity.sessions.map((session, i) => (
                            <div key={i} className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h5 className="font-medium text-white text-sm">{session.title}</h5>
                                  <p className="text-xs text-gray-300 mt-1">{session.date}</p>
                                </div>
                                {session.link && (
                                  <Button variant="ghost" size="sm" asChild>
                                    <a 
                                      href={session.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-bioluminescent hover:text-white transition-colors"
                                    >
                                      <Play className="w-4 h-4" />
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <Card className="card-gradient border border-border/30 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="flex justify-center mb-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-glow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Passion for Impact
              </h3>
              <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 px-4">
                Committed to creating meaningful change through technology, research, and community engagement. 
                Always looking for opportunities to learn, grow, and contribute to society.
              </p>
              <Button variant="glass" asChild className="min-h-[44px]">
                <a href="mailto:sneharc.work@gmail.com">
                  <span className="text-white hover:text-bioluminescent transition-colors">
                    Let's Connect
                  </span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;
