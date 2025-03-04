import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CourseCard from "@/components/course-card"
import { popularCourses, categories } from "@/lib/data"
import image from "../images/home.jpeg"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Expand Your Knowledge with Our Courses
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Learn from industry experts and advance your career with our comprehensive courses.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/courses"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Browse Courses
                </Link>
                <Link
                  href="/register"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-xl border shadow-xl">
                <Image
                  src={image}
                  width={400}
                  height={400}
                  alt="Learning illustration"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-6 md:py-12 lg:py-16 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Course</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Search from thousands of courses to find exactly what you need.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses..." className="w-full bg-background pl-8 shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular Categories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our most popular course categories
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    {category.icon}
                  </div>
                  <div className="text-sm font-medium">{category.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular Courses</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our most popular and highly rated courses
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {popularCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/courses"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Students Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our students about their learning experience
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Web Development Student</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The courses are well-structured and the instructors are knowledgeable. I've learned so much in just
                    a few weeks!"
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">Michael Chen</p>
                      <p className="text-xs text-muted-foreground">Data Science Student</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The practical exercises and projects helped me apply what I learned immediately. Highly
                    recommended!"
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">Emily Rodriguez</p>
                      <p className="text-xs text-muted-foreground">UX Design Student</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The community support and instructor feedback made all the difference in my learning journey."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Learning?</h2>
              <p className="max-w-[700px] text-gray-200 md:text-xl">
                Join thousands of students and start your learning journey today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Sign Up Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-400 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

