"use client"

export default function SmallGallery() {
  const items = [
    {
      src: "/images/rgram-people-hero.jpg",
      alt: "Rgram community illustration",
    },
    {
      src: "/images/rgram-sunset-2.webp",
      alt: "Sunset hands with spiritual symbols",
    },
  ]

  return (
    <div className="mt-6 flex items-center gap-4">
      {items.map((it) => (
        <div key={it.src} className="rounded-xl border bg-muted/40 p-2 shadow-sm" aria-label="image box">
          <div className="h-24 w-32 md:h-28 md:w-40 overflow-hidden rounded-lg bg-background">
            <img src={it.src || "/placeholder.svg"} alt={it.alt} className="h-full w-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  )
}
