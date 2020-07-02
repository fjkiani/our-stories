import React from "react"
import Layout from "../components/layout"
import styles from "../css/newsLetter.css"

 



const Write = () => {
    return (
      <Layout>
        <section className="newsletter-page">
        <div className="page-center">
          <h2>We would love to have your story featured on Our-Stories!</h2>
          <h4>Feel free to include details below and we will reach out</h4>
          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control "
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your email"
              required

            />
              <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Title of your story"
              required

            />
            <button type="submit" className="btn form-control submit-btn">
              contact
            </button>
          </form>
        </div>
      </section>
      </Layout>
    )
}

export default Write