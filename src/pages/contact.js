import React from "react"
import Layout from "../components/Layout"

function Contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              libero sequi reprehenderit repellendus inventore iste eaque ullam
              accusantium odio mollitia?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              quidem rerum, voluptate eius provident sed qui odit obcaecati
              ducimus quod!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              neque excepturi expedita? Qui voluptatem quia quod minus at?
              Culpa, aliquam!
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="Email">Your Email</label>
                <input type="text" name="Email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
