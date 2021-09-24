console.log('Hello from external summary js file');

const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for (const blog of blogs) {
  // console.log(blog);
  blog.style.backgroundColor = 'steelblue';
  blog.style.color = 'white';
}


const specialBlog = document.getElementById('special-blog');
// specialBlog.innerText = "This is special blog";
specialBlog.innerHTML = `
  <h4>Special Inner HTML</h4>
  <div>
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
  </div>`;


// document.querySelectorAll('p'); 
// In browser console output = NodeList(5) [p, p, p, p#special-blog, p]
// document.querySelector('p'); 


const friends = document.getElementById('friends');
// console.log(friends.childNodes);
// console.log(friends.children);
const fifth = friends.children[4];
// console.log(fifth);
friends.removeChild(fifth);


// create element
const newFriend = document.createElement('li');
newFriend.innerText = 'Friend-11';
friends.appendChild(newFriend);


