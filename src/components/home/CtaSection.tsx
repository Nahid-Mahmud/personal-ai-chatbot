import { Button } from "../ui/button";

export default function CtaSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your AI Experience?</h2>
        <p className="text-xl text-slate-600 mb-8">
          Join thousands of professionals using AI Chat Pro for smarter conversations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Schedule Demo
          </Button>
        </div>
        <p className="text-sm text-slate-500 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  );
}
