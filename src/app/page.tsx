// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Shield, Code, Users } from "lucide-react";
import HeroSection from "@/components/ui/utils/hero";
import TestimonialsSection from "@/components/ui/utils/TestimonialsSection";

const services = [
  {
    title: "Smart Contract Audits",
    description:
      "Dive deep into your code with our exhaustive audit service, designed to catch vulnerabilities before they become threats.",
    icon: Shield,
  },
  {
    title: "Token Analysis",
    description:
      "Ensure your tokenomics are sound with our thorough examination of your token contracts.",
    icon: Code,
  },
  {
    title: "Custom Contract Development",
    description:
      "From conception to deployment, we provide bespoke smart contract development to bring your vision to life.",
    icon: Users,
  },
];

const features = [
  {
    title: "Competitive Pricing",
    description: "High-quality audits that fit your token project's budget.",
  },
  {
    title: "24-48 Hour Turnaround",
    description: "Swift audits to meet your token launch deadlines.",
  },
  {
    title: "Token Security Experts",
    description: "Specialized in ERC-20, ERC-721, and other token standards.",
  },
  {
    title: "Total Protection",
    description:
      "Full suite: contract audits, tokenomics review, and security checks.",
  },
  {
    title: "Industry-Recognized Audits",
    description: "Boost your token's credibility with our trusted reputation.",
  },
  {
    title: "AI-Enhanced Reviews",
    description: "Cutting-edge AI analysis combined with expert manual checks.",
  },
  {
    title: "Free Token Safety Scores",
    description: "Enhance investor confidence with our security ratings.",
  },
  {
    title: "Ongoing Security Support",
    description: "Continuous protection from launch to project growth.",
  },
];
const auditProcess = [
  "Specification Gathering",
  "Manual Review",
  "Automated Analysis",
  "Vulnerability Assessment",
  "Report Generation",
  "Follow-up Support",
];

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-base-100 via-base-100/90 to-base-100 min-h-screen">
      <div
        className="fixed inset-0 bg-repeat z-[-1]"
        style={{ backgroundImage: "url('bg/noise.gif')" }}
      ></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="py-4 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 md:mb-10">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow flex flex-col"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <service.icon className="w-12 h-12 text-primary flex-shrink-0" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="flex-grow">{service.description}</p>
                  <div className="flex justify-end mt-4">
                    <Button variant="link">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kishield */}
      <section className="py-8 md:py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Kishield?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:mx-48">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow text-center"
              >
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-left md:text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Audit Process */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Audit Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {auditProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Projects
          </h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {/* Replace with actual project data */}
            {[1, 2, 3, 4, 5].map((project) => (
              <div
                key={project}
                className="flex-shrink-0 w-64 bg-base-300 p-4 rounded-lg"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">
                  Project {project}
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Expert Team
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Our team consists of blockchain security experts, seasoned
            developers, and industry veterans with a combined experience of over
            50 years in cybersecurity and blockchain technology.
          </p>
          {/* Add team member cards or details here */}
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Learn More About Blockchain Security
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Stay updated with the latest in blockchain security and best
                  practices.
                </p>
                <Button variant="link">Read Our Blog</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Whitepapers</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Dive deep into technical aspects of smart contract security.
                </p>
                <Button variant="link">Download Whitepapers</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Find answers to common questions about our services and
                  processes.
                </p>
                <Button variant="link">View FAQs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t leave your project&apos;s security to chance. Get a
            professional audit from Kishield today.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Request a Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-base-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Kishield</h3>
              <p className="text-sm">Securing the future of Web3</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary">
                    Smart Contract Audits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Token Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Custom Contract Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2024 Kishield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
