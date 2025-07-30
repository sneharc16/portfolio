
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Brain, Trophy, GraduationCap, Users, Heart, Music, Pen, BookOpen, Sparkles, Waves, Fish } from 'lucide-react';

const About = () => {
  const [hoveredJourney, setHoveredJourney] = useState<string | null>(null);

  const journeyHighlights = [
    {
      id: "current",
      title: "Current Focus",
      content: "Working on a research project at DESIDOC, DRDO, exploring cutting-edge applications in AI and machine learning.",
      icon: <Brain className="w-5 h-5 text-bioluminescent" />
    },
    {
      id: "research",
      title: "Research Experience", 
      content: "Previously interned at the ML Research Lab, DTU, contributing to innovative projects in computer vision and deep learning.",
      icon: <Sparkles className="w-5 h-5 text-coral" />
    },
    {
      id: "competitive",
      title: "Competitive Programming",
      content: "Solved 500+ problems across multiple platforms with 4-star rating on CodeChef (max. rating 1815).",
      icon: <Trophy className="w-5 h-5 text-ocean-surface" />
    },
    {
      id: "achievements",
      title: "Major Achievements",
      content: "ICPC Regionalist, Smart India Hackathon winner, Citadel Datathon Finalist, and WorldQuant top 0.1% performer.",
      icon: <Fish className="w-5 h-5 text-amber-400" />
    }
  ];

  const skills = [
    {
      category: 'Languages',
      items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'C', 'R', 'SQL'],
      icon: <Code className="w-5 h-5 text-bioluminescent" />
    },
    {
      category: 'Frameworks',
      items: ['React.js', 'TensorFlow', 'PyTorch', 'OpenCV', 'Keras', 'Scikit-Learn'],
      icon: <Brain className="w-5 h-5 text-coral" />
    },
    {
      category: 'Databases & Tools',
      items: ['MongoDB', 'MySQL', 'Git', 'VS Code', 'MATLAB'],
      icon: <Database className="w-5 h-5 text-ocean-surface" />
    }
  ];

  const interests = [
    { name: 'Piano Performance', icon: <Music className="w-5 h-5 text-bioluminescent" />, description: 'Pursuing Trinity College London degree' },
    { name: 'Creative Writing', icon: <Pen className="w-5 h-5 text-coral" />, description: 'Storytelling and content creation' },
    { name: 'Mental Health Advocacy', icon: <Heart className="w-5 h-5 text-pink-400" />, description: 'Supporting community wellbeing' },
    { name: 'Inclusive Education', icon: <BookOpen className="w-5 h-5 text-ocean-surface" />, description: 'Promoting accessible learning' }
  ];

  return (
    <section id="about" className="py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
            About Me
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Building the future through code, research, and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive My Journey */}
          <Card className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-bioluminescent" />
                My Journey
                <Waves className="w-5 h-5 text-ocean-surface animate-wave ml-auto" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-200 leading-relaxed mb-6">
                I'm a penultimate-year engineering student interested in software development, product analytics, and applied research. I enjoy building projects in computer vision, deep learning, and full-stack development.
              </p>
              
              {/* Interactive Journey Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {journeyHighlights.map((highlight) => (
                  <div
                    key={highlight.id}
                    className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer transform ${
                      hoveredJourney === highlight.id
                        ? 'border-bioluminescent/50 bg-bioluminescent/10 scale-105 shadow-lg'
                        : 'border-border/20 bg-background/20 hover:border-primary/30'
                    }`}
                    onMouseEnter={() => setHoveredJourney(highlight.id)}
                    onMouseLeave={() => setHoveredJourney(null)}
                  >
                    <div className="flex items-start gap-2">
                      {highlight.icon}
                      <div>
                        <h4 className="text-sm font-medium text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className={`text-xs text-gray-300 transition-all duration-300 ${
                          hoveredJourney === highlight.id ? 'opacity-100' : 'opacity-75'
                        }`}>
                          {highlight.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <Fish className="w-6 h-6 text-bioluminescent animate-swim" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-30">
                <Sparkles className="w-4 h-4 text-coral animate-pulse" />
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-coral" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <img 
                  src="https://www.igdtuw.ac.in/IGDTUW/uploads/2041938450.png" 
                  alt="IGDTUW" 
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">B.Tech in Electronics & Communication Engineering (AI)</h3>
                  <p className="text-coral font-medium">Indira Gandhi Delhi Technical University for Women</p>
                  <p className="text-sm text-gray-300">2023 - 2027</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-bioluminescent mb-1">Relevant Coursework:</p>
                    <p className="text-xs text-gray-300">Data Structures, Database Management Systems, Object-Oriented Programming, Artificial Intelligence, Optimization Techniques</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <img 
                  src="https://pbs.twimg.com/profile_images/1915606206560743424/qZVB-Mcc_400x400.jpg" 
                  alt="Air Force Golden Jubilee Institute" 
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">High School (All India Senior School Certificate Examination)</h3>
                  <p className="text-coral font-medium">Air Force Golden Jubilee Institute</p>
                  <p className="text-sm text-gray-300">2014 - 2022</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-bioluminescent mb-1">Relevant Coursework:</p>
                    <p className="text-xs text-gray-300">Physics, Chemistry, Maths, Economics, English, and Physical Education</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    {skillGroup.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-primary/20 text-white rounded-full text-sm border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership & Community */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Leadership & Community</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-bioluminescent" />
                  Current Roles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">Research Lead - AI Club IGDTUW</h4>
                  <p className="text-sm text-gray-300">Leading research initiatives and AI/ML workshops</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">ICPC Algo Queen 2025 Mentor</h4>
                  <p className="text-sm text-gray-300">Sponsored by Jane Street, mentoring CP enthusiasts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-coral" />
                  Past Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">Finance & Research Head - Finivesta</h4>
                  <p className="text-sm text-gray-300">Led finance society with 300+ members</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-8">Beyond Academics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card key={interest.name} className="card-gradient border border-border/30 hover:border-primary/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {interest.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{interest.name}</h4>
                  <p className="text-sm text-gray-300">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
