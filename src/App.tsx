import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
    {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋', },
      { type: 'paragraph', content: "I just uploaded a new project to my portfolio. It's a project I made during the NLW Return, an event by Rocketseat. The project is called DoctorCare 🚀"},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-01-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋', },
      { type: 'paragraph', content: "I just uploaded a new project to my portfolio. It's a project I made during the NLW Return, an event by Rocketseat. The project is called DoctorCare 🚀"},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-02-10 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}