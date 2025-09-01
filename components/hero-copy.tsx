/* Color system used (max 5):
   - Primary: sky-600 (brand blue)
   - Neutrals: white, neutral-900, neutral-600
   - Accent: amber-500 (tiny highlight on badges)
*/
export function HeroCopy() {
  return (
    <div className="max-w-2xl md:max-w-3xl">
      {/* Brand kicker */}
      <p className="text-base md:text-lg font-medium text-sky-700">Rgram</p>

      {/* Increase headline sizes for stronger hierarchy */}
      <h1 className="text-balance mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl lg:text-4xl">
        Share stories, discover communities, and connect in minutes
      </h1>

      {/* Make body slightly larger for readability */}
      <p className="mt-3 text-pretty text-neutral-600 md:text-base">
        A fresh place to follow interests, celebrate culture, and keep up with the people who matter.
      </p>

      {/* Replace feature tags with app store and social media buttons */}
      {/* <div className="mt-6 md:mt-7 flex flex-wrap gap-3">
        {/* Google Play Store */}
        {/* <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
          <img src="/images/google.jpg" alt="Google Play" className="h-6 w-6" />
          <span className="text-sm font-medium text-gray-700">Google Play</span>
        </div> */}
        
        {/* Facebook */}
        {/* <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
          <img src="/images/facebook.jpg" alt="Facebook" className="h-6 w-6" />
          <span className="text-sm font-medium text-gray-700">Facebook</span>
        </div> */}
        
        {/* iOS App Store */}
        {/* <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
          <img src="/images/ios.jpg" alt="iOS App Store" className="h-6 w-6" />
          <span className="text-sm font-medium text-gray-700">iOS</span>
        </div>
      </div> } */}

      {/* Replace placeholder badges with provided strip */}
      {/* Make badges a bit taller */}
      <div className="mt-6">
        <img
          src="/images/store-badges.png"
          alt="Download on the App Store, Google Play, and Indus Appstore"
          className="h-12 md:h-14 w-auto select-none"
        />
      </div>

      {/* Wide decorative banner to use the provided RGRAM illustration */}
      {/* Push banner further down so the enlarged copy stays clearly above it */}
      <div className="mt-10 md:mt-14 w-full overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-indigo-100/60 shadow h-44 md:h-56 lg:h-64">
        {/* Swap banner image from city+symbols to people illustration and keep faces centered */}
        <img
          src="/images/rgram-people-hero.jpg"
          alt="People from diverse communities"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 55%" }}
        />
      </div>

      {/* Widen thumbnails and swap first card to faith tree; keep 3 images total */}
      {/* <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="h-24 w-36 md:h-24 md:w-40 overflow-hidden rounded-xl bg-white ring-1 ring-indigo-100/60 shadow-sm">
          <img
            src="/images/rgram-faith-tree.jpg"
            alt="Tree with faith symbols"
            className="h-full w-full object-contain p-1"
          />
        </div>

        <div className="h-24 w-36 md:h-24 md:w-40 -mt-1 md:-mt-2 overflow-hidden rounded-xl bg-white ring-1 ring-indigo-100/60 shadow-sm">
          <img src="/images/rgram7.jpg" alt="Collage of places of worship" className="h-full w-full object-cover" />
        </div>

        <div className="h-24 w-36 md:h-24 md:w-40 overflow-hidden rounded-xl bg-white ring-1 ring-indigo-100/60 shadow-sm">
          <img
            src="/images/rgram-sunset-beside.webp"
            alt="Sunset hands with spiritual symbols"
            className="h-full w-full object-cover"
          />
        </div>
      </div> */}
    </div>
  )
}
