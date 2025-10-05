import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { Code, Globe, Server, Database, Brain, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 75 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "MaterialUI", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "Docker Compose", level: 75 },
        { name: "Nginx", level: 70 },
        { name: "Linux", level: 75 },
        { name: "Git", level: 85 }
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "JDBC", level: 75 },
        { name: "Servlets", level: 70 },
        { name: "DBMS", level: 85 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Keras", level: 75 },
        { name: "OpenCV", level: 70 },
        { name: "CNN", level: 75 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 75 }
      ]
    },
    {
      title: "Testing & Automation",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Selenium", level: 85 },
        { name: "Cucumber", level: 80 },
        { name: "TestNG", level: 75 },
        { name: "Maven", level: 75 },
        { name: "JIRA", level: 80 },
        { name: "Zephyr", level: 70 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Java Masterclass 2025: 130+ Hours of Expert Lessons",
      href: "https://www.udemy.com/certificate/UC-6db33549-5c39-48df-af8f-7cfe968e6460/",
      duration: "Apr 2025 – Present"
    },
    {
      title: "Learning Python Programming: Beginner to Master",
      href: "https://www.udemy.com/certificate/UC-d7d3a858-0a00-4c7f-a9ca-e71197a7533b/",
      duration: "Aug 2025 – Present"
    },
    {
      title: "Machine Learning A-: AI, Python & R + ChatGPT Bonus",
      href: "https://www.udemy.com/certificate/UC-e76e0151-9c35-48ce-8b60-219779dc4ebb/",
      duration: "Aug 2023 – Present"
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 75) return "bg-blue-500";
    if (level >= 65) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across multiple domains including software development, 
            DevOps, machine learning, and quality assurance.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h2 className="text-lg">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl mb-6 flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Certifications & Continuous Learning
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="mb-2 text-sm leading-tight">{cert.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                   <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href={cert.href} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      View Certificate
                    </a>
                  </Button> 
                  </div>
                  <p className="text-xs text-muted-foreground">{cert.duration}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Competencies */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-xl mb-4">Core Competencies</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2">Technical Expertise</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Full-stack web development</li>
                  <li>• Test automation and QA processes</li>
                  <li>• Container orchestration and DevOps</li>
                  <li>• Machine learning and computer vision</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2">Professional Skills</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Problem-solving and analytical thinking</li>
                  <li>• Project management and teamwork</li>
                  <li>• Process optimization and automation</li>
                  <li>• Technical documentation and reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}