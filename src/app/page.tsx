import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/artist/1006729827.jpg"
            alt="Lil June"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/90 via-[#1e3a8a]/80 to-[#0a1128]/90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
            Lil June
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to the official music store of Lil June. Discover exclusive tracks, 
            support independent music, and experience the sound that defines a generation.
          </p>
          <Link
            href="/music"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 transition-all hover:scale-105"
          >
            Browse Music
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0a1128]/50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/20">
              <Image
                src="/images/artist/1006729827.jpg"
                alt="Lil June"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-4">
                About Lil June
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Lil June is a rising artist known for creating music that blends 
                  contemporary sounds with authentic cultural influences. With a unique 
                  style that resonates with audiences worldwide, Lil June continues to 
                  push boundaries and deliver tracks that are both meaningful and memorable.
                </p>
                <p>
                  Each release represents a journey, telling stories through rhythm and 
                  melody. From powerful anthems to introspective ballads, the music of 
                  Lil June captures the essence of modern artistry while staying true 
                  to authentic roots.
                </p>
                <p>
                  Explore the catalog, discover your favorite tracks, and join the community 
                  of fans who appreciate quality music from an independent artist.
                </p>
              </div>
              <Link
                href="/music"
                className="inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:text-[#fbbf24] transition-colors"
              >
                Explore the Music Collection
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1128] to-[#1e3a8a]/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Lil June Music
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a1128]/80 border border-[#d4af37]/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e40af] to-[#d4af37] flex items-center justify-center mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">High Quality</h3>
              <p className="text-white/80">
                Premium quality audio files delivered directly to you. Support the artist 
                while enjoying your favorite tracks.
              </p>
            </div>
            
            <div className="bg-[#0a1128]/80 border border-[#d4af37]/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e40af] to-[#d4af37] flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Exclusive Content</h3>
              <p className="text-white/80">
                Access exclusive tracks and releases available only through the official 
                store. Be among the first to get new music.
              </p>
            </div>
            
            <div className="bg-[#0a1128]/80 border border-[#d4af37]/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e40af] to-[#d4af37] flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Direct Support</h3>
              <p className="text-white/80">
                Your purchases directly support the artist, enabling more music creation 
                and independent artistry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

