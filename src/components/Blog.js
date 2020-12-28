import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [fullView, setFullView] = useState(false)

  const toggleFullView = () => {
    setFullView(!fullView)
  }

  const visibility = { display: fullView ? '' : 'none' }

  const label = fullView ? 'hide' : 'view'

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  
  return (
    <div style={blogStyle}>
      <div>
        {blog.title}
        <button onClick={toggleFullView}>{label}</button>
      </div>
      <div style={visibility}>{blog.url}</div>
      <div style={visibility}>
        {blog.likes}
        <button>like</button>
      </div>
      <div style={visibility}>{blog.author}</div>
    </div>
  )
}

export default Blog
