import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '../ui/button';

export function Projects() {
  const projects = [
    {
      title: "Multi-Service Docker Application",
      duration: "Sep 2025",
      description: "Containerized a multi-service application using Docker, implementing separation between Flask backend API and Nginx reverse proxy. Orchestrated services with Docker Compose and established custom bridge networks for secure inter-container communication.",
      features: [
        "Containerized multi-service application architecture",
        "Flask backend API with Nginx reverse proxy",
        "Custom bridge networks for secure communication",
        "Automated deployment with versioned Docker images",
        "Service discovery and request routing"
      ],
      technologies: ["Docker", "Docker Compose", "Python", "Flask", "Nginx", "REST APIs"],
      category: "DevOps",
      githubUrl: "https://github.com/ujjjx2/Docker-projects",
      demoUrl: null
    },
    {
      title: "Word Atlas – React 19",
      duration: "Jul 2025 – Aug 2025",
      description: "Multi-page React application with React Router DOM featuring real-time API integration for country data with advanced filtering and sorting capabilities.",
      features: [
        "Multi-page React application with routing",
        "Real-time API integration for country data",
        "Advanced filtering and sorting functionality",
        "Responsive design and user-friendly interface",
        "Modern React 19 features implementation"
      ],
      technologies: ["React.js", "React Router DOM", "REST APIs"],
      category: "Web Development",
      githubUrl: "https://github.com/ujjjx2/WorldAtlas",
      demoUrl: "https://word-atlas.netlify.app/"
    },
    {
      title: "Posts & CRUD Toolkit",
      duration: "Jul 2025",
      description: "React application with comprehensive CRUD operations using Axios for API communication, featuring real-time updates and dynamic UI interactions.",
      features: [
        "Full CRUD operations implementation",
        "Real-time API integration with Axios",
        "Dynamic UI updates and state management",
        "Error handling and user feedback",
        "Responsive design patterns"
      ],
      technologies: ["React.js", "Axios", "REST APIs"],
      category: "Web Development",
      githubUrl: "https://github.com/ujjjx2/CRUD-Operations-on-ToDo-app-using-real-api",
      demoUrl: "https://crud-operations-note.netlify.app/"
    },
    {
      title: "Plant Disease Detection – TensorFlow",
      duration: "Mar 2024 – Sep 2024",
      description: "Advanced machine learning project for plant disease detection using computer vision and deep learning techniques. Achieved 84.34% accuracy across multiple disease classes.",
      features: [
        "Custom preprocessing pipeline with smoothing and contrast correction",
        "Advanced segmentation using Bradley Thresholding and K-means",
        "Custom preprocessing layer in TensorFlow ensemble model",
        "Multi-class classification (early blight, healthy, late blight)",
        "Comprehensive image processing and feature extraction"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Image Processing", "OpenCV"],
      category: "Machine Learning",
      accuracy: "84.34%",
      githubUrl: "https://github.com/ujjjx2/Vegetable-model",
      demoUrl: null // No demo available for ML project
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "DevOps": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Web Development": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Machine Learning": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects spanning web development, DevOps, and machine learning, 
            showcasing proficiency in modern technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <h2 className="text-xl mb-3">{project.title}</h2>
                
                {project.accuracy && (
                  <div className="mb-3">
                    <span className="text-sm text-primary">Accuracy: {project.accuracy}</span>
                  </div>
                )}

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex-1">
                  <h4 className="mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Badge variant="secondary" className="w-1.5 h-1.5 p-0 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.githubUrl ? (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  
                  {project.demoUrl ? (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}