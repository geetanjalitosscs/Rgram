import { AuthCard } from "@/components/auth-card"
// import { MediaHero } from "@/components/media-hero"
import { FooterLinks } from "@/components/footer-links"
import { HeroCopy } from "@/components/hero-copy"
import { RgramLogo } from "@/components/rgram-logo"

export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-indigo-50/80 to-white">
      <section className="container mx-auto px-6 md:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 py-12 md:py-16">
          {/* Top: Rgram info section */}
          <div className="flex w-full justify-center">
            <HeroCopy />
          </div>

          {/* Bottom: Join Rgram signup section */}
          <div className="flex w-full justify-center">
            <div className="w-full max-w-sm">
              {/* Logo above Join Rgram heading */}
              <div className="mb-6 text-center">
                <RgramLogo />
              </div>
              
              {/* Small headline + subtext to elevate hierarchy */}
              <div className="mb-4 text-center">
                <h1 className="text-pretty text-xl font-semibold text-indigo-900 md:text-2xl">Join Rgram</h1>
                <p className="mt-1 text-xs text-neutral-600">
                  Share moments with friends and communities you care about.
                </p>
              </div>
              <AuthCard />
              <div className="mt-6">
                <FooterLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
