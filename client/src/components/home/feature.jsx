import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react'

const features = [
  {
    title: "Comprehensive Analytics",
    description: "Get in-depth insights across all your social media platforms in one place.",
    icon: BarChart3
  },
  {
    title: "Real-time Tracking",
    description: "Monitor your social media performance in real-time with live updates.",
    icon: TrendingUp
  },
  {
    title: "Audience Insights",
    description: "Understand your audience better with detailed demographic and behavioral data.",
    icon: Users
  },
  {
    title: "AI-Powered Recommendations",
    description: "Receive intelligent suggestions to improve your social media strategy.",
    icon: Zap
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

