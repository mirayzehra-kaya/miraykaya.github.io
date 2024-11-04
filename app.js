/* import { jsx, render } from 'nano-jsx';

const { useState, useEffect } = React;

const UserProfile = function (props) {
  return jsx`
    <div>
        <h3>User Profile</h3>
        <p>Name: ${props.name}</p>
        <p>City: ${props.city}</p>
    </div>
  `;
}

const PostList = function (props) {
  return jsx`
    <div>
      <h3>Posts</h3>
      <ul>
        ${props.posts.map(post => jsx`
          <li>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
          </li>
        `)}
      </ul>
    </div>
  `;
}

const ErrorMessage = function (props) {
  return jsx`<p style="color: red;">Failed to load data. Please try again later.</p>`;
}

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return jsx`
      <div>
        ${ErrorMessage({ message: error })}
      </div>
    `;
  }

  if (!user) {
    return jsx`
      <div>
        <p>Loading...</p>
      </div>
    `;
  }

  return jsx`
    <div>
      ${UserProfile({ name: user.name, city: user.address.city })}
      ${PostList({ posts: user.posts })}
    </div>
  `;
}

function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      return fetch(`https://jsonplaceholder.typicode.com/users/1/posts`)
        .then(response => response.json())
        .then(posts => ({ ...data, posts }));
    })
    .catch(error => {
      throw error;
    });
}

const app = document.getElementById('app');
render(<App />, app); */

const { jsx, render } = nanoJSX;

const ErrorMessage = function (props) {
  return jsx`<p style="color: red;">${props.message}</p>`;
}

const UserProfile = function (props) {
  return jsx`
    <div>
        <h3>User Profile</h3>
        <p>Name: ${props.name}</p>
        <p>City: ${props.city}</p>
    </div>
  `;
}

const PostList = function (props) {
  return jsx`
    <div>
      <h3>Posts</h3>
      <ul>
        ${props.posts.map(post => jsx`
          <li>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
          </li>
        `)}
      </ul>
    </div>
  `;
}

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    const posts = await postsResponse.json();
    return { user, posts };
  } catch (error) {
    throw error;
  }
}

fetchData().then(data => {
  const app = document.getElementById('app');
  render(jsx`
    ${UserProfile({ name: data.user.name, city: data.user.address.city })}
    ${PostList({ posts: data.posts })}
  `, app);
}).catch(error => {
  const app = document.getElementById('app');
  render(ErrorMessage({ message: 'Failed to load data. Please try again later.' }), app);
});