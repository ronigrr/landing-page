import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] order-first lg:order-none">
              <Image
                src="/me.jpg"
                alt="Ronald Granovsky"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <h2 className="text-lg font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                Hello, my name is
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                Ronald Granovsky
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Backend developer with 3.5+ years of experience building scalable, real-time systems using .NET, Kafka, and Kubernetes.
              </p>
              <div className="pt-4">
                <a
                  href="/Resume.pdf"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm a backend developer with over 3.5 years of experience delivering scalable, real-time systems using .NET technologies. 
              I excel in building resilient microservices, optimizing backend performance, and deploying containerized applications in cloud environments. 
              I thrive in fast-paced teams and consistently drive impactful results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Languages",
                skills: ["C#", "TypeScript", "Python", "Kotlin"]
              },
              {
                category: "Frameworks",
                skills: [".NET Core", "Azure DevOps"]
              },
              {
                category: "Cloud & Orchestration",
                skills: ["AWS", "Docker", "Kubernetes", "KEDA"]
              },
              {
                category: "Databases & Messaging",
                skills: ["PostgreSQL", "Redis", "Kafka", "RabbitMQ"]
              },
              {
                category: "Architecture",
                skills: ["Microservices", "Event-Driven", "SOLID", "OOP"]
              },
              {
                category: "DevOps & CI/CD",
                skills: ["GitHub", "Azure DevOps", "Jenkins"]
              },
              {
                category: "Monitoring",
                skills: ["Kibana", "Grafana", "Datadog", "Coralogix"]
              },
              {
                category: "AI Tools",
                skills: ["Generative AI", "Prompt Engineering", "Cursor"]
              }
            ].map((category) => (
              <div
                key={category.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Recent Role
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                R&D Backend Developer
              </h3>
              <p className="text-blue-600 dark:text-blue-400">LSports</p>
              <p className="text-gray-600 dark:text-gray-300">2021–2025</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Built and maintained event-driven microservices using .NET, Kafka, and Kubernetes. 
                Led containerization and cloud deployments on AWS with Docker. 
                Improved backend performance with PostgreSQL and Redis, and streamlined CI/CD workflows using GitHub and Azure DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Looking for a sharp backend dev?
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's talk. I'm available for interviews immediately.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:ronigrr@gmail.com"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 