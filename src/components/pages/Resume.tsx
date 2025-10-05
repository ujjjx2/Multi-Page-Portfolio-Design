import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Download, Printer, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar } from 'lucide-react';

export function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // This will trigger the browser's print dialog which can save as PDF
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print controls - hidden when printing */}
      <div className="print:hidden bg-card p-4 text-center border-b border-border">
        <div className="flex justify-center gap-4">
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Print Resume
          </Button>
          <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Use your browser's print function to save as PDF
        </p>
      </div>

      {/* Resume content - optimized for A4 printing */}
      <div className="resume-container max-w-4xl mx-auto bg-card text-card-foreground print:bg-white print:text-black">
        <div className="grid grid-cols-5 gap-6 p-8 min-h-screen print:min-h-0">
          {/* Main content - Left column (3/5 width) */}
          <div className="col-span-3 space-y-6 print:space-y-4">
            {/* Header */}
            <div className="mb-8 print:mb-4">
              <h1 className="text-4xl font-bold text-purple print:text-purple-600 mb-2">Ujjwal Gupta</h1>
              <p className="text-xl text-primary print:text-purple-600 mb-4">Software Developer & AI Enthusiast</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-black">
                <a 
                  href="mailto:ujjjwalx@gmail.com" 
                  className="flex items-center gap-1 hover:text-primary transition-colors print:text-black print:no-underline"
                >
                  <Mail className="h-4 w-4" />
                  <span>ujjjwalx@gmail.com</span>
                </a>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>+91-9871922407</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Noida, India</span>
                </div>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground print:text-black mt-2">
                <a 
                  href="https://www.linkedin.com/in/ujjwal-gupta-840361229/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors print:text-black print:no-underline"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="https://github.com/ujjjx2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors print:text-black print:no-underline"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">EXPERIENCE</h2>
              
              <div className="space-y-6 print:space-y-3">
                <div>
                  <div className="mb-2">
                    <h3 className="font-bold text-lg text-foreground print:text-black">Systems Engineer</h3>
                    <p className="text-purple print:text-purple-600 mb-1 font-bold">Tata Consultancy Services (TCS)</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground print:text-black">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jul 2025 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Noida, India</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground print:text-black print:space-y-0">
                    <li>• Undergone Training in Python and AI during ILP period</li>
                    <li>• Completed various competencies and courses</li>
                    <li>• T-Factor: 1.42 in Fresco Play and 1090 learning points in iEvolve</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2">
                    <h3 className="font-bold text-lg text-foreground print:text-black">QA Automation Engineer</h3>
                    <p className="text-purple print:text-purple-600 mb-1 font-bold">Publicis Sapient (Client: IBC)</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground print:text-black">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jan 2025 - Jul 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Noida, India</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground print:text-black print:space-y-0">
                    <li>• Supported migration of IBC's auto insurance app from ASP.NET to Angular, improving scalability and stability</li>
                    <li>• Conducted multi-environment testing across 4 setups, identifying 15+ environment-specific defects</li>
                    <li>• Logged and tracked issues in JIRA, reducing bug leakage by 10%</li>
                    <li>• Built and optimized Selenium-Cucumber automation, raising test coverage from 55% to 75% and cutting manual regression by 20 hrs/cycle</li>
                    <li>• Executed automation sniff tests on VMs, detecting 8–10 critical stability issues per release</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2">
                    <h3 className="font-bold text-lg text-foreground print:text-black">Software Intern</h3>
                    <p className="text-purple print:text-purple-600 mb-1 font-bold">Tech Mahindra Comviva</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground print:text-black">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jul 2024 - Aug 2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Gurugram, India</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground print:text-black print:space-y-0">
                    <li>• Automated PRF process with Excel-to-MySQL tool, reducing processing time from 2 hrs to 20 min and lowering errors by 70%</li>
                    <li>• Enhanced inventory management with OEM EOL/EOSL data for 500 assets</li>
                    <li>• Suggested 3 key improvements in AIM workflows and schema, boosting system stability</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2">
                    <h3 className="font-bold text-lg text-foreground print:text-black">Forensic Research Intern</h3>
                    <p className="text-purple print:text-purple-600 mb-1 font-bold">Centre for Development of Advanced Computing (C-DAC)</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground print:text-black">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jul 2023 - Aug 2023</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Noida, India</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground print:text-black print:space-y-0">
                    <li>• Built an automated signature & handwriting verification system for forensic document examination</li>
                    <li>• Applied preprocessing & segmentation techniques to improve clarity and feature extraction</li>
                    <li>• Used computer vision & pattern recognition to flag authenticity issues</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">PROJECTS</h2>
              
              <div className="space-y-4 print:space-y-2">
                <div>
                  <div className="mb-2">
                    <h3 className="font-bold text-foreground print:text-black">Multi-Service Docker Application</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground print:text-black">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2025</span>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground print:text-black print:space-y-0">
                    <li>• Containerized multi-service application using Docker, implementing separation between Flask backend API and Nginx reverse proxy</li>
                    <li>• Orchestrated services with Docker Compose, establishing custom bridge networks for secure inter-container communication</li>
                    <li>• Implemented Nginx as reverse proxy for request routing and service discovery between containers</li>
                    <li>• Automated deployment with versioned Docker images on Docker Hub</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2">
                    <h3 className="font-bold text-foreground print:text-black">Plant Disease Detection – TensorFlow</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground print:text-black">
                      <Calendar className="h-4 w-4" />
                      <span>Mar 2024 - Sep 2024</span>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground print:text-black print:space-y-0">
                    <li>• Built preprocessing pipeline (smoothing, contrast correction, sharpening)</li>
                    <li>• Applied segmentation (Bradley Thresholding, K-means, Blob Transform)</li>
                    <li>• Integrated custom preprocessing layer in TensorFlow ensemble model</li>
                    <li>• Achieved 84.34% accuracy across early blight, healthy, and late blight classes</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2">
                    <h3 className="font-bold text-foreground print:text-black">Word Atlas – React 19</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground print:text-black">
                      <Calendar className="h-4 w-4" />
                      <span>Jul 2025 - Aug 2025</span>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1 text-foreground print:text-black print:space-y-0">
                    <li>• Multi-page React app with React Router DOM</li>
                    <li>• Integrated real-time API for country data with filtering/sorting</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">CERTIFICATIONS</h2>
              
              <div className="space-y-3 print:space-y-1 text-sm">
                <div>
                  <a 
                    href="https://www.udemy.com/certificate/UC-6db33549-5c39-48df-af8f-7cfe968e6460/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-foreground print:text-black hover:text-primary transition-colors flex items-center gap-1 print:no-underline"
                  >
                    Java Masterclass 2025: 130+ Hours
                    <ExternalLink className="h-3 w-3 print:hidden" />
                  </a>
                  <p className="text-muted-foreground print:text-black">Udemy | Apr 2025 - Present</p>
                </div>
                <div>
                  <a 
                    href="https://www.udemy.com/certificate/UC-d7d3a858-0a00-4c7f-a9ca-e71197a7533b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-foreground print:text-black hover:text-primary transition-colors flex items-center gap-1 print:no-underline"
                  >
                    Learning Python Programming: Beginner to Master
                    <ExternalLink className="h-3 w-3 print:hidden" />
                  </a>
                  <p className="text-muted-foreground print:text-black">Udemy | Aug 2025 - Present</p>
                </div>
                <div>
                  <a 
                    href="https://www.udemy.com/certificate/UC-e76e0151-9c35-48ce-8b60-219779dc4ebb/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-foreground print:text-black hover:text-primary transition-colors flex items-center gap-1 print:no-underline"
                  >
                    Machine Learning A-: AI, Python & R + ChatGPT Bonus
                    <ExternalLink className="h-3 w-3 print:hidden" />
                  </a>
                  <p className="text-muted-foreground print:text-black">Udemy | Aug 2023 - Present</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Right column (2/5 width) */}
          <div className="col-span-2 space-y-6 print:space-y-4">
            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">TECHNICAL SKILLS</h2>
              
              <div className="space-y-4 print:space-y-2">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground print:text-black">Programming Languages</h3>
                  <div className="flex flex-wrap gap-1">
                    {['Java', 'Python', 'C++', 'JavaScript', 'DSA', 'DBMS', 'OS'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs dark:border-muted-foreground dark:text-muted-foreground print:!bg-blue-500 print:!text-white print:!border-blue-500">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground print:text-black">Web & Automation</h3>
                  <div className="flex flex-wrap gap-1">
                    {['React.js', 'MaterialUI', 'Selenium', 'Cucumber', 'TestNG', 'Maven', 'Axios'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs dark:border-muted-foreground dark:text-muted-foreground print:!bg-green-500 print:!text-white print:!border-green-500">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground print:text-black">DevOps & Infrastructure</h3>
                  <div className="flex flex-wrap gap-1">
                    {['Docker', 'Docker Compose', 'Nginx', 'Container Orchestration', 'Linux', 'Git'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs dark:border-muted-foreground dark:text-muted-foreground print:!bg-orange-500 print:!text-white print:!border-orange-500">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground print:text-black">Data Science & AI</h3>
                  <div className="flex flex-wrap gap-1">
                    {['TensorFlow', 'Keras', 'CNN', 'Deep Learning', 'Machine Learning', 'Image Processing', 'OpenCV'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs dark:border-muted-foreground dark:text-muted-foreground print:!bg-purple-500 print:!text-white print:!border-purple-500">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-foreground print:text-black">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-1">
                    {['JIRA', 'Zephyr'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs dark:border-muted-foreground dark:text-muted-foreground print:!bg-red-500 print:!text-white print:!border-red-500">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">EDUCATION</h2>
              
              <div className="space-y-4 print:space-y-2 text-sm">
                <div>
                  <h3 className="font-bold text-foreground print:text-black">B.Tech in Information Technology</h3>
                  <p className="text-muted-foreground print:text-black">Guru Gobind Singh Indraprastha University</p>
                  <p className="text-muted-foreground print:text-black">2021 - 2025 | New Delhi, India</p>
                  <p className="font-semibold text-foreground print:text-black">CGPA: 9.0/10.0</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground print:text-black">Class XII, CBSE</h3>
                  <p className="text-muted-foreground print:text-black">CBSE Board | 2021</p>
                  <p className="font-semibold text-foreground print:text-black">Percentage: 94.4%</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground print:text-black">Class X, CBSE</h3>
                  <p className="text-muted-foreground print:text-black">CBSE Board | 2019</p>
                  <p className="font-semibold text-foreground print:text-black">Percentage: 96.5%</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">LANGUAGES</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground print:text-black">English</span>
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-purple print:bg-purple-600 mr-1"></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground print:text-black">Hindi</span>
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-purple print:bg-purple-600 mr-1"></div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">ACHIEVEMENTS</h2>
              <div className="space-y-3 print:space-y-1 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground print:text-black">Academic Excellence</h3>
                  <p className="text-foreground print:text-black">Consistently maintained outstanding academic performance with 9.0 CGPA in B.Tech and 96.5% in Class X</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground print:text-black">Technical Training</h3>
                  <p className="text-foreground print:text-black">Completed intensive Python and AI training during TCS ILP with high competency scores</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground print:text-black">Automation Impact</h3>
                  <p className="text-foreground print:text-black">Increased test coverage from 55% to 75% and reduced manual regression testing by 20 hours per cycle</p>
                </div>
              </div>
            </section>

            {/* Strengths */}
            <section>
              <h2 className="text-xl font-bold text-purple print:text-purple-600 border-b-2 border-purple print:border-purple-600 pb-1 mb-4">STRENGTHS</h2>
              <div className="flex flex-wrap gap-1">
                {['Problem Solving', 'Automation Mindset', 'Quick Learner', 'Team Player', 'Attention to Detail', 'Quality Assurance', 'Software Development', 'DevOps Practices', 'Machine Learning'].map((strength) => (
                  <Badge key={strength} variant="outline" className="text-xs dark:border-muted-foreground dark:text-muted-foreground print:!bg-blue-500 print:!text-white print:!border-blue-500">{strength}</Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            /* Force light mode and preserve colors for print */
            * {
              background: white !important;
              background-color: white !important;
              color: black !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Override dark mode for print */
            .dark * {
              background: white !important;
              background-color: white !important;
              color: black !important;
            }
            
            /* Hide ALL navigation, headers, and UI elements */
            header, nav, .header, .navbar, .navigation,
            [class*="header"], [class*="navbar"], [class*="nav"],
            [class*="fixed"], [class*="sticky"], [class*="banner"],
            [id*="header"], [id*="nav"], [id*="menu"],
            .print\\:hidden {
              display: none !important;
              visibility: hidden !important;
            }
            
            /* Reset body and container positioning */
            body {
              margin: 0 !important;
              padding: 0 !important;
              background: white !important;
            }
            
            .resume-container {
              max-width: none !important;
              margin: 0 !important;
              padding: 0in 0.75in 0.75in 0.75in !important;
              background: white !important;
            }
            
            /* Page setup */
            @page {
              margin: 0.3in 0.5in 0.5in 0.5in;
              size: A4;
            }
            
            /* Typography for print */
            h1 {
              font-size: 28pt !important;
              margin-bottom: 8pt !important;
            }
            
            h2 {
              font-size: 16pt !important;
              margin-bottom: 6pt !important;
              margin-top: 12pt !important;
            }
            
            /* Purple headings for print */
            .print\\:text-purple-600,
            .dark .print\\:text-purple-600 {
              color: #8b5cf6 !important;
            }
            
            .print\\:border-purple-600,
            .dark .print\\:border-purple-600 {
              border-color: #8b5cf6 !important;
            }
            
            .print\\:bg-purple-600,
            .dark .print\\:bg-purple-600 {
              background-color: #8b5cf6 !important;
            }
            
            /* Company names bold in print */
            .font-bold {
              font-weight: bold !important;
            }
            
            /* Skill badge colors for print */
            .print\\:bg-blue-500,
            .print\\:\\!bg-blue-500 { 
              background-color: #3b82f6 !important; 
              color: white !important; 
              border-color: #3b82f6 !important;
            }
            .print\\:bg-green-500,
            .print\\:\\!bg-green-500 { 
              background-color: #10b981 !important; 
              color: white !important;
              border-color: #10b981 !important;
            }
            .print\\:bg-orange-500,
            .print\\:\\!bg-orange-500 { 
              background-color: #f97316 !important; 
              color: white !important;
              border-color: #f97316 !important;
            }
            .print\\:bg-purple-500,
            .print\\:\\!bg-purple-500 { 
              background-color: #8b5cf6 !important; 
              color: white !important;
              border-color: #8b5cf6 !important;
            }
            .print\\:bg-red-500,
            .print\\:\\!bg-red-500 { 
              background-color: #ef4444 !important; 
              color: white !important;
              border-color: #ef4444 !important;
            }
            
            h3 {
              font-size: 12pt !important;
              color: black !important;
              margin-bottom: 4pt !important;
            }
            p, li {
              font-size: 9pt !important;
              color: black !important;
              line-height: 1.2 !important;
            }
            
            .text-sm {
              font-size: 8pt !important;
            }
            
            .text-xs {
              font-size: 7pt !important;
            }
            
            /* Spacing adjustments for print */
            .print\\:space-y-4 > * + * {
              margin-top: 0pt !important;
            }
            
            .print\\:space-y-3 > * + * {
              margin-top: 0pt !important;
            }
            
            .print\\:space-y-2 > * + * {
              margin-top: 0pt !important;
            }
            
            .print\\:space-y-1 > * + * {
              margin-top: 0pt !important;
            }
            
            .print\\:space-y-0 > * + * {
              margin-top: 0 !important;
            }
            
            /* Skill badges styling for print */
            .print-skill-badge {
              background: #f0f0f0 !important;
              border: 1px solid #ccc !important;
              color: black !important;
              font-size: 7pt !important;
              padding: 1pt 3pt !important;
              margin: 1pt !important;
              display: inline-block !important;
              border-radius: 2pt !important;
            }
            
            /* Lists */
            ul {
              margin: 0 !important;
              padding-left: 5pt !important;
              text-align: justify !important;
            }
            
            li {
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* Links */
            a {
              text-decoration: none !important;
              color: black !important;
            }
            
            /* Borders */
            .print\\:border-black {
              border-color: black !important;
            }
            
            /* Grid adjustments */
            .grid {
              gap: 16pt !important;
            }
            
            /* Icons - hide external link icons */
            .print\\:hidden {
              display: none !important;
            }
            
            /* Language proficiency dots */
            .w-3.h-3 {
              width: 6pt !important;
              height: 6pt !important;
            }
          }
        `
      }} />
    </div>
  );
}