import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"
import NavBar from "./NavBar"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>Our Stories.Us</h1>
      <h4>universal blog</h4>
      <NavBar/>
      <br></br>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
