import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function Home() {
  const techStack = ['Java', 'Python', 'React.js', 'Docker', 'TensorFlow', 'Selenium'];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Ujjwal Gupta
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Developer & AI Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Recent B.Tech IT graduate with 9.0 CGPA, specializing in full-stack development, 
              automation testing, and machine learning. Currently working as Systems Engineer at TCS.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-4">Technologies I work with:</p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/ujjwal-gupta-840361229/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/ujjjx2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:ujjjwalx@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+91-9871922407"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}