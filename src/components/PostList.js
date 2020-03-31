import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"
const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>Our Stories.Inc</h1>
      <h4>universal blog</h4>
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