import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, BarChart, Award, CheckCircle, Play, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { allCourses } from "@/lib/data"

interface CoursePageProps {
  params: {
    slug: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  // In a real app, you would fetch this data from an API
  const course = allCourses.find((course) => course.slug === params.slug) || allCourses[0]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Course Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
            <p className="mt-2 text-xl text-muted-foreground">
              Learn everything you need to know about {course.category}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-1">
                <span className="font-medium text-amber-500">{course.rating.toFixed(1)}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(course.rating) ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({course.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Badge variant="secondary">{course.level}</Badge>
                <Badge variant="outline">{course.category}</Badge>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                Created by{" "}
                <Link href="#" className="text-primary hover:underline">
                  {course.instructor}
                </Link>
              </p>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="icon" className="h-16 w-16 rounded-full">
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div>
                <h3 className="text-xl font-bold">About This Course</h3>
                <p className="mt-2 text-muted-foreground">
                  This comprehensive course will take you from beginner to advanced in {course.category}. Whether you're
                  just starting out or looking to enhance your skills, this course has everything you need.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">What You'll Learn</h3>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {[...Array(6)].map((_, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                      <span>Key learning point {i + 1} for this course</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Requirements</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Basic understanding of computers</li>
                  <li>No prior experience in {course.category} needed</li>
                  <li>Willingness to learn and practice</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="space-y-4 pt-4">
              <div>
                <h3 className="text-xl font-bold">Course Content</h3>
                <p className="mt-2 text-sm text-muted-foreground">15 sections • 150 lectures • 24h 30m total length</p>
              </div>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="rounded-lg border">
                    <div className="flex items-center justify-between p-4">
                      <div className="font-medium">
                        Section {i + 1}: Introduction to {course.category}
                      </div>
                      <div className="text-sm text-muted-foreground">5 lectures • 45 min</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4 pt-4">
              <div>
                <h3 className="text-xl font-bold">Student Reviews</h3>
                <div className="mt-2 flex items-center gap-4">
                  <div className="text-5xl font-bold">{course.rating.toFixed(1)}</div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(course.rating) ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Course Rating • {course.reviewCount} Reviews</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div>
                        <div className="font-medium">Student Name</div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className={`h-4 w-4 ${
                                j < 5 - (i % 2) ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      This course was exactly what I needed to advance my skills in {course.category}. The instructor
                      explains complex concepts in an easy-to-understand way.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Course Sidebar */}
        <div className="md:sticky md:top-20 h-fit">
          <div className="rounded-lg border shadow-sm">
            <div className="p-6 space-y-4">
              <div className="text-3xl font-bold">${course.price.toFixed(2)}</div>
              <div className="space-y-2">
                <Button className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
              </div>
              <div className="text-sm text-center text-muted-foreground">30-Day Money-Back Guarantee</div>
              <div className="space-y-2">
                <h3 className="font-medium">This course includes:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-muted-foreground" />
                    <span>24.5 hours on-demand video</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span>150 lessons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                    <span>15 coding exercises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Share this course</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                    <span className="sr-only">Share on Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                    <span className="sr-only">Share on Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                    <span className="sr-only">Share on LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

