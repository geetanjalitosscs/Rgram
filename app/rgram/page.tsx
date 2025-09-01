// import { MediaHero } from "@/components/media-hero"
import { AuthCard } from "@/components/auth-card"

export default function RgramPage() {
  return (
    <main className="mx-auto flex min-h-[80svh] max-w-5xl items-center justify-center px-6 py-6">
      <div className="grid w-full items-center gap-6 md:grid-cols-2">
        {/* Left: hero collage (hidden on small screens in component) */}
        {/* <MediaHero /> */}

        {/* Right: sign-up card */}
        <div className="flex w-full justify-center">
          <AuthCard />
        </div>
      </div>

      {/* Minimal footer links to mirror the reference without copying text verbatim */}
      <footer className="absolute inset-x-0 bottom-4 px-6">
        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500">
          <li>
            <a href="#" className="hover:text-gray-700">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Help
            </a>
          </li>
        </ul>
        <p className="mt-2 text-center text-xs text-gray-400">English • © {new Date().getFullYear()} Rgram</p>
      </footer>
    </main>
  )
}
