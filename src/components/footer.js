import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  var year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-left">
        <ul className="social-links">
          <li>
            <a
              href="https://linkedin.com/dunktree"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dunktree"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dunktree"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <small>
          &copy; Copyright Dunktree<sup>&reg;</sup> {year}
        </small>
        <br />
        <small>
          <Link to="/terms">Terms &amp; Conditions</Link> |{" "}
          <Link to="/privacy">Privacy</Link>
        </small>
      </div>
    </footer>
  )
}
