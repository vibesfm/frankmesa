import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { OnCamera } from "@/components/on-camera"
import { Details } from "@/components/details"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <OnCamera />
        <Details />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
