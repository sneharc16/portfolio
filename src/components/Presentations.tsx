import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Video, FileText, HardDrive, Award } from 'lucide-react';
import samsungLogo from '@/assets/samsung-logo.png';
import iitMadrasLogo from '@/assets/iit-madras-logo.svg';
import myntraLogo from '@/assets/myntra-logo.png';
import eyLogo from '@/assets/ey-logo.png';
import iimBangaloreLogo from '@/assets/iim-bangalore-logo.jpg';
import dtuLogo from '@/assets/dtu-logo-presentations.png';

const Presentations = () => {
  const presentations = [
    {
      id: 1,
      title: "🧠 Neuro Setu - AI Cognitive Care Ecosystem",
      category: "Technology",
      event: "Samsung Solve for Tomorrow (June 2025)",
      description: "NeuroSetu is a mobile-first, AI-powered cognitive care ecosystem designed to support neurodivergent and elderly users. It bridges the gap between vulnerable users and critical support — even without constant internet or high-end devices.",
      logo: samsungLogo,
      links: [
        { type: "presentation", url: "https://drive.google.com/file/d/1xn8nBYoO6CFBLgpe7N5HTzaFVec1j6UD/view?usp=share_link", icon: FileText },
        { type: "demo", url: "https://www.loom.com/share/14385ea28ae549a499e4d56108f2a431", icon: Video },
        { type: "hardware", url: "https://drive.google.com/drive/folders/1ofwRXzMwxJaUMJnpsXHwwlfcwGTb_Ev8", icon: HardDrive }
      ]
    },
    {
      id: 2,
      title: "🎬 IIT Madras Product Design Competition",
      category: "Product",
      event: "June 2024",
      description: "Conceptualise and design a comprehensive mobile movie-ticketing product end-to-end.",
      logo: iitMadrasLogo,
      links: [
        { type: "presentation", url: "https://drive.google.com/file/d/1hemadiLuM493oH17XNyv6IDVcVjQP4T3/view?usp=share_link", icon: FileText }
      ]
    },
    {
      id: 3,
      title: "👗 MyntraHackerRamp WeForShe",
      category: "Product & Tech",
      event: "June 2024",
      description: "Social Shopping Integration: Integrate social media functionalities and user-generated content, such as influencer collaborations, customer reviews, and shoppable posts, to create an interactive and immersive shopping experience that resonates with fast fashion enthusiasts.",
      logo: myntraLogo,
      links: [
        { type: "presentation", url: "https://drive.google.com/file/d/15IGynO4ie8lkHgMdPbIuvDFtuhdx2Dwl/view?usp=share_link", icon: FileText }
      ]
    },
    {
      id: 4,
      title: "🤖 EY Techathon - AI for BPO Enhancement",
      category: "Tech",
      event: "January 2025 - Semi-Finalist (40k+ participants)",
      description: "Solution for BPO/BPM - AI for workflow and efficiency enhancement in Indian BPOs. Reached semi-finale out of 40k+ participants all over India.",
      logo: eyLogo,
      links: [
        { type: "presentation", url: "https://drive.google.com/file/d/1NWZte8cSHyIVep0LTXeIe9vi1hqJqFn3/view?usp=share_link", icon: FileText }
      ]
    },
    {
      id: 5,
      title: "🥜 Makhmade - Nutritious Makhana Business",
      category: "Business & Finance",
      event: "July 2024 - Multi-Award Winner",
      description: "Business pitch for nutritious Makhana powder that can be added to smoothies, beverages, and various dishes. Won awards at IIM Bangalore, IIT Delhi, Delhi Technological University. Received incubation opportunity from IIM Bangalore worth Rs. 1,00,000/-.",
      logo: iimBangaloreLogo,
      links: [
        { type: "presentation", url: "https://drive.google.com/file/d/1FnWgbB3bjsKbJRF_wimF5Vgn9jpg46fI/view?usp=share_link", icon: FileText }
      ]
    },
    {
      id: 6,
      title: "🪑 Sugarwood - Sustainable Furniture",
      category: "Business",
      event: "June 2024",
      description: "Sugarwood specializes in designing and manufacturing innovative furniture products made from Bagasse, a byproduct of sugarcane processing. By tapping durability, lightweight nature, and renewability of bagasse, we design aesthetically pleasing, long-lasting, and affordable furniture. Won prizes in Delhi Technological University and IIM Bangalore.",
      logo: dtuLogo,
      links: [
        { type: "presentation", url: "https://drive.google.com/file/d/1SKLQO4Mv9zPlZZ2YFr8ziJ2I870Vy2HS/view?usp=share_link", icon: FileText }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'product':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'product & tech':
        return 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 border-purple-500/20';
      case 'tech':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'business & finance':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'business':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <section id="presentations" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white animate-glow">
            Technical & Business Presentations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions across technology, product design, and business domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation) => (
            <Card key={presentation.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <Badge 
                      variant="outline" 
                      className={`mb-2 ${getCategoryColor(presentation.category)}`}
                    >
                      {presentation.category}
                    </Badge>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {presentation.title}
                    </CardTitle>
                  </div>
                  <div className="ml-3 flex-shrink-0">
                    <img 
                      src={presentation.logo} 
                      alt="Organization logo"
                      className="w-12 h-12 object-contain rounded-lg bg-white/10 p-2 border border-border/20"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  {presentation.event}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 flex flex-col h-full">
                <CardDescription className="text-sm mb-4 leading-relaxed flex-grow">
                  {presentation.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {presentation.links.map((link, linkIndex) => {
                    const IconComponent = link.icon;
                    return (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <IconComponent className="w-3 h-3" />
                          {link.type === 'presentation' && 'Presentation'}
                          {link.type === 'demo' && 'Demo'}
                          {link.type === 'hardware' && 'Hardware'}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;