import React, { useCallback } from "react"
import { useRouter } from "next/router"
import { auth } from "firebase-admin"
import { createUserWithEmailAndPassword } from "firebase/auth"
import Link from "next/link"

const EmailPasswordAuthSignUp = () => {
  const Router = useRouter()

  const signupHandler = useCallback(
    async (event) => {
      console.log("signupHandler called")
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        console.log(email.value, password.value)
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        Router.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [Router]
  )

  return (
    <div>
      <form
        onSubmit={signupHandler}

      >
        <div className="mb-4">
          <label

            htmlFor="email"
          >
            Email
          </label>
          <input

            name="email"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label

            htmlFor="password"
          >
            Password
          </label>
          <input

            name="password"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button

            type="submit"
          >
            Sign Up
          </button>
          <Link href="/login">
            <a >
              Login ?
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EmailPasswordAuthSignUp