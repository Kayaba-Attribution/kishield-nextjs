import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
      name: "Emily Chen",
      project: "DeFi Protocol X",
      quote: "Kishield's audit was thorough and helped us identify critical issues before launch.",
      stats: {
        totalRaised: "$700k",
        topMarketCap: "$1.2M",
        topHolders: 5000
      }
    },
    {
      name: "Alex Rodriguez",
      project: "NFT Marketplace Y",
      quote: "The speed and professionalism of Kishield's team exceeded our expectations.",
      stats: {
        totalRaised: "$1.5M",
        topMarketCap: "$8M",
        topHolders: 12000
      }
    },
    {
      name: "Sarah Thompson",
      project: "GameFi Platform Z",
      quote: "Kishield's expertise in gaming tokens was crucial for our successful launch.",
      stats: {
        totalRaised: "$3M",
        topMarketCap: "$15M",
        topHolders: 25000
      }
    },
    {
      name: "Mohammed Al-Fayed",
      project: "Decentralized Exchange W",
      quote: "The ongoing support from Kishield has been invaluable as our project scaled rapidly.",
      stats: {
        totalRaised: "$5M",
        topMarketCap: "$50M",
        topHolders: 100000
      }
    }
  ];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mx-48">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <p className="text-lg font-bold">{testimonial.stats.totalRaised}</p>
                    <p className="text-xs text-muted-foreground">Total Raised</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-2">
                    <p className="text-lg font-bold">{testimonial.stats.topMarketCap}</p>
                    <p className="text-xs text-muted-foreground">Top Market Cap</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-2">
                    <p className="text-lg font-bold">{testimonial.stats.topHolders.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Top Holders</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;