import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bulletPoints: string[];
  gradientFrom: string;
  gradientTo: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  bulletPoints,
  gradientFrom,
  gradientTo,
}: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center pb-4">
        <div
          className={`w-16 h-16 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-2xl flex items-center justify-center mx-auto mb-4`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <ul className="text-slate-600 space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index}>• {point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
