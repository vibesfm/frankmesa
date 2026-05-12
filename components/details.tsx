const details = [
  { label: "Height", value: `6'5"` },
  { label: "Location", value: "Naples, Florida" },
  { label: "Travel", value: "Available statewide" },
  { label: "Will Travel", value: "Yes" },
  { label: "Union Status", value: "Non-union" },
]

export function Details() {
  return (
    <section id="details" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          {/* Label */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-sans">
              Details
            </h2>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 sm:gap-y-8 max-w-2xl">
            {details.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-lg text-foreground">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
