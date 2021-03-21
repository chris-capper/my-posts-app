import Head from 'next/head';

import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/1340045154007175168/1MvMNQg1_400x400.jpg"
          name="Chris Capper"
          tagline="Like Christopher Capper, but shorter!"
          role="Freelance Web Dev and Design @ my house"
        />

        <ul className={styles.posts}>
          <li>
            <Post 
            content="Hey, I'm a new post!" 
            date="3/17/2021" 
            />
          </li>
          <li>
            <Post 
              content="I’m working in Figma trying to design a new website that shows all of my tweets!" 
              date="3/17/2021" 
              />
          </li>
          <li>
            <Post 
            content="I’m working in Figma trying to design a new website that shows all of my tweets!" 
            date="3/17/2021" 
            />
          </li>
          <li>
            <Post 
            content="I’m working in Figma trying to design a new website that shows all of my tweets!" 
            date="3/17/2021" 
            />
          </li>
        </ul>
        
        <PostForm />

      </main>
    </div>
  )
}
