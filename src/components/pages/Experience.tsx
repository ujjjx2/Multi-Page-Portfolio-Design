import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Systems Engineer",
      company: "Tata Consultancy Services (TCS)",
      duration: "Jul 2025 - Present",
      location: "India",
      description: "Undergone Training in Python and AI during ILP period",
      achievements: [
        "Completed various competencies and courses",
        "T-Factor: 1.42 in Fresco Play and 1090 learning points in iEvolve",
        "Specialized training in Python, Numpy, Pandas, Matplotlib, Tensorflow, Sklearn"
      ],
      technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "TensorFlow", "Sklearn"]
    },
    {
      title: "QA Automation Engineer",
      company: "Publicis Sapient (Client: IBC)",
      duration: "Jan 2025 – Jul 2025",
      location: "India",
      description: "Supported migration of IBC's auto insurance app from ASP.NET to Angular",
      achievements: [
        "Improved scalability and stability through migration support",
        "Conducted multi-environment testing across 4 setups, identifying 15+ environment-specific defects",
        "Logged and tracked issues in JIRA, reducing bug leakage by 10%",
        "Built and optimized Selenium-Cucumber automation, raising test coverage from 55% to 75%",
        "Cut manual regression by 20 hrs/cycle",
        "Executed automation sniff tests on VMs, detecting 8–10 critical stability issues per release"
      ],
      technologies: ["Java", "Maven", "Selenium", "Cucumber", "TestNG", "JIRA"]
    },
    {
      title: "Software Intern",
      company: "Tech Mahindra Comviva",
      duration: "Jul 2024 – Aug 2024",
      location: "India",
      description: "Focused on process automation and inventory management improvements",
      achievements: [
        "Automated PRF process with Excel-to-MySQL tool, reducing processing time from 2 hrs to 20 min",
        "Lowered errors by 70% through automation",
        "Enhanced inventory management with OEM EOL/EOSL data for 500 assets",
        "Suggested 3 key improvements in AIM workflows and schema, boosting system stability"
      ],
      technologies: ["Servlets", "JDBC", "Java", "MySQL"]
    },
    {
      title: "Forensic Research Intern",
      company: "Centre for Development of Advanced Computing (C-DAC)",
      duration: "Jul 2023 – Aug 2023",
      location: "India",
      description: "Built an automated signature & handwriting verification system for forensic document examination",
      achievements: [
        "Applied preprocessing & segmentation techniques to improve clarity and feature extraction",
        "Used computer vision & pattern recognition to flag authenticity issues",
        "Developed comprehensive forensic analysis pipeline"
      ],
      technologies: ["OpenCV", "Machine Learning", "Python", "MatplotLib"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">Work Experience</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey spanning multiple domains including enterprise software development, 
            QA automation, and research in AI/ML applications.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl text-primary mb-1">{exp.title}</h2>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Badge variant="secondary" className="w-1.5 h-1.5 p-0 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}