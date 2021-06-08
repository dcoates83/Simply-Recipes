import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Quick and Simple Recipes.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              quae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              suscipit minus labore voluptatem, fuga tenetur?
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in a bowl"
            className="about-img"
            placeholder="tracedSVG"
          ></StaticImage>
          <article></article>
        </section>
      </main>
    </Layout>
  )
}

export default About
