// to be able to use jsx facilities
const { jsx, render } = nanoJSX;

//this was given
const UserProfile = function (props) {
    return jsx`
      <div>
          <h3>User Profile</h3>
          <p>Name: ${props.name}</p>
      </div>
    `;
  }
  
  const PostList = function (props) {
    return jsx`
      <div>
        <h3>Posts</h3>
        <ul>
            <li>$</li>
        </ul>
      </div>
    `;
  }

let user; 
  fetch("https://jsonplaceholder.typicode.com/users/1")
.then(userResponse => userResponse.json())
.then(userResponse => {
   this.user.name = userResponse.name;
   this.user.address = userResponse.address;
   this.user.address.city = userResponse.address.city;
   

    const user  = {
        name: 'foo',
        address: {
          city: 'berlin',
        },
        posts: [
          {title: 'fooPost1', body: 'foo post body 1'},
          {title: 'barPost2', body: 'bar post body 2'},
        ]
      };
    
})
.then(data => console.log(data)) 
    .catch(error => {
        throw(error);
    }); 

    let posts; 
    
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(postResponse => postResponse.json())
    .then(postResponse => {
        
      this.posts = postResponse.posts;

    })
    .then(data => console.log(data)) 
        .catch(error => {
            throw(error);
        }); 


  const app = document.getElementById("app");

  render(jsx`
    ${UserProfile({ name: user.name, city: user.address.city })}
    ${PostList({ posts:user.posts })}
  `, app);
  
  
  const ErrorMessage = function (props) {
    return jsx`<p style="color: red;">Failed to load data. Please try again later.</p>`;
}


fetchData();

/* fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => console.log(response))
    .catch(error => console.error(error));*/

// for getting the user's data

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(userResponse => userResponse.json())
   .then(data => {console.log(data); return data} ) //can be extended to bring specific property from the object e.g. data.name
    .then(userResponse => {
        if(!userResponse.ok) {
        throw new Error("Promise failed");
        }}
    )
    .catch(error => {
        throw(error);
    }); 

// for getting the user's post data
fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(postResponse => postResponse.json())
    .then(data => console.log(data)) //can be extended to bring specific property from the object e.g. data.name
    .catch(error => {
        throw(error);
    }); 

console.log(test);


/* async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    }

    catch(error){
        console.error(error.message);
    }
} */


createInfo();

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(userResponse => userResponse.json())
.then(userResponse => {
    const info = document.createElement("p")
    app.appendChild(info)
    info.className = "data-info"
    const node = document.createTextNode(JSON.stringify(userResponse, null, 2));
    // if I want to insert single property, use response.name e.g rather than this "JSON.stringify(response, null, 2)"
    info.appendChild(node)
})
.then(data => console.log(data)) 
    .catch(error => {
        throw(error);
    }); 


    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(postResponse => postResponse.json())
    .then(postResponse => {
        const infoPost = document.createElement("p")
        app.appendChild(infoPost)
        infoPost.className = "data-info"
        const nodePost = document.createTextNode(JSON.stringify(postResponse, null, 2));
        // if I want to insert single property, use response.name e.g rather than this "JSON.stringify(response, null, 2)"
        //const node = document.createTextNode(postResponse.map(postResponse => postResponse.title + postResponse.body));
        infoPost.appendChild(nodePost)
    })
    .then(data => console.log(data)) 
        .catch(error => {
            throw(error);
        }); 