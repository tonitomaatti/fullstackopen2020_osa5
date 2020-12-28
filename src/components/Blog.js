import React, { useState } from 'react'

const Blog = ({ blog, likeBlog, currentUser, removeBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [fullView, setFullView] = useState(false)

  const toggleFullView = () => {
    setFullView(!fullView)
  }

  const visibility = { display: fullView ? '' : 'none' }

  const label = fullView ? 'hide' : 'view'

  const showRemove = { display: currentUser === blog.user.username ? '' : 'none' }

  const like = () => {
    likeBlog(
      {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        user: blog.user,
        likes: blog.likes + 1
      },
      blog.id
    )
  }

  const remove = () => {
    removeBlog(blog.id)
  }
  
  return (
    <div style={blogStyle}>
      <div>
        {blog.title}
        <button onClick={toggleFullView}>{label}</button>
      </div>
      <div style={visibility}>
        <div>{blog.url}</div>
        <div>
          {blog.likes}
          <button onClick={like}>like</button>
        </div>
        <div>{blog.author}</div>
        <div style={showRemove}>
          <button onClick={remove}>remove</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
