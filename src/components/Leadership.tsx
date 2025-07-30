
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Calendar, Users, Building, Play, ExternalLink, Instagram, Twitter, Globe, Linkedin } from 'lucide-react';

const Leadership = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const leadershipRoles = [
    {
      title: "Lead, Research Team",
      organization: "AI Club IGDTUW",
      organizationLogo: "https://media.licdn.com/dms/image/v2/C4E0BAQEKEJqvOZQNuw/company-logo_200_200/company-logo_200_200/0/1630639327453?e=1755734400&v=beta&t=hTVt6er6yYIjEqQiYa4ad4WeYNyaXnc4rAMcVMzNtCI",
      date: "Aug 2024 - Present",
      icon: <Users className="w-6 h-6 text-ocean-surface" />,
      type: "Leadership",
      impact: "Leading research initiatives and mentoring students in AI/ML",
      details: [
        "Conducting AI/ML workshops for college students",
        "Leading research projects and initiatives",
        "Mentoring freshmen in artificial intelligence concepts",
        "Organizing technical events and competitions"
      ],
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/aiclubigdtuw/",
          icon: <Instagram className="w-4 h-4" />
        },
        {
          platform: "Twitter",
          url: "https://x.com/aiclubigdtuw",
          icon: <Twitter className="w-4 h-4" />
        }
      ]
    },
    {
      title: "ICPC Algo Queen 2025 Mentor",
      organization: "Sponsored by Jane Street",
      organizationLogo: "https://icpc.global/regionals/abouticpc/foundationlogo.png",
      date: "Apr 2025 - May 2025",
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
      ],
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/icpc_amrita_/",
          icon: <Instagram className="w-4 h-4" />
        },
        {
          platform: "Twitter",
          url: "https://x.com/Icpc_Amrita",
          icon: <Twitter className="w-4 h-4" />
        },
        {
          platform: "Website",
          url: "https://algoqueen.icpc.global",
          icon: <Globe className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Head Coordinator, Event Management Team",
      organization: "IEEE IGDTUW",
      organizationLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQNGx29wPD9IU9sz_lW7pQF8NiKUKF3auRA&s",
      date: "July 2024 - May 2025",
      icon: <Building className="w-6 h-6 text-blue-400" />,
      type: "Leadership",
      impact: "Led a team of 20+ to organise successful events",
      details: [
        "Led team of 20+ members in organizing technical events",
        "Coordinated with faculty and industry professionals",
        "Managed event logistics and resource allocation",
        "Promoted technical awareness among students"
      ],
      socialLinks: [
        {
          platform: "Website",
          url: "https://ieee-igdtuw.github.io/Wiempower-5.0/",
          icon: <Globe className="w-4 h-4" />
        },
        {
          platform: "Twitter",
          url: "https://x.com/ieeeigdtuw",
          icon: <Twitter className="w-4 h-4" />
        },
        {
          platform: "Instagram",
          url: "https://www.instagram.com/ieeeigdtuw/",
          icon: <Instagram className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Lead, Finance & Research Team",
      organization: "Finivesta - Finance Society, IGDTUW",
      organizationLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQH-QbL0mG9yMA/company-logo_200_200/company-logo_200_200/0/1690648361874/finivesta_igdtuw_logo?e=1755734400&v=beta&t=it1Jrl4p5dyC0X_d-svs0KnoRZn_mVm9sroWUV6Q7wQ",
      date: "July 2024 - June 2025",
      icon: <Building className="w-6 h-6 text-coral" />,
      type: "Leadership",
      impact: "Led team of 10+ to conduct weekly Money Masterclass sessions, organized 5+ events with 67% footfall increase",
      details: [
        "Finance and Research Head of Finivesta - The Finance and Economics Society of IGDTUW",
        "Led a team of 10+ to conduct weekly Money Masterclass sessions exclusively for 80+ members",
        "Increased financial awareness through structured educational programming",
        "Led Pitch Desk: Business Plan Competition during Finivesta's FinWeek as Lead Organiser",
        "Event hosted at IIITD with 6000+ impressions on Unstop platform",
        "Evaluated 300+ submissions and managed complete event lifecycle",
        "Organized 5+ events throughout tenure resulting in 67% increase in footfall",
        "Contributed towards the success of Finance Club by curating relevant content for 300+ members"
      ],
      sessions: [
        {
          title: "Money Masterclass Sessions",
          date: "Weekly Sessions",
          link: "https://www.finivesta.in/resources/moneymasterclass"
        },
        {
          title: "Pitch Desk: Business Plan Competition",
          date: "FinWeek 2024",
          link: "https://www.instagram.com/p/DFdGAt4Tak2/?img_index=1"
        },
        {
          title: "Pitch Desk Competition - Unstop",
          date: "FinWeek 2024",
          link: "https://unstop.com/competitions/pitch-desk-business-plan-competition-finivestas-finance-week-igdtuw-delhi-1377804"
        }
      ],
      socialLinks: [
        {
          platform: "Instagram",
          url: "https://www.instagram.com/finivesta_igdtuw/",
          icon: <Instagram className="w-4 h-4" />
        },
        {
          platform: "Twitter",
          url: "https://x.com/finivesta",
          icon: <Twitter className="w-4 h-4" />
        },
        {
          platform: "Website",
          url: "https://www.finivesta.in",
          icon: <Globe className="w-4 h-4" />
        }
      ]
    },
    {
      title: "ML Cohort Mentor, Lean In IGDTUW",
      organization: "Lean In",
      organizationLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQEoZnrBTr3r6A/company-logo_200_200/company-logo_200_200/0/1693577613741/lean_in_igdtuw_logo?e=1755129600&v=beta&t=hSXHUfkSHNI9wNZ38tWZcvDVo45RyEEjfbYu5fEWpUQ",
      date: "January 2025 - February 2025",
      icon: <Users className="w-6 h-6 text-pink-400" />,
      type: "Mentorship",
      impact: "Mentored 80+ students over 3 weeks through structured sessions, projects, designed coursework and evaluated performance",
      details: [
        "Mentored 80+ students in Machine Learning concepts over 3 weeks",
        "Designed structured coursework and learning materials",
        "Conducted hands-on project sessions and workshops",
        "Evaluated student performance and provided feedback",
        "Created comprehensive resources and documentation",
        "Promoted women's empowerment in tech through ML education"
      ],
      sessions: [
        {
          title: "ML Cohort Resources Document",
          date: "Jan-Feb 2025",
          link: "https://docs.google.com/document/d/15jyoEzEZG09COfP5UQLhUnFLnMbIj8e0ZL-oKWINi0Y/edit?pli=1&tab=t.0"
        }
      ],
      socialLinks: [
        {
          platform: "Website",
          url: "https://leanin.org/circles-network/lean-in--igdtuw",
          icon: <Globe className="w-4 h-4" />
        },
        {
          platform: "Instagram",
          url: "https://www.instagram.com/leanin.igdtuw/",
          icon: <Instagram className="w-4 h-4" />
        },
        {
          platform: "Twitter",
          url: "https://x.com/Lean_In_IGDTUW",
          icon: <Twitter className="w-4 h-4" />
        }
      ]
    }
  ];

  const handleToggle = (index: number) => {
    toggleExpanded(index);
  };

  return (
    <section id="leadership" className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-white mb-4 sm:mb-6 animate-glow">
            Leadership & Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Leadership roles and community involvement shaping my journey
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Leadership Roles</h3>

          <div className="space-y-4 sm:space-y-6">
            {leadershipRoles.map((role, index) => (
            <Card key={index} className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
              <div 
                id={`leadership-${index}`}
                className="cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <CardHeader className="hover:bg-primary/5 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {role.icon}
                        {role.organizationLogo && (
                          <img 
                            src={role.organizationLogo} 
                            alt={`${role.organization} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                          {role.title}
                        </CardTitle>
                        <p className="text-sm sm:text-base text-bioluminescent font-medium">{role.organization}</p>
                        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {role.date}
                          </span>
                          <span className="px-2 py-1 bg-primary/20 rounded-full text-xs">
                            {role.type}
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
                className={`overflow-hidden ${expandedItems.includes(index) ? 'block' : 'hidden'}`}
              >
                <CardContent className="pt-0">
                  <div className="border-t border-border/30 pt-4">
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2 text-sm sm:text-base">
                        Impact
                      </h4>
                      <p className="text-sm sm:text-base text-gray-200 bg-primary/10 p-3 rounded-lg">
                        {role.impact}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Key Highlights</h4>
                      <ul className="space-y-2">
                        {role.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-200">
                            <span className="w-1.5 h-1.5 bg-bioluminescent rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {role.socialLinks && (
                      <div className="mt-6 pt-4 border-t border-border/30">
                        <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Social Media & Links</h4>
                        <div className="flex flex-wrap gap-2">
                          {role.socialLinks.map((social, i) => (
                            <Button key={i} variant="outline" size="sm" asChild>
                              <a 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-bioluminescent hover:text-white transition-colors"
                              >
                                {social.icon}
                                <span className="ml-2">{social.platform}</span>
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {role.sessions && (
                      <div className="mt-6 pt-4 border-t border-border/30">
                        <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Resources & Sessions</h4>
                        <div className="space-y-3">
                          {role.sessions.map((session, i) => (
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
                                      {session.title.includes('Resources') ? <ExternalLink className="w-4 h-4" /> : <Play className="w-4 h-4" />}
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
        </div>

        {/* Volunteering Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Volunteering Activities</h3>
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: "Education Mentor",
                organization: "Government of Delhi",
                organizationLogo: "/src/assets/delhi-government-logo.png",
                date: "May 2024 - Jul 2024 · 3 mos",
                icon: <Users className="w-6 h-6 text-green-400" />,
                type: "Education",
                impact: "Guided students in STEM and SDG awareness campaigns",
                details: [
                  "Guided 4 students in STEM from classes 9-12 on academic matters, helped them realise their potential career options, and helped them make proper strategies for different entrance exams based on my own experiences.",
                  "Educated 5+ locals about various Sustainable Development Goals (SDGs) through campaigns as a part of the initiatives by Centre of Sustainable Development, IGDTUW and the Government of Delhi."
                ],
                socialLinks: [
                  {
                    platform: "Website",
                    url: "https://csd-igdtuw.github.io/website/index.html",
                    icon: <Globe className="w-4 h-4" />
                  },
                  {
                    platform: "Instagram",
                    url: "https://www.instagram.com/csd_igdtuw/",
                    icon: <Instagram className="w-4 h-4" />
                  },
                  {
                    platform: "Twitter",
                    url: "https://x.com/csd_igdtuw",
                    icon: <Twitter className="w-4 h-4" />
                  }
                ]
              },
              {
                title: "Media Manager and Content Team",
                organization: "Enactus",
                organizationLogo: "/src/assets/enactus-logo.jpg",
                date: "Nov 2023 - Apr 2024 · 6 mos",
                icon: <Building className="w-6 h-6 text-yellow-400" />,
                type: "Economic Empowerment",
                impact: "Drove 1000+ registrations and 25k+ impressions for flagship event",
                details: [
                  "Handled PR, content, and MoUs for the maiden version of Enactus IGDTUW's flagship Business Plan event under Project Greenbucks-driving 1000+ registrations and 25k+ impressions.",
                  "Participated in the online and offline charity events conducted by Enactus during the tenure."
                ],
                socialLinks: [
                  {
                    platform: "Instagram",
                    url: "https://www.instagram.com/igdtuw.en/",
                    icon: <Instagram className="w-4 h-4" />
                  },
                  {
                    platform: "Twitter",
                    url: "https://x.com/enactusigdtuw",
                    icon: <Twitter className="w-4 h-4" />
                  },
                  {
                    platform: "LinkedIn",
                    url: "https://www.linkedin.com/company/enactusigdtuw/",
                    icon: <Linkedin className="w-4 h-4" />
                  },
                  {
                    platform: "Young Barons Elevator Pitch - YBEP 2024",
                    url: "https://unstop.com/competitions/young-barons-elevator-pitch-ybep-2024-igdtuw-delhi-938948",
                    icon: <ExternalLink className="w-4 h-4" />
                  }
                ]
              }
            ].map((activity, index) => (
              <Card key={index} className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
                <div 
                  id={`volunteering-${index}`}
                  className="cursor-pointer"
                  onClick={() => handleToggle(index + 100)} // Offset to avoid conflicts with leadership indices
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
                          expandedItems.includes(index + 100) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CardHeader>
                </div>

                <div 
                  className={`overflow-hidden ${expandedItems.includes(index + 100) ? 'block' : 'hidden'}`}
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

                      {activity.socialLinks && (
                        <div className="mt-6 pt-4 border-t border-border/30">
                          <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Social Media & Links</h4>
                          <div className="flex flex-wrap gap-2">
                            {activity.socialLinks.map((social, i) => (
                              <Button key={i} variant="outline" size="sm" asChild>
                                <a 
                                  href={social.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-bioluminescent hover:text-white transition-colors"
                                >
                                  {social.icon}
                                  <span className="ml-2">{social.platform}</span>
                                </a>
                              </Button>
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
        </div>
      </div>
    </section>
  );
};

export default Leadership;
