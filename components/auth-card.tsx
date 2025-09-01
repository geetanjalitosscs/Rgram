"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { RgramLogo } from "./rgram-logo"

export function AuthCard() {
  return (
    <div className="space-y-3" aria-label="Rgram sign up">
      <Card className="border border-slate-200 shadow-sm">
        <CardContent className="pt-8">
          <p className="mb-5 text-center text-sm text-neutral-600">
            Create your account and start sharing your world with Rgram.
          </p>

          <div className="space-y-4">
            {/* Social sign up - Google (distinct from Instagram) */}
            <Button className="w-full bg-white text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-100">
              <img src="/images/google.jpg" alt="Google" className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-neutral-500">OR</span>
              <Separator className="flex-1" />
            </div>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()} aria-label="Create account form">
              <label htmlFor="emailOrPhone" className="sr-only">
                Mobile Number or Email
              </label>
              <Input
                id="emailOrPhone"
                placeholder="Mobile Number or Email"
                type="text"
                required
                className="focus-visible:ring-indigo-500"
              />

              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                required
                className="focus-visible:ring-indigo-500"
              />

              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <Input
                id="fullName"
                placeholder="Full Name"
                type="text"
                required
                className="focus-visible:ring-indigo-500"
              />

              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <Input
                id="username"
                placeholder="Username"
                type="text"
                required
                className="focus-visible:ring-indigo-500"
              />

              <p className="px-2 text-center text-[11px] leading-5 text-neutral-500">
                By signing up, you agree to our{" "}
                <a href="#" className="underline underline-offset-2">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="underline underline-offset-2">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-2">
                  Cookies Policy
                </a>
                .
              </p>

              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                Create account
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-slate-200">
        <CardContent className="py-4 text-center text-sm">
          Have an account?{" "}
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Log in
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
