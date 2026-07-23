import Link from "next/link"

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-4xl px-6 h-14 flex items-center justify-between">
        <Link href="#" className="font-serif text-lg font-semibold text-primary">
          KM
        </Link>
        <div className="hidden sm:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="sm:hidden text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
