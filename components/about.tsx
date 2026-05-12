export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          {/* Label */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-sans">
              About
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              I am a Florida-based commercial talent with a natural, confident, and approachable presence on camera.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My look and delivery fit a wide range of commercial roles, from professional and lifestyle spots to corporate and digital campaigns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am easy to work with, take direction well, and show up prepared. My focus is simple, clear communication that feels authentic and relatable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
