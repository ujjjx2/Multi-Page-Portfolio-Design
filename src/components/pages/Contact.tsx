import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Award
} from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ujjjwalx@gmail.com",
      href: "mailto:ujjjwalx@gmail.com",
      description: "Feel free to reach out for collaborations or opportunities"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-9871922407",
      href: "tel:+91-9871922407",
      description: "Available for calls during business hours"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Noida, India",
      href: null,
      description: "Open to remote work and relocation"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ujjwal-gupta-840361229/",
      description: "Professional network and career updates"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/ujjjx2",
      description: "Code repositories and open source contributions"
    }
  ];

  const certificationLinks = [
    {
      title: "Java Masterclass 2025: 130+ Hours,Udemy",
      href: "https://www.udemy.com/certificate/UC-6db33549-5c39-48df-af8f-7cfe968e6460/",
      duration: "Apr 2025 – Present"
    },
    {
      title: "Python Programming: Beginner to Master,Udemy",
      href: "https://www.udemy.com/certificate/UC-d7d3a858-0a00-4c7f-a9ca-e71197a7533b/",
      duration: "Aug 2025 – Present"
    },
    {
      title: "Machine Learning A-: AI, Python & R,Udemy",
      href: "https://www.udemy.com/certificate/UC-e76e0151-9c35-48ce-8b60-219779dc4ebb/",
      duration: "Aug 2023 – Present"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and connecting with
            fellow developers. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">{contact.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-muted-foreground">{contact.label}:</span>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span>{contact.value}</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl mb-6">Social & Professional</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-1">{social.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                        >
                          {social.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground">{social.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl mb-6">Quick Actions</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" asChild>
                <a href="mailto:ujjjwalx@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="https://www.linkedin.com/in/ujjwal-gupta-840361229/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="https://github.com/ujjjx2" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Verified Certifications
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certificationLinks.map((cert, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="mb-2 text-sm leading-tight">{cert.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                  </div>
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

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            Thank you for your interest! I look forward to hearing from you.
          </p>
        </div>
      </div>
    </div>
  );
}