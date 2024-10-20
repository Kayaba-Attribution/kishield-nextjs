import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, DollarSign, Clock } from "lucide-react";

const stats = [
  { title: "Audits Completed", value: "500+", icon: Shield },
  { title: "Assets Secured", value: "$1B+", icon: DollarSign },
  { title: "Hour Turnaround", value: "24-48", icon: Clock },
];

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Fortifying the <span className="text-primary">Web3 Frontier</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-delay-1">
          Kishield: Your trusted partner for comprehensive smart contract
          audits, blockchain security, and cutting-edge Web3 development
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8  mx-20 animate-fade-in-delay-2">
          {stats.map((stat, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm sm:text-lg py-2 px-4 w-full sm:w-auto"
            >
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />
              <span className="whitespace-nowrap">
                {stat.value} {stat.title}
              </span>
            </Badge>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-3">
          <Button
            size="lg"
            className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3"
          >
            Request an Audit{" "}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 inline-block" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
