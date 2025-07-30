
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Award, FileText, Video, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import isroLogo from '@/assets/isro-logo.jpg';
import sihLogo from '@/assets/sih-logo.webp';
import canaraBankLogo from '@/assets/canara-bank-logo.jpg';
import citadelLogo from '@/assets/citadel-logo.jpg';
import walmartLogo from '@/assets/walmart-logo.jpg';

const Projects = () => {
  const projects = [
    {
      title: "LLM-GISX: AI-Powered Geospatial Intelligence",
      description: "Full-stack AI + GIS platform using React, FastAPI, LangChain, and PyQGIS to automate spatial planning from natural language and voice input (15+ Indian languages).",
      achievements: "Recognized by ISRO at Bharatiya Antariksh Hackathon 2025",
      logo: isroLogo,
      tech: ["React", "FastAPI", "LangChain", "PyQGIS", "Docker", "Vercel"],
      links: {
        demo: "https://llm-gisx-frontend.vercel.app",
        github: "https://github.com/sneharc16/LLM-GISx-ISRO-Hackathon",
        presentation: "https://drive.google.com/file/d/1iyaOiGzTXwJZWCIKeYuwnvi00a226Vbg/view?usp=share_link"
      },
      impact: "95% reduction in GIS task time, 80% automation of analysis, 100% compliance with CRZ/FRA/MoEFCC overlays",
      featured: true
    },
    {
      title: "Swasth Infinity - AI Fitness Platform",
      description: "AI-powered fitness web application using React.js, TensorFlow, Random Forest, K-means, and PoseNet for real-time yoga posture correction.",
      achievements: "Smart India Hackathon 2024 Winner - Grand Finale",
      logo: sihLogo,
      tech: ["React.js", "TensorFlow", "Random Forest", "K-means", "PoseNet"],
      links: {
        demo: "https://swasthinfinity.vercel.app",
        github: "https://github.com/sneharc16/swasth-infinity",
        presentation: "https://drive.google.com/file/d/1DfSuhGzbhGWAaaYEbnaUGfyE5ViE6Rqy/view?usp=share_link",
        video: "https://drive.google.com/file/d/1gEeAa_Arj7NowT5_VPEz959v6PUPB-ep/view?t=178"
      },
      impact: "85% higher accuracy in posture detection, 60% increase in user engagement, Rs. 1,00,000 cash prize",
      featured: true
    },
    {
      title: "🛡️ Laxman Rekha: Cognitive Behavioral Authentication for Mobile Banking",
      description: "Mobile banking security using TensorFlow Lite, LSTM, and React Native for on-device fraud detection via tap force, tremors, hesitation patterns.",
      achievements: "Recognized by Canara Bank Hackathon 2025",
      logo: canaraBankLogo,
      tech: ["TensorFlow Lite", "LSTM", "React Native", "Node.js", "AES", "MongoDB"],
      links: {
        github: "https://github.com/sneharc16/Laxman-Rekha",
        presentation: "https://drive.google.com/file/d/1fURhmRQq_Xw__YxYkfD2gUXmUbsxDbU0/view?usp=share_link"
      },
      impact: "<100 ms inference, 98% fraud reduction, DPDP/IT Act compliance",
      featured: false
    },
    {
      title: "Quantitative Time-Series Forecasting Pipeline",
      description: "Python-based time-series trading pipeline for energy markets using advanced statistical models and feature engineering.",
      achievements: "Citadel's Women Datathon 2025 - Finale Submission",
      logo: citadelLogo,
      tech: ["Python", "Pandas", "NumPy", "statsmodels", "scikit-learn", "VAR", "Random Forest"],
      links: {
        github: "https://github.com/sneharc16/Quantitative-Time-Series-Forecasting-Pipeline-for-Energy-Markets",
        report: "https://drive.google.com/file/d/1m3wVQTXecveoPYQcnifMt0j7Eexi7Gk3/view?usp=share_link"
      },
      impact: "R² = 0.9991, 73% RMSE reduction, 15% uplift in backtested strategy returns",
      featured: false
    },
    {
      title: "Intellica: Course Recommendation System",
      description: "AI-driven course recommendation chatbot using LLAMA via GroqCloud API with FAISS-based embeddings and multilingual support.",
      achievements: "",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
      tech: ["LLAMA", "GroqCloud API", "FAISS", "AI", "Multilingual NLP"],
      links: {
        demo: "https://intellica-blue.vercel.app",
        github: "https://github.com/sneharc16/intellica"
      },
      impact: "35% engagement increase, 40% user reach expansion",
      featured: false
    },
    {
      title: "EcoMart: Sustainable Retail Platform",
      description: "Sustainability-first digital retail experience empowering eco-conscious choices through AI insights, smart notifications, and gamification for Walmart's ecosystem.",
      achievements: "Walmart Sparkathon 2025 Submission",
      logo: walmartLogo,
      tech: ["React.js", "Node.js", "MongoDB", "Firebase", "TensorFlow.js", "ml5.js", "ChromaDB"],
      links: {
        demo: "https://walmart-ladybugs.vercel.app",
        github: "https://github.com/sneharc16/Lady-Bugs-Walmart",
        presentation: "https://drive.google.com/file/d/1KlAqN0YHnMcWefyU84qofWy6-Ut9nYQO/view?usp=share_link"
      },
      impact: "Aligned with UN SDGs 12 & 13, personalized sustainability tracking, food waste reduction through expiry alerts",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text wave-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning AI, machine learning, and full-stack development, 
            recognized at national and international competitions.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "card-gradient border-border/30 glow-transition hover:scale-[1.02]",
                project.featured ? "deep-shadow ring-2 ring-primary/20" : "ocean-shadow"
              )}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl md:text-2xl text-foreground">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge variant="default" className="bg-coral text-background">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    {project.achievements && (
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-coral" />
                        <span className="text-sm text-coral font-medium">
                          {project.achievements}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col md:items-end gap-2">
                    {project.logo && (
                      <img 
                        src={project.logo} 
                        alt="Organization logo" 
                        className="w-16 h-16 md:w-20 md:h-20 rounded object-contain mb-2"
                      />
                    )}
                    <div className="flex gap-2 flex-shrink-0 flex-wrap justify-start">
                      {project.links.demo && (
                        <Button variant="ocean" size="sm" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Deployed Website
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="glass" size="sm" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.links.video && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                            <Video className="w-4 h-4 mr-2" />
                            Demo Video
                          </a>
                        </Button>
                      )}
                      {project.links.presentation && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.presentation} target="_blank" rel="noopener noreferrer">
                            <FileText className="w-4 h-4 mr-2" />
                            Presentation
                          </a>
                        </Button>
                      )}
                      {project.links.report && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.report} target="_blank" rel="noopener noreferrer">
                            <FileText className="w-4 h-4 mr-2" />
                            Final Report
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-border/50 bg-background/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-bioluminescent mb-2">Impact & Results</h4>
                    <p className="text-sm text-foreground/70">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
