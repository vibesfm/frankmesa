const services = [
  "Commercial and branded content",
  "Corporate and internal brand videos",
  "Digital and social ads",
  "Lifestyle and professional roles",
]

export function OnCamera() {
  return (
    <section id="on-camera" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          {/* Label */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-sans">
              On Camera
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <ul className="flex flex-col gap-0">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-4 py-5 border-b border-border group"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground text-base sm:text-lg group-hover:text-primary transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">
              Comfortable on set and with self-tape auditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
