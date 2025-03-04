import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Course {
  id: string
  title: string
  instructor: string
  image: string
  price: number
  rating: number
  reviewCount: number
  level: string
  category: string
  slug: string
}

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/courses/${course.slug}`}>
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold leading-tight line-clamp-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground">{course.instructor}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
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
            <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <Badge variant="secondary" className="px-2 py-0 text-xs">
              {course.level}
            </Badge>
            <Badge variant="outline" className="px-2 py-0 text-xs">
              {course.category}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="font-bold">${course.price.toFixed(2)}</div>
        </CardFooter>
      </Link>
    </Card>
  )
}

