import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Supercharge Your Social Media Strategy?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that are already leveraging our platform to grow their social media presence.
        </p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

