// 1) SEVERAL React Components | 1! file
/*function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}


export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}*/

// 2) EACH React Component | it's OWN file
import Gallery from './Gallery.js';
import TodoList from './TodoList.js';
import PackingList  from './PackingList';
import List from './List';
import TeaSet from './TeaSet';

export default function App() {
  return (
    <>
      <Gallery />
      <TodoList />
      <PackingList />
      <List />
      <TeaSet />
    </>
  );
}