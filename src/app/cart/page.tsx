import { Button } from "@/components/ui/button"
import { Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  // Mock cart data - in a real app, this would come from a state management solution
  const cartItems = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      image: "/placeholder.svg?height=80&width=120",
      price: 89.99,
    },
    {
      id: "3",
      title: "React - The Complete Guide",
      instructor: "Maximilian Schwarzmüller",
      image: "/placeholder.svg?height=80&width=120",
      price: 84.99,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6 space-y-6">
                <h2 className="text-xl font-semibold mb-4">
                  {cartItems.length} Course{cartItems.length > 1 ? "s" : ""} in Cart
                </h2>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b last:border-0 last:pb-0">
                    <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">By {item.instructor}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                        <span className="font-bold">${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border shadow-sm">
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Order Summary</h2>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Checkout
                </Button>

                <div className="text-xs text-center text-muted-foreground">30-Day Money-Back Guarantee</div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border shadow-sm">
              <div className="p-6">
                <h3 className="font-medium mb-2">Have a coupon?</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any courses to your cart yet.</p>
          <Link href="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

