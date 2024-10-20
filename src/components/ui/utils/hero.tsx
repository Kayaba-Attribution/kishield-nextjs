"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, DollarSign, Clock } from "lucide-react";

const stats = [
  { title: "Audits Completed", value: "500+", icon: Shield },
  { title: "Assets Secured", value: "$1B+", icon: DollarSign },
  { title: "Hour Turnaround", value: "24-48", icon: Clock },
];

const partners = [
  { name: "Pinksale", logo: "/partners/Pinksale.svg" },
  { name: "Polygon", logo: "/partners/PolygonMatic.svg" },
  { name: "BSC", logo: "/partners/bsc.svg" },
  { name: "Ethereum", logo: "/partners/eth.svg" },
  { name: "CoinGecko", logo: "/partners/CoinGecko.svg" },
  { name: "CoinMarketCap", logo: "/partners/CoinMarketCap.svg" },
];

export default function HeroSection() {
  const logoRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      const ul = logoRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      const nextSibling = ul.nextElementSibling as HTMLElement;
      if (nextSibling) {
        nextSibling.setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  return (
    <section className="pt-12 sm:py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Fortifying the <span className="text-primary">Web3 Frontier</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-delay-1">
          <span className="font-semibold">KISHIELD</span>: Your trusted partner
          for comprehensive smart contract audits, blockchain security, and
          cutting-edge Web3 development solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8 mx-20 animate-fade-in-delay-2">
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

      <div className="flex items-center justify-center mx-4 mt-4 md:mt-10 md:mb-6">
        <div className="rounded-lg">
          <Image
            src="/images/dash.png"
            alt="Hero Image"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      </div>

      {/* Partners and Supported Chains */}
      <div className="md:mt-2">
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={logoRef}
              className="flex items-center justify-center space-x-16 animate-infinite-scroll"
            >
              {partners.map((partner, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-24 h-24"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={180}
                    height={180}
                    className="max-w-full max-h-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
