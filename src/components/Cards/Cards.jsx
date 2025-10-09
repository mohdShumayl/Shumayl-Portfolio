import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { FaGraduationCap } from "react-icons/fa";

// Skills data with proficiency
const skillsData = [
  {
    section: "Frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 70 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind", level: 80 },
      { name: "Bootstrap", level: 96 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Shadcn UI ", level: 70 },
    ]
  },
  {
    section: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 92 },
      { name: "TypeScript", level: 75 },
      { name: "AuthN and AuthZ", level: 90 },
      { name: "MongoDB / MySQL(Prisma)", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "WebSockets", level: 80 },
    ],
  },
  {
    section: "Additional skills",
    skills: [
      { name: "Git", level: 90 },
      { name: "AWS(EC2, Lambda)", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 60 },
      { name: "Figma", level: 90 },
      { name: "UIKit", level: 55 },
      { name: "Swift", level: 50 },
    ],
  }
];

const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Meesap Technologies",
    location: "Lucknow, India",
    duration: "Jan 2024 - Present",
    description: "A technology company specializing in innovative development solutions.",
    achievements: [
      "Managed feature design collaborations, ensuring 99% client satisfaction.",
      "Mentored junior developers, introducing pair programming techniques to increase team efficiency by 30%.",
      "Deployed backend APIs using Express.js, improving interoperability and increasing data processing speed by 25%.",
      "Rebuilt and modernized 4 travel portals with Next.js, improving load speed by 45% and achieving 99.9% uptime on AWS.",
      "Improved project delivery speed by participating in Agile sprints, ensuring 100% on-time delivery of software releases.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Meesap Technologies",
    location: "Lucknow, India",
    duration: "Jul 2023 - Jan 2024",
    description: "An internship focused on developing iOS applications and MERN stack projects.",
    achievements: [
      "Developed and maintained iOS applications using Swift and UIKit, integrating RESTful APIs.",
      "Built UIs with React.js, Tailwind & Bootstrap.",
      "Hands-on experience in MERN Stack (MongoDB, Express.js, React.js, Node.js).",
      "Designed RESTful APIs, improving system efficiency by 25%.",
      "Tested & debugged applications for better user experience.",
    ],
  },
];

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "IGNOU, Delhi",
    duration: "2020-2023",
    description:
      "Completed Bachelor of Computer Applications (BCA) from IGNOU, Delhi, graduating with First Division.",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((group) => (
                <div
                  key={group.section}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    {group.section}
                  </h3>
                  <div className="space-y-6">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          {/* Skill name */}
                          <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                          {/* Percentage */}
                          <span className="text-sm font-semibold text-gray-600">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-4 rounded-full" style={{ backgroundColor: "#e1e8f0" }}>
                          <div
                            className="h-4 rounded-full shadow-md transition-all duration-700 ease-in-out"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: "#aeaeaeff",
                            }}
                          />
                        </div>
                      </div>
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
                  <div className="flex-shrink-0 text-blue-500 text-3xl">
                    {education.icon}
                  </div>
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
