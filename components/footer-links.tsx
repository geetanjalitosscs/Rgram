const links = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Rgram Lite",
  "Threads",
  "Contact Uploading & Non-Users",
]

export function FooterLinks() {
  return (
    <footer className="mx-auto max-w-sm text-center">
      <nav aria-label="Footer links" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-neutral-500">
        {links.map((l) => (
          <a key={l} href="#" className="hover:text-neutral-700">
            {l}
          </a>
        ))}
      </nav>
      <div className="mt-4 text-xs text-neutral-500">English • © {new Date().getFullYear()} Rgram</div>
    </footer>
  )
}
