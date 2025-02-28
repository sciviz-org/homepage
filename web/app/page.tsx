import VantaBackground from "@/components/VantaBackground";
import Image from 'next/image';


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold flex items-center">
            <Image 
              src="/logo.svg" 
              alt="SciViz Logo" 
              width={42} 
              height={42} 
              className="mr-2 dark:invert"
              priority
            />
            <span className="text-3xl text-foreground">
              SciViz
            </span>
          </div>
          <div className="space-x-4">
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="relative">
          <div className="relative h-[60vh] w-full rounded-lg overflow-hidden">
            <VantaBackground>
              <div className="absolute inset-0 bg-background/20" />
            </VantaBackground>
          </div>
          <div className="container mx-auto px-4">
            <div className="absolute top-1/2 transform -translate-y-1/2">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to SciViz!</h1>
              <p className="text-xl text-muted-foreground mb-6">Navigate Science Through Visual Discovery</p>
              <a 
                href="https://sciviz.org/app/" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Panels */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Panel 1 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize access to scientific knowledge by transforming complex 
                scientific literature into clear, interactive visualizations that anyone 
                can understand and explore.
              </p>
            </div>

            {/* Panel 2 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where scientific knowledge is accessible to everyone, where 
                insights from millions of research papers can be discovered and 
                understood in minutes, not months.
              </p>
            </div>

            {/* Panel 3 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Accessibility, Innovation, and Clarity. We believe in making science 
                accessible to all, innovating how knowledge is discovered, and presenting 
                complex information with crystal clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">© 2025 SciViz. All rights reserved.</p>
            </div>
            {/* <div className="space-y-2 md:space-y-0 md:space-x-4 text-center md:text-right">
              <a href="mailto:contact@example.com" className="block md:inline">
                contact@example.com
              </a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+1234567890" className="block md:inline">
                +1 (234) 567-890
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </main>
  );
}