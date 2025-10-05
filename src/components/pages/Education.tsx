import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "B.Tech IT",
      institution: "Guru Gobind Singh Indraprastha University (GGSIU)",
      duration: "2021 – 2025",
      grade: "CGPA: 9.0",
      status: "Completed",
      description: "Comprehensive program covering computer science fundamentals, software engineering, and emerging technologies."
    },
    {
      degree: "Class XII, CBSE",
      institution: "Central Board of Secondary Education",
      duration: "2021",
      grade: "94.4%",
      status: "Completed",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Class X, CBSE",
      institution: "Central Board of Secondary Education", 
      duration: "2019",
      grade: "96.5%",
      status: "Completed",
      description: "Strong foundation in core subjects with excellent academic performance."
    }
  ];

  const achievements = [
    {
      title: "T-Factor Excellence",
      description: "Achieved T-Factor: 1.42 in Fresco Play",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Learning Points",
      description: "1090+ learning points in iEvolve platform",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Consistent Excellence",
      description: "Maintained high academic standards throughout education",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.includes("9.0") || grade.includes("96.5") || grade.includes("94.4")) {
      return "text-green-400";
    }
    return "text-primary";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">Education</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation with consistently excellent performance across 
            all levels of education, culminating in a distinguished B.Tech degree.
          </p>
        </div>

        {/* Academic Timeline */}
        <div className="space-y-6 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h2 className="text-xl">{edu.degree}</h2>
                      <Badge variant="secondary">{edu.status}</Badge>
                    </div>
                    <h3 className="text-muted-foreground mb-2">{edu.institution}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{edu.duration}</span>
                      </div>
                      <div className={`font-medium ${getGradeColor(edu.grade)}`}>
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Achievements */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Academic Achievements
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg text-center">
                  <div className="flex justify-center mb-2 text-primary">
                    {achievement.icon}
                  </div>
                  <h3 className="mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Statistics */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl mb-6">Academic Performance Summary</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-3xl text-green-400 mb-2">9.0</div>
                <div className="text-sm text-muted-foreground">CGPA in B.Tech</div>
                <div className="text-xs text-muted-foreground mt-1">Out of 10.0</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-3xl text-blue-400 mb-2">94.4%</div>
                <div className="text-sm text-muted-foreground">Class XII</div>
                <div className="text-xs text-muted-foreground mt-1">CBSE Board</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-3xl text-purple-400 mb-2">96.5%</div>
                <div className="text-sm text-muted-foreground">Class X</div>
                <div className="text-xs text-muted-foreground mt-1">CBSE Board</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}