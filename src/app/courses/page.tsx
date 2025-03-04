"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search } from "lucide-react"
import CourseCard from "@/components/course-card"
import { allCourses } from "@/lib/data"
import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function CoursesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredCourses = allCourses.slice(0, 5) // Assuming the first 5 courses are featured

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Browse All Courses</h1>
        <p className="text-muted-foreground">
          Discover our wide range of courses and find the perfect one for your learning journey.
        </p>
      </div>

      {/* Featured Courses Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Courses</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {featuredCourses.map((course, index) => (
              <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <CourseCard course={course} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        {/* Filters */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">Search</h3>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search courses..." className="w-full bg-background pl-8 shadow-sm" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Category</h3>
            <Select defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="mobile-development">Mobile Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Level</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="beginner" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="beginner" className="text-sm">
                  Beginner
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="intermediate" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="intermediate" className="text-sm">
                  Intermediate
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="advanced" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="advanced" className="text-sm">
                  Advanced
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Price Range</h3>
            <div className="space-y-4">
              <Slider defaultValue={[100]} max={200} step={1} />
              <div className="flex items-center justify-between">
                <span className="text-sm">$0</span>
                <span className="text-sm">$200</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Rating</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rating-4" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="rating-4" className="text-sm">
                  4+ Stars
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rating-3" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="rating-3" className="text-sm">
                  3+ Stars
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rating-2" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="rating-2" className="text-sm">
                  2+ Stars
                </label>
              </div>
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-800">Apply Filters</Button>
        </div>

        {/* Course Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-sm text-muted-foreground">Showing {allCourses.length} results</span>
            </div>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="icon" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

