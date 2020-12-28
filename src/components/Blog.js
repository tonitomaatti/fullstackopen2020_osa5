import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [fullView, setFullView] = useState(false)

  const toggleFullView = () => {
    setFullView(!fullView)
  }

  const visibility = { display: fullView ? '' : 'none' }

  const label = fullView ? 'hide' : 'view' 
  
  return (
    <div>
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
