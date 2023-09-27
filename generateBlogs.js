// import values or api endpoints from the blog posts-
// extract the header of those blogs posts
// extract the body of those blog posts
// fill the blog-navigation boxes with this information
// overflow will be hidden

async function fetchBlogs() {
  
  const blog = 'gorhgo3.github.io/blog/'

  const blogEndpoints = [
    'emotional-intelligence.html',
    'html-css.html',
    'identity-values.html',
    'javascript-dom.html',
    'learning-plan.html',
    'neuroplasticity.html',
    'problem-solving.html',
    'te-houtaewa-template.html',
    'te-whare-tapa-wha.html',
  ]

  const test = fetch('blog/' + blogEndpoints[2])
    .then((response) => response.text())
    .then((data) => {
      // const header = data.querySelector('.blog-header')
      console.log(data);
    })
}

fetchBlogs()
