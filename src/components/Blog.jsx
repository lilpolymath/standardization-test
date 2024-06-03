import styles from "./Blog.module.css";
import { images } from "../constants";
import { Chart, Clock, Next } from "./Icons";

const Blog = () => {
  return (
    <section className={styles.blogContainer}>
      <div className={styles.blogWrapper}>
        <div className={styles.blogHeader}>
          <h6>Practice Advice</h6>
          <h2>Featured Posts</h2>
        </div>
        <div className={styles.posts}>
          <div className={styles.blogPost}>
            <img src={images.post1} />
            <div className={styles.blogInfo}>
              <p>Google Trending New</p>
              <h4>Loudest à la Madison #1 (L &apos; integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It &apos;
                s only a keystroke away.
              </p>
              <p className={styles.blogDetails}>
                <span>
                  <Clock /> 22 April 2021
                </span>
                <span>
                  <Chart />
                  10 comments
                </span>
              </p>
              <p>Learn More</p>
            </div>
          </div>
          <div className={styles.blogPost}>
            <img src={images.post2} />
            <div className={styles.blogInfo}>
              <p>Google Trending New</p>
              <h4>Loudest à la Madison #1 (L &apos; integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It &apos;
                s only a keystroke away.
              </p>
              <p className={styles.blogDetails}>
                <span>
                  <Clock /> 22 April 2021
                </span>
                <span>
                  <Chart />
                  10 comments
                </span>
              </p>
              <p>Learn More</p>
            </div>
          </div>
          <div className={styles.blogPost}>
            <img src={images.post3} />
            <div className={styles.blogInfo}>
              <p>Google Trending New</p>
              <h4>Loudest à la Madison #1 (L &apos; integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It &apos;
                s only a keystroke away.
              </p>
              <p className={styles.blogDetails}>
                <span>
                  <Clock /> 22 April 2021
                </span>
                <span>
                  <Chart />
                  10 comments
                </span>
              </p>
              <a>
                Learn More <Next />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
