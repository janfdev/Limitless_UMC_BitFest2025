import { Button } from "@/components/ui/button";

export default function CTA01() {
  return (
    <section className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
      <div className="text-center space-y-4">
        <h2 className="xl:text-6xl/none text-3xl font-bold sm:text-5xl tracking-tight">
          Boost your app, launch, earn
        </h2>
        <p className="text-xl text-muted-foreground pt-1">
          Do not waste time on Stripe subscriptions or designing a pricing
          section...
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center w-full">
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
