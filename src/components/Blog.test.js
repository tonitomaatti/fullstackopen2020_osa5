import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'


describe('<Blog />' , () => {
  let component

  beforeEach(() => {
    const blog = {
      id: 1,
      title: 'A test blog title',
      author: 'Test Author',
      url: 'https://www.google.com',
      likes: 2,
      user: { name:'test name', username: 'test_username', token:'test_token' }
    }

    const mockLikeBlog = jest.fn()
    const mockRemoveBlog = jest.fn()

    component = render(
      <Blog
        key={blog.id}
        blog={blog}
        likeBlog={mockLikeBlog}
        currentUser={'test_username'}
        removeBlog={mockRemoveBlog}
      />
    )
  })

  test('renders only blog title by default', () => {

    const divTitle = component.container.querySelector('.blogTitle')
    expect(divTitle).toHaveTextContent(
      'A test blog title'
    )

    const divDetails = component.container.querySelector('.blogDetails')
    expect(divDetails).toHaveStyle('display: none')
  })

})