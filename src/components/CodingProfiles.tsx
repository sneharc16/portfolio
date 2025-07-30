
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trophy, Target, Award } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "CodeChef",
      username: "sneharc16",
      rating: "1841",
      stars: "4⭐",
      rank: "220+ Problems Solved",
      achievements: [
        "Global Rank: 395 Starters 85 Division 2 (Rated)",
        "Global Rank: 15 Starters 82 Division 2 (Rated)", 
        "Global Rank: 17 Starters 64 Division 3 (Rated)"
      ],
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      link: "https://www.codechef.com/users/sneharc16",
      logo: "https://cdn.codechef.com/images/cc-logo.svg"
    },
    {
      platform: "LeetCode",
      username: "snehaarc",
      rating: "1413",
      stars: "",
      rank: "100+ Problems Solved",
      achievements: [
        "Jul LeetCoding Challenge earned",
        "Active for 50+ days"
      ],
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      link: "https://leetcode.com/u/snehaarc/",
      logo: "https://leetcode.com/static/images/LeetCode_logo_rvs.png"
    }
  ];

  return (
    <section id="coding-profiles" className="section-padding min-h-screen">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-white mb-4 sm:mb-6 animate-glow">
            Competitive Programming
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Showcasing programming excellence across multiple platforms
          </p>
        </div>

        {/* Coding Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <Card 
              key={index} 
              className="card-gradient border border-border/30 hover:border-primary/50 card-hover bioluminescent-shadow"
            >
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img 
                    src={profile.logo} 
                    alt={`${profile.platform} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white">
                    {profile.platform}
                  </CardTitle>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full ${profile.bgColor} mb-2`}>
                    <span className={`text-base sm:text-lg md:text-xl font-bold ${profile.color}`}>
                      Max. rating {profile.rating}
                    </span>
                    {profile.stars && (
                      <Badge variant="outline" className="text-xs sm:text-sm bg-background/50">
                        {profile.stars}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="text-center space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  @{profile.username}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-bioluminescent font-medium mb-4">
                  {profile.rank}
                </p>
                {profile.achievements && (
                  <div className="space-y-2">
                    {profile.achievements.map((achievement, i) => (
                      <p key={i} className="text-xs sm:text-sm text-gray-300">
                        {achievement}
                      </p>
                    ))}
                  </div>
                )}
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary hover:text-bioluminescent transition-colors mt-4 sm:mt-6 link-hover px-6 py-3 rounded-lg bg-background/20 hover:bg-background/40 min-h-[48px] no-select"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
