import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { FaGraduationCap } from 'react-icons/fa';

// Skills data
const skillsData = [
  {
    section: 'Frontend',
    skills: ['HTML and CSS', 'Responsive Web Design', 'Tailwind', 'Bootstrap', 'JavaScript (ES6+)', 'jQuery', 'React.js', 'Next.js'],
  },
  {
    section: 'Backend',
    skills: ['Node.js', 'MVC', 'Express.js', 'TypeScript', 'EJS', 'Authentication & Authorization (JWT)', 'Databases (MongoDB, MySQL)', 'RESTful APIs', 'Postman', 'websockets', 'PHP & WordPress (Beginner)'],
  },
  {
    section: 'Version Control',
    skills: ['Git', 'GitHub', 'Bitbucket'],
  },
  {
    section: 'DevOps & Cloud',
    skills: ['AWS EC2', 'Docker', 'CI/CD', 'Cloudflare DNS'],
  },
  {
    section: 'iOS Development',
    skills: ['Xcode', 'UIKit', 'Swift'],
  },
  {
    section: 'Other Skills',
    skills: ['Visual Composer', 'Figma', 'Problem-Solving', 'Collaboration', 'Adaptability', 'Time Management'],
  },
];

// Experience data
const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Meesap Technologies',
    location: 'Lucknow, India',
    duration: 'Jan 2024 - Present',
    description: 'A technology company specializing in innovative development solutions.',
    achievements: [
      'Managed feature design collaborations, ensuring 99% client satisfaction.',
      'Mentored junior developers, introducing pair programming techniques to increase team efficiency by 30%.',
      'Deployed backend APIs using Express.js, improving interoperability and increasing data processing speed by 25%.',
      'Rebuilt and modernized 4 travel portals with Next.js, improving load speed by 45% and achieving 99.9% uptime on AWS.',
      'Improved project delivery speed by participating in Agile sprints, ensuring 100% on-time delivery of software releases.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Meesap Technologies',
    location: 'Lucknow, India',
    duration: 'Jul 2023 - Jan 2024',
    description: 'An internship focused on developing iOS applications and MERN stack projects.',
    achievements: [
      'Developed and maintained iOS applications using Swift and UIKit, integrating RESTful APIs to enhance functionality and performance.',
      'Developed user interfaces with HTML, CSS, React.js and Bootstrap/Tailwind CSS.',
      'Gained hands-on experience in MERN Stack (MongoDB, Express.js, React.js, Node.js) through intensive training.',
      'Designed RESTful APIs, increasing system efficiency by 25% through Express.js and Node.js.',
      'Participated in testing and debugging processes and improving user experience.',
    ],
  },
];

// Education data
const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'IGNOU, Delhi',
    duration: '2020-2023',
    description: 'Completed Bachelor of Computer Applications (BCA) from IGNOU, Delhi, graduating with First Division.',
    icon: <FaGraduationCap />,
  },
];

const Cards = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Tabs defaultValue="skills" className="w-full flex flex-col items-center">
          <TabsList className="max-w-max mb-10">
            <TabsTrigger value="skills">My Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="w-full">
            <div className="space-y-10">
              {skillsData.map((group) => (
                <div key={group.section}>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                    {group.section}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="w-full">
            <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
              {experienceData.map((experience) => (
                <div
                  key={experience.title}
                  className="bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  <p className="text-gray-500 italic mb-2">
                    {experience.company} | {experience.location} | {experience.duration}
                  </p>
                  <p className="text-gray-700 mb-3">{experience.description}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="w-full">
            <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
              {educationData.map((education) => (
                <div
                  key={education.degree}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  <div className="flex-shrink-0 text-blue-500 text-3xl">{education.icon}</div>
                  <div>
                    <h2 className="text-2xl font-semibold">{education.degree}</h2>
                    <p className="text-gray-500 italic mb-2">
                      {education.institution} | {education.duration}
                    </p>
                    <p className="text-gray-700">{education.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Cards;