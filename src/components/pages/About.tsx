import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, GraduationCap, Briefcase, Trophy } from 'lucide-react';

export function About() {
  const highlights = [
    "9.0 CGPA in B.Tech IT from GGSIU",
    "94.4% in Class XII CBSE",
    "T-Factor: 1.42 in Fresco Play",
    "1090+ learning points in iEvolve"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate software developer with a strong foundation in computer science and 
            practical experience across multiple domains including web development, automation testing, and AI/ML.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Personal Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Personal Information
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2">Noida, India</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <span className="ml-2">ujjjwalx@gmail.com</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="ml-2">+91-9871922407</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Languages:</span>
                  <span className="ml-2">English, Hindi</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Role */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Current Position
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-primary">Systems Engineer</h3>
                  <p className="text-muted-foreground">Tata Consultancy Services (TCS)</p>
                  <p className="text-sm text-muted-foreground">Jul 2025 - Present</p>
                </div>
                <p className="text-sm">
                  Currently undergoing comprehensive training in Python and AI during the ILP period, 
                  focusing on advanced technologies including TensorFlow, Sklearn, and data science frameworks.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Excellence */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Academic Excellence
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="text-2xl text-primary mb-1">9.0</h3>
                <p className="text-sm text-muted-foreground">CGPA in B.Tech IT</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="text-2xl text-primary mb-1">94.4%</h3>
                <p className="text-sm text-muted-foreground">Class XII CBSE</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="text-2xl text-primary mb-1">96.5%</h3>
                <p className="text-sm text-muted-foreground">Class X CBSE</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Highlights */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Key Achievements
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}