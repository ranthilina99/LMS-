import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">About LearnHub</h1>
          <p className="text-lg text-muted-foreground mb-6">
            LearnHub is a leading online learning platform dedicated to empowering individuals with knowledge and skills
            for the digital age. Our mission is to provide accessible, high-quality education to learners worldwide.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            With a diverse range of courses taught by industry experts, we offer learning experiences that cater to
            various interests and career paths. Whether you&apos;re looking to advance your career, explore a new hobby, or
            gain cutting-edge skills, LearnHub has something for everyone.
          </p>
          <Link href="/courses">
            <Button size="lg">Explore Our Courses</Button>
          </Link>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="About LearnHub" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Why Choose LearnHub?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals and thought leaders in their respective fields.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-muted-foreground">Study at your own pace with lifetime access to course materials.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Diverse Course Catalog</h3>
            <p className="text-muted-foreground">
              Explore a wide range of subjects from technology to creative arts and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Founded in 2020, LearnHub started with a simple idea: to make quality education accessible to everyone,
          everywhere. What began as a small collection of coding courses has grown into a comprehensive learning
          platform serving millions of students worldwide.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Today, we continue to innovate and expand our offerings, partnering with top universities and companies to
          bring you the most relevant and up-to-date content. Our commitment to lifelong learning drives us to
          constantly improve and evolve, ensuring that LearnHub remains at the forefront of online education.
        </p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Join Our Learning Community</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Embark on your learning journey with LearnHub today and unlock your full potential.
        </p>
        <Link href="/register">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  )
}
