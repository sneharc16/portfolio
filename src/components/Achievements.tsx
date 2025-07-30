import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Code, TrendingUp, ExternalLink, Award, Linkedin } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import OptimizedImage from '@/components/OptimizedImage';
import { useIsMobile } from '@/hooks/use-mobile';
import sihAchievementImage from '@/assets/sih-achievement.jpg';
import worldquantLogo from '@/assets/worldquant-logo.jpg';
import iqcLogo from '@/assets/iqc-logo.jpg';
import iqcAchievement from '@/assets/iqc-achievement.jpg';
import swarnimaEnglishEditor from '@/assets/swarnima-english-editor.jpg';
import swarnimaMagazine from '@/assets/swarnima-magazine.jpg';

const Achievements = () => {
  const isMobile = useIsMobile();
  
  const techAchievements = [
    {
      category: "Competitive Programming & Hackathons",
      icon: Code,
      color: "text-bioluminescent",
      items: [
        {
          title: "Regionalist, International Quant Championship 2025 and Gold Researcher, WorldQuant BRAIN",
          organization: "International Quant Championship 2025, WorldQuant LLC",
          description: "Developed 11 quantitative alphas as part of the International Quant Championship 2025, leveraging mathematical modeling, statistical analysis, and factor-based alpha generation techniques. Trained and backtested alphas across multiple market scenarios using custom simulation environments. Ranked in the Top 0.1% (peak) out of 1,00,000+ teams worldwide, competing against top quants from premier institutions globally. Qualified for Stage 2, National/Regional Round.",
          date: "Apr 2025",
          impact: "Elite recognition in premier quantitative finance competition with global participation",
          logo: worldquantLogo,
          image: iqcAchievement,
          officialLink: "https://platform.worldquantbrain.com/profile/public/SR90855",
          officialLinkText: "Profile",
          tags: ["Tech", "Finance"]
        },
        {
          title: "Finalist, ICPC Algo Queen World Finale 2025",
          description: "International Rank-243 (College Category) out of 6000+ registrations worldwide in the ICPC Algo Queen 2025, held on July 5, 2025. Hosted on CodeChef, the contest was organised by the ICPC Foundation and Amrita University, Amritapuri, and sponsored by Jane Street.",
          date: "Jul 2025",
          impact: "Global recognition in premier women's competitive programming championship",
          logo: "https://icpc.global/regionals/abouticpc/foundationlogo.png",
          image: "https://media.licdn.com/dms/image/v2/D5622AQHkrngPJTleAQ/feedshare-shrink_1280/B56ZQS0.7CG4Ak-/0/1735482678084?e=1755734400&v=beta&t=seFXsKBcgviBq4T0CQsUwdG0H5LvXomb5UlVHubnCjw",
          officialLink: "https://www.codechef.com/rankings/LTIME132C?order=asc&search=shravyaaa&sortBy=rank",
          officialLinkText: "Final Rankings",
          tags: ["Tech"]
        },
        {
          title: "Smart India Hackathon 2024 - Grand Finale Winner",
          description: "Led team of 5+ members, selected from 4,92,000+ students and 88,000+ teams. Won cash prize of Rs. 1,00,000/- with PM Modi as patron.",
          date: "Dec 2024",
          impact: "National recognition from Ministry of Education and AICTE for innovative AI fitness solution",
          image: sihAchievementImage,
          logo: "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?w=327&ssl=1",
          linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7273692309383270400/",
          officialLink: "https://www.sih.gov.in/sih2024/sih2024-grand-finale-result",
          tags: ["Tech", "Finance"]
        },
        {
          title: "Regionalist and Honorable Mention, ICPC Asia West Amritapuri Multisite Regionals 2024",
          description: "College Rank-1, All-India Girls Teams Rank-4, All-India Rank-355 out of 3000+ teams and 9000+ participants in the ICPC India Preliminary Contest 2025. Represented university at ICPC Amritapuri On-site Regionals at Amrita University, Amritapuri.",
          date: "Dec 2024",
          impact: "Elite recognition in premier competitive programming contest, representing university at national level",
          image: "https://media.licdn.com/dms/image/v2/D5622AQHwWA4NS7GZmw/feedshare-shrink_1280/B56ZQS0.7sH0Ak-/0/1735482678308?e=1755734400&v=beta&t=-iCTPbSZoR-WE_LFioLPaqzl9cLhn4v65qHnEAgSCJc",
          logo: "https://icpc.global/regionals/abouticpc/foundationlogo.png",
          linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7279141960039211008/",
          officialLink: "https://icpc.global/ICPCID/VVLM9XS846UN",
          tags: ["Tech"]
        },
        {
          title: "NSE TalentSprint Women Engineers Program Finalist (Google-supported)",
          description: "Top 500 out of 30,000+ first-year female engineering undergraduates nationally. Received IQ Marvel certificate for perfect score.",
          date: "Feb 2024",
          impact: "Top 1.6% nationally in technical and aptitude assessments",
          logo: "https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png",
          image: "https://citytoday.media/wp-content/uploads/2024/01/img-20240114-wa00177e28178029303991857064.jpg",
          tags: ["Tech"]
        },
        {
          title: "National Finalist - Productathon AI-Hackathon, IIT Roorkee",
          description: "Selected for finals out of 500+ teams at E-Summit'24, IIT Roorkee.",
          date: "Feb 2024",
          impact: "Recognition for innovative AI product development",
          logo: "https://csrbox.org/organization/org_logo/1589548075Logo%20-%20Copy.jpg",
          image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/iit_toorkee_campus-three_four.jpg?VersionId=plEePeLvYO2TPflAjx09_BsXaccpOsU7",
          tags: ["Tech"]
        }
      ]
    }
  ];

  const nonTechAchievements = [
    {
      category: "Business & Entrepreneurship",
      icon: TrendingUp,
      color: "text-ocean-surface",
      items: [
        {
          title: "National Winner - B-Plan Competition, BECon'25, eDC IIT Delhi",
          description: "Secured 1st place out of 1,500+ participants. Won prizes worth ₹15,000/- and featured on IITD website.",
          date: "Feb 2025",
          impact: "Grand winner at IIT Delhi's premier entrepreneurship competition",
          image: "https://media.licdn.com/dms/image/v2/D5622AQE3Dz47HJo-2A/feedshare-shrink_800/B56ZTIFpHOGoAo-/0/1738523717037?e=1755734400&v=beta&t=Wd3mq1ZpvorWGUeVaDkwWwJqSZDycV6S6fwqsERCUCk",
          logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
          linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7291897019973914625/",
          officialLink: "https://home.iitd.ac.in/show.php?id=626&in_sections=News",
          tags: ["Business", "Finance"]
        },
        {
          title: "National Finalists - Innerve B-Plan Competition, SRCC",
          description: "Top 10 teams out of 1000+ teams to pitch startup model at national finale.",
          date: "Mar 2025",
          impact: "Elite recognition at Delhi University's flagship business competition",
          logo: "https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/306146217_624253399487890_7450714549399516515_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lPbKTetC-csQ7kNvwGWMjkk&_nc_oc=AdkTJJ6WWUyBqo1ir_GM2czXU3FNMQT-LpYlnZH9kN5r0BZLbqszHE4Tdsat6SUz3k-O_0r65Pgx65XmZu4qo9Zg&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=3CD_8pURwlQZAjuDocM5VQ&oh=00_AfTi8f1d_NR7qOaz6_JgLoD3-2CwNZiI_rJ4n5T3IZI19w&oe=687D8B14",
          image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/srcc-1_647_011917065929.jpg?size=690:388",
          tags: ["Business"]
        },
        {
          title: "National Finalists - Karobaar, IIT Kanpur",
          description: "Top 10 teams nationwide out of 300+ teams to qualify for grand finale and pitch to IIT Kanpur incubation cell.",
          date: "Mar 2025",
          impact: "Recognition from premier technical institute's entrepreneurship ecosystem",
          logo: "https://banner2.cleanpng.com/20180528/rac/kisspng-master-of-business-administration-mba-iit-kanpu-indian-national-wind-5b0c4eafa33978.1677498615275332316686.jpg",
          image: "https://www.iitk.ac.in/oir/images/cards/Hall9.jpg",
          tags: ["Business"]
        },
        {
          title: "National Second Runners-Up - E-Summit, DTU (Master's Union sponsored)",
          description: "Secured 2nd runners-up position, won cash prize of ₹10,000/- out of 1,500+ participants.",
          date: "Jan 2025",
          impact: "Consistent excellence in business plan competitions across institutions",
          image: "https://media.licdn.com/dms/image/v2/D5622AQEpI_SOyHMk4w/feedshare-shrink_800/B56ZTIFpHnGQAg-/0/1738523716439?e=1755734400&v=beta&t=avdXmBF9UaqjziSeNtANOQzccqkcj2g5x4acDOxztoY",
          logo: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
          linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7291897019973914625/",
          tags: ["Business", "Finance"]
        },
        {
          title: "National Rank 4 - Avant Garde B-Plan Competition, IIM Indore",
          description: "Judge's Score: 47.91/50 (Rank 2/20), Overall Score: 80.60/100 (Rank 4/1500+).",
          date: "Nov 2024",
          impact: "Top performance at premier business school's flagship competition",
          image: "https://media.licdn.com/dms/image/v2/D5622AQHxqCkWLC-8yg/feedshare-shrink_800/B56ZSctzvIHEAg-/0/1737796049138?e=1755734400&v=beta&t=E4Mw2FRweMHauFWt4yrgiffzyLhhuEBWSTtCR_TEdic",
          logo: "https://scontent.fdel3-5.fna.fbcdn.net/v/t39.30808-6/310276973_5657150827669391_9179227690880998100_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4W_-27OhaXsQ7kNvwEelZsd&_nc_oc=AdmOW23v2LmprvBJLSzovHo7U5a4Xpp0WPBLcbdUbH3uzXt08cAYBIiei2JcSJZRWRmXhcDDj9wQl6z8Ic34FhXy&_nc_zt=23&_nc_ht=scontent.fdel3-5.fna&_nc_gid=1QWgP9rFNT9B6J9Fnr1m6w&oh=00_AfS4n-u5J0eLamY41z2bKHhFPnaCUM9uYONR1zZrjOS2EA&oe=687D9770",
          linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7288844980847067136/",
          tags: ["Business"]
        },
        {
          title: "National Second Runners-Up - IIM Bangalore Ideathon, Eximus 2024",
          description: "Top 10 finalists out of 2.5k+ participants. Won opportunity for incubation at NSRCEL worth Rs. 1,00,000/-.",
          date: "Jul 2024",
          impact: "Recognition and incubation opportunity at India's top business school",
          image: "https://media.licdn.com/dms/image/v2/D5622AQEqmfFX-BpGrQ/feedshare-shrink_800/feedshare-shrink_800/0/1720441719503?e=1755734400&v=beta&t=Uort5i66v8eQ6mQOwNheTc7vu2n5hxroh4FEjpBvV_Q",
          logo: "https://static.toiimg.com/thumb/msid-66179347,imgsize-82760,width-400,resizemode-4/66179347.jpg",
          linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7216055651997732864/",
          tags: ["Business", "Finance"]
        }
      ]
    },
    {
      category: "Academic Excellence & Scholarships",
      icon: Award,
      color: "text-coral",
      items: [
        {
          title: "IAFBA Subroto Memorial Scholarship for Academic Excellence",
          description: "Prestigious scholarship worth ~$1000 from Indian Air Force Benevolent Association for academic excellence.",
          date: "Dec 2023",
          impact: "Recognition of outstanding academic performance by the Indian Air Force",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Badge_of_the_Indian_Air_Force.png",
          image: "https://webapi.entab.info/api/image/AFGJI/public/Images/slide-13.jpg",
          tags: ["Scholarship"]
        },
        {
          title: "English Editor, Swarnima, Annual School Magazine, Air Force Golden Jubilee Institute",
          description: "English Editor of Swarnima during the academic session of 2021-22, part of the Editorial board and contributed towards the Editorial column. My writing piece and illustration was featured in the magazine as well.",
          date: "2021-2022",
          impact: "Leadership role in school publication and creative contribution to magazine content",
          logo: "https://pbs.twimg.com/profile_images/1915606206560743424/qZVB-Mcc_400x400.jpg",
          image: swarnimaMagazine,
          // Debug: checking if swarnimaMagazine is loaded
          onImageLoad: () => console.log('Swarnima magazine image loaded successfully'),
          onImageError: () => console.log('Swarnima magazine image failed to load', swarnimaMagazine),
          officialLink: "https://anyflip.com/scgmq/tfuo/",
          publicationDetails: [
            {
              title: "Wall School Journal - Air Force Golden Jubilee Institute (2021)",
              description: "Some of my articles and poems were published in The WSJ's 2021 version, an e-zine by and of the 11th graders of Air Force Golden Jubilee Institute, Subroto Park, New Delhi.",
              link: "https://anyflip.com/dehos/kznk"
            },
            {
              title: "Wall School Journal - Air Force Golden Jubilee Institute (2022)",
              description: "My article, 'One Day... I'll Reminisce my Uncertainties' was published in The WSJ's 2022 edition, an e-zine published of and by the 11th graders of Air Force Golden Jubilee Institute, Subroto Park, New Delhi.",
              link: "https://anyflip.com/scgmq/qqnb/"
            }
          ],
          tags: ["Non-Tech"]
        }
      ]
    }
  ];

  const stats = [
    { 
      label: "Total Competitions Won", 
      value: "20", 
      displayValue: "20+",
      icon: Trophy,
      isCounter: true
    },
    { 
      label: "CodeChef Rating", 
      value: "1841", 
      icon: Code,
      isCounter: true
    },
    {
      label: "Prize Money Won",
      value: "200000",
      displayValue: "₹2L+",
      icon: TrendingUp,
      isCounter: true
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Tech': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Non-Tech': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Scholarship': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Finance': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Business': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="achievements" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-transparent bg-clip-text wave-gradient mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A comprehensive showcase of excellence across technical competitions, business ventures,
            international programs, and social impact initiatives.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-gradient border-border/30 ocean-shadow text-center">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-bioluminescent mb-1">
                  {isMobile ? (
                    stat.displayValue || stat.value
                  ) : (
                    <AnimatedCounter
                      endValue={stat.value}
                      displayValue={stat.displayValue}
                      className="inline"
                    />
                  )}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Achievements */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bioluminescent-gradient mb-2">
              Technical Excellence
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">Competitive Programming • Hackathons • Research • AI/ML</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {techAchievements.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${category.color}`} />
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                    {category.category}
                  </h4>
                </div>

                <div className="grid gap-4 sm:gap-6">
                  {category.items.map((achievement, index) => (
                    <Card key={index} className={`card-gradient border-border/30 deep-shadow ${!isMobile ? 'glow-transition hover:scale-[1.005]' : ''}`}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {achievement.logo && (
                                <img
                                  src={achievement.logo}
                                  alt={`${achievement.title} logo`}
                                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded"
                                />
                              )}
                              <CardTitle className="text-lg sm:text-xl text-foreground">
                                {achievement.title}
                              </CardTitle>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {achievement.tags?.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className={`text-xs ${getTagColor(tag)}`}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
                              {achievement.description}
                            </p>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-2">
                              {achievement.linkedinPost && (
                                <Button variant="outline" size="sm" asChild>
                                  <a
                                    href={achievement.linkedinPost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs"
                                  >
                                    {achievement.title.includes('English Editor') ? (
                                      <>
                                        <ExternalLink className="w-3 h-3 mr-1" />
                                        Publication Link
                                      </>
                                    ) : (
                                      <>
                                        <Linkedin className="w-3 h-3 mr-1" />
                                        LinkedIn Post
                                      </>
                                    )}
                                  </a>
                                </Button>
                              )}
                              {achievement.officialLink && (
                                <Button variant="outline" size="sm" asChild>
                                  <a
                                    href={achievement.officialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs"
                                  >
                                     <ExternalLink className="w-3 h-3 mr-1" />
                                     {achievement.officialLinkText || (achievement.title.includes('ICPC Algo Queen') ? 'Final Rankings' : 'Official Results')}
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-3">
                            <Badge variant="outline" className="self-start bg-background/50 text-xs sm:text-sm">
                              {achievement.date}
                            </Badge>
                            {achievement.image && (
                              <OptimizedImage
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg border border-border/30"
                              />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="border-l-2 border-primary/30 pl-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1">Impact</h4>
                          <p className="text-xs sm:text-sm text-foreground/70">
                            {achievement.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Technical Achievements */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text wave-gradient mb-2">
              Leadership & Impact
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">Business • Entrepreneurship • Academic Excellence</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {nonTechAchievements.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${category.color}`} />
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                    {category.category}
                  </h4>
                </div>

                <div className="grid gap-4 sm:gap-6">
                  {category.items.map((achievement, index) => (
                    <Card key={index} className={`card-gradient border-border/30 deep-shadow ${!isMobile ? 'glow-transition hover:scale-[1.005]' : ''}`}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {achievement.logo && (
                                <img
                                  src={achievement.logo}
                                  alt={`${achievement.title} logo`}
                                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded"
                                />
                              )}
                              <CardTitle className="text-lg sm:text-xl text-foreground">
                                {achievement.title}
                              </CardTitle>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {achievement.tags?.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className={`text-xs ${getTagColor(tag)}`}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
                              {achievement.description}
                            </p>

                            {/* Action buttons */}
                            {(achievement.linkedinPost || achievement.officialLink) && (
                              <div className="flex flex-wrap gap-2">
                                {achievement.linkedinPost && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a
                                      href={achievement.linkedinPost}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs"
                                    >
                                      {achievement.title.includes('English Editor') ? (
                                        <>
                                          <ExternalLink className="w-3 h-3 mr-1" />
                                          Publication Link
                                        </>
                                      ) : (
                                        <>
                                          <Linkedin className="w-3 h-3 mr-1" />
                                          LinkedIn Post
                                        </>
                                      )}
                                    </a>
                                  </Button>
                                )}
                                {achievement.officialLink && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a
                                      href={achievement.officialLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs"
                                    >
                                      <ExternalLink className="w-3 h-3 mr-1" />
                                      Official Link
                                    </a>
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col items-end gap-3">
                            <Badge variant="outline" className="self-start bg-background/50 text-xs sm:text-sm">
                              {achievement.date}
                            </Badge>
                            {achievement.image && (
                              <OptimizedImage
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg border border-border/30"
                                onLoad={achievement.onImageLoad}
                                onError={achievement.onImageError}
                              />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="border-l-2 border-primary/30 pl-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1">Impact</h4>
                          <p className="text-xs sm:text-sm text-foreground/70">
                            {achievement.impact}
                          </p>
                        </div>

                        {/* Publication Details for English Editor */}
                        {achievement.publicationDetails && (
                          <div className="mt-4 pt-4 border-t border-border/30">
                            <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2">Publication Details</h4>
                            <div className="space-y-2">
                              {achievement.publicationDetails.map((pub, pubIndex) => (
                                <div key={pubIndex} className="bg-primary/5 p-3 rounded-lg">
                                  <h5 className="font-medium text-foreground text-xs sm:text-sm">{pub.title}</h5>
                                  <p className="text-xs text-foreground/70 mt-1">{pub.description}</p>
                                  <Button variant="ghost" size="sm" asChild className="mt-2 h-auto p-1">
                                    <a
                                      href={pub.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-bioluminescent hover:text-white transition-colors text-xs"
                                    >
                                      <ExternalLink className="w-3 h-3 mr-1" />
                                      View Publication
                                    </a>
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;