import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Unlock the Power of Your Social Media Data
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Get actionable insights, track your growth, and optimize your social media strategy with our advanced analytics platform.
        </p>
        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

