import { useMemo, useState } from 'react';
import './App.css';
import {createTodos, filterTodos } from "./utils";
import TodoList from './TodoList.js';

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
      <>
        <button onClick={() => setTab('all')}>
          All
        </button>
        <button onClick={() => setTab('active')}>
          Active
        </button>
        <button onClick={() => setTab('completed')}>
          Completed
        </button>
        <br />
        <label>
          <input
              type="checkbox"
              checked={isDark}
              onChange={e => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
        <hr />
        <TodoList
            todos={todos}
            tab={tab}
            theme={isDark ? 'dark' : 'light'}
        />
      </>
  );
}
