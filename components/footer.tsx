export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Frank Mesa. All rights reserved.`}
        </p>
        <p className="text-xs text-muted-foreground">
          Commercial Talent / Naples, FL
        </p>
      </div>
    </footer>
  )
}
