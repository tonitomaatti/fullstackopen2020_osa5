import React from 'react'

const BlogForm = ({ 
  onSubmit,
  newTitle,
  handleTitleChange,
  newAuthor,
  handleAuthorChange,
  newUrl,
  handleUrlChange
  }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">title:</label>
        <input
          id="title"
          value={newTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="author">author:</label>
        <input
          id="author"
          value={newAuthor}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        <label htmlFor="url">url:</label>
        <input
          id="url"
          value={newUrl}
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">create</button>
    </form>  
    </div>
  )
}

export default BlogForm