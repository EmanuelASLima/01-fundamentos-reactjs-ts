import { Header } from "./components/Header";
import Post from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/EmanuelASLima.png",
      name: "Manel",
      role: "Professor",
    },
    content: [
      { type: "paragraph", content: "Possas crer!" },
      { type: "paragraph", content: "Vai dar certo meu chapa!" },
      { type: "paragraph", content: "Tamo Junto!!!" },
      { type: "link", content: "manel.com" },
    ],
    publishedAt: new Date(),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/EmanuelASLima.png",
      name: "Sara",
      role: "Professora",
    },
    content: [
      { type: "paragraph", content: "Possas crer pvt!" },
      { type: "paragraph", content: "Vai dar certo meu parceiro!" },
      { type: "paragraph", content: "Tamo Junto!!!" },
      { type: "link", content: "sara.com" },
    ],
    publishedAt: new Date("2025-03-25 14:56:00"),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
