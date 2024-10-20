import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const faqSections = [
  {
    title: "Development Services",
    questions: [
      {
        question: "What types of smart contracts can Kishield develop?",
        answer:
          "Kishield excels in developing a wide array of smart contracts, primarily using Solidity and Rust. Our expertise spans fungible and non-fungible token contracts, decentralized autonomous organizations (DAOs), yield farming protocols, staking mechanisms, vesting contracts, and much more. If you have a unique smart contract need, our team is ready to bring your vision to life with secure, efficient code.",
      },
      {
        question: "Could you outline Kishield's development process?",
        answer:
          "Kishield's development process is collaborative and thorough. We begin by closely consulting with you to fully understand your project's goals and specific requirements. Our team then crafts a detailed plan, selecting the appropriate language and architecture. We develop the contract iteratively, with regular check-ins to ensure alignment with your vision. Rigorous testing is integrated throughout the process. The final product is a fully functional, secure smart contract ready for deployment.",
      },
      {
        question:
          "Does Kishield offer any services beyond smart contract development?",
        answer:
          "Absolutely! While smart contracts are a core offering, Kishield's expertise extends to comprehensive decentralized application (dApp) development. We can create end-to-end blockchain solutions that include not only robust smart contracts but also intuitive front-end interfaces and powerful back-end systems. Whether you need a simple dApp or a complex, multi-faceted blockchain platform, Kishield has the skills and experience to bring your project to fruition.",
      },
    ],
  },
  {
    title: "Testing and Quality Assurance",
    questions: [
      {
        question:
          "How does Kishield ensure the quality of smart contracts through testing?",
        answer:
          "At Kishield, we employ a multi-faceted approach to smart contract testing. Our development process incorporates comprehensive unit testing, aiming for 100% code coverage to ensure every function performs as intended. For dApp development, we utilize a combination of automated testing scripts and thorough manual testing by our experienced team. We also offer advanced fuzzing services upon request, which help identify unexpected vulnerabilities by inputting large amounts of random data into your system.",
      },
      {
        question:
          "What tools and technologies does Kishield use for testing smart contracts?",
        answer:
          "Kishield leverages cutting-edge tools to ensure rigorous smart contract testing. Our primary testing framework is Hardhat, which we use in conjunction with ethers.js, waffle, and mocha to create a robust testing environment. For scenarios requiring real-world data simulation, we employ mainnet forking techniques. In cases where more intensive security testing is needed, we utilize specialized fuzzing tools like Echidna. Our toolset is constantly evolving to incorporate the latest advancements in blockchain testing methodologies.",
      },
    ],
  },
  {
    title: "Smart Contract Audits",
    questions: [
      {
        question: "What exactly are smart contracts?",
        answer:
          "Smart contracts are digital agreements encoded directly into blockchain technology. They automatically execute predefined actions when specific conditions are met, eliminating the need for intermediaries and enhancing transaction efficiency and transparency.",
      },
      {
        question: "What potential risks do smart contracts face?",
        answer:
          "Despite their advantages, smart contracts can be susceptible to various vulnerabilities. These may stem from coding oversights, architectural weaknesses, or targeted attacks. Such issues could potentially lead to unauthorized access, asset mismanagement, or compromised contract integrity. This is why Kishield's expert audits are crucial for identifying and addressing these risks proactively.",
      },
      {
        question: "How would you describe a smart contract audit?",
        answer:
          "A smart contract audit is a thorough security assessment conducted by Kishield's blockchain experts. We dive deep into the contract's codebase, scrutinizing every aspect to uncover potential vulnerabilities, inefficiencies, or logical flaws. Our goal is to provide you with actionable insights and robust recommendations to fortify your smart contract's security and optimize its performance.",
      },
      {
        question: "Why should I prioritize a smart contract audit?",
        answer:
          "The immutable nature of blockchain makes smart contract audits indispensable. Once deployed, altering a smart contract is extremely challenging. Kishield's audits serve as a crucial safeguard, helping you anticipate and prevent potential exploits before they occur. This not only protects your assets but also bolsters your project's credibility and instills confidence among your user base and potential investors.",
      },
      {
        question: "What factors influence the cost of a smart contract audit?",
        answer:
          "At Kishield, we understand that each project is unique. The cost of our smart contract audits is determined by several factors, including the complexity of your project, the volume of code to be reviewed, and any specific time constraints. We strive to offer competitive pricing that reflects the high quality of our services. Reach out to us for a tailored quote that aligns with your project's specific requirements and budget.",
      },
      {
        question:
          "Do you provide guidance on addressing identified issues post-audit?",
        answer:
          "Absolutely! At Kishield, we don't just identify problems – we help you solve them. Following our audit, we provide a comprehensive report with clear, actionable recommendations for each identified issue. Our team is committed to guiding you through the process of enhancing your smart contract's security and efficiency, ensuring your project stands on a solid foundation.",
      },
      {
        question: "What's the typical timeline for a smart contract audit?",
        answer:
          "The duration of a Kishield smart contract audit varies depending on the scope and intricacy of your project. We pride ourselves on our efficiency without compromising thoroughness. Upon reviewing your project details, we provide a clear timeline estimate, allowing you to plan effectively. Our goal is to deliver high-quality results within a timeframe that aligns with your project milestones.",
      },
      {
        question:
          "Does Kishield's team focus solely on security vulnerabilities?",
        answer:
          "While security is our primary focus, Kishield's expertise extends beyond just identifying vulnerabilities. Our seasoned professionals also assess your smart contract's overall architecture, suggesting optimizations to enhance performance and efficiency. We aim to deliver a comprehensive analysis that not only secures your contract but also improves its functionality and gas efficiency.",
      },
      {
        question:
          "What makes Kishield a trustworthy choice for smart contract audits?",
        answer:
          "Kishield has established itself as a leader in blockchain security through our commitment to excellence and our track record of successful audits. Our team comprises seasoned experts with deep knowledge of blockchain technologies and smart contract intricacies. We've helped secure numerous high-profile projects and have a keen eye for detecting vulnerabilities that others might miss. Choose Kishield for peace of mind and unparalleled expertise in smart contract security.",
      },
      {
        question: "What range of security services does Kishield offer?",
        answer:
          "Kishield provides a comprehensive suite of blockchain security services. Beyond our core smart contract audits, we offer penetration testing, vulnerability assessments, and customized security solutions. For projects seeking ongoing protection, we also provide subscription-based security services, ensuring your blockchain assets remain safeguarded as your project evolves and grows.",
      },
      {
        question:
          "Can you walk me through Kishield's smart contract audit process?",
        answer:
          "Kishield's audit process is methodical and thorough. It begins with an initial consultation where we understand your project's scope. We then provide a detailed quote and timeline. Our team conducts a comprehensive audit, combining automated tools with manual expert analysis. You receive a preliminary report, which you can use to address identified issues. After your fixes, we perform a final review and publish the updated report. This process ensures a rigorous, collaborative approach to securing your smart contract.",
      },
      {
        question:
          "What aspects of my smart contract does Kishield's audit cover?",
        answer:
          "Kishield's audits are exhaustive, covering all crucial aspects of your smart contract. We analyze the contract's logic, assess its algorithms, examine data structures, and evaluate external dependencies. Our team also considers potential attack vectors, gas optimization, and adherence to best practices. The goal is to provide a 360-degree security assessment, leaving no stone unturned in our quest to secure your smart contract.",
      },
      {
        question:
          "Which programming languages does Kishield specialize in for smart contract audits?",
        answer:
          "At Kishield, we have deep expertise in auditing smart contracts written in Solidity and Rust, the most widely used languages in blockchain development. Our team stays up-to-date with the latest developments in these languages to provide cutting-edge security assessments. If you have smart contracts in other languages, don't hesitate to reach out – we're always expanding our capabilities to meet our clients' needs.",
      },
      {
        question:
          "What tools does Kishield employ in the smart contract auditing process?",
        answer:
          "Kishield leverages a suite of advanced tools to ensure comprehensive smart contract audits. We utilize the latest versions of language-specific compilers, employ both static and dynamic analysis tools, and use industry-standard frameworks like Truffle Suite and Ganache for thorough testing. Our toolset is continually updated to stay ahead of emerging security threats and to provide the most accurate and reliable audit results.",
      },
      {
        question:
          "What kind of support can I expect from Kishield after the audit?",
        answer:
          "Kishield's commitment to your project's security extends beyond the initial audit. We offer extensive post-audit support, including consultations to help implement our recommendations effectively. We also provide a complimentary re-check to verify that the implemented changes have resolved the identified issues. For long-term peace of mind, consider our security subscription service, which offers ongoing protection and regular check-ups to keep your smart contract secure as your project evolves.",
      },
      {
        question: "How do I initiate a smart contract audit with Kishield?",
        answer:
          "Starting your smart contract audit with Kishield is straightforward. Simply reach out to our team through our website or contact channels. Share the details of your smart contract and any specific concerns or requirements you may have. Our team will promptly review your information and guide you through the next steps, ensuring a smooth and efficient audit process tailored to your project's needs.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      {faqSections.map((section, index) => (
        <Card key={index} className="mb-8">
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {section.questions.map((item, qIndex) => (
                <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
