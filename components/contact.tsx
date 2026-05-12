import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          {/* Label */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-sans">
              Contact
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              For casting inquiries, bookings, or auditions, let&apos;s connect.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:frankmesa@gmail.com?subject=Commercial%20Role%20Inquiry%20-%20Frank%20Mesa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group break-all"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-foreground group-hover:text-primary transition-colors">
                  frankmesa@gmail.com
                </span>
              </a>
            </div>

            <div className="pt-4">
              <a
                href="mailto:frankmesa@gmail.com?subject=Commercial%20Role%20Inquiry%20-%20Frank%20Mesa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 sm:px-8 py-3 text-sm uppercase tracking-widest font-sans hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm w-full sm:w-auto"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
