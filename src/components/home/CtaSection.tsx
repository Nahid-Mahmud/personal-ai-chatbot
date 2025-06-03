import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 dark:text-slate-100">
          Ready to Transform Your AI Experience?
        </h2>
        <p className="text-xl text-slate-600 mb-8 dark:text-slate-400">
          Join thousands of professionals using AIO Chat for smarter conversations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            prefetch={true}
            href={"/chat"}
            className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-block text-center"
          >
            Get Started Free
          </Link>

          {/* <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Schedule Demo
          </Button> */}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">No credit card required • 100% Free</p>
      </div>
    </section>
  );
}
