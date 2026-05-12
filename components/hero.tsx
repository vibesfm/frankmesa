import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-6xl w-full px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-sans">
                Commercial Talent
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance text-foreground leading-[0.95]">
                Frank
                <br />
                Mesa
              </h1>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              {`6'5" male based in Naples, Florida. Available for commercial, brand, and corporate productions across Florida, including Miami, Tampa, and Orlando.`}
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 text-sm uppercase tracking-widest font-sans hover:bg-primary/90 transition-colors rounded-sm w-full sm:w-auto"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[288px] md:max-w-[320px] lg:max-w-[384px] aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/headshot.png"
                alt="Frank Mesa - Commercial Talent headshot"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
