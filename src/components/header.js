import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={"/dunktree-white.svg"} alt="Dunktree Logo" />
      </Link>
    </header>
  )
}
