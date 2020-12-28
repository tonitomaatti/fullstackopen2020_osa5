import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Blog from './Blog'


describe('<Blog />' , () => {
  let component

  beforeEach(() => {
    const blog = {
      id: 1,
      title: 'A test blog title',
      author: 'Test Author',
      url: 'https://www.google.com',
      likes: 251,
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

  test('renders detailed info when clicked', () => {
    const button = component.getByText('view')
    fireEvent.click(button)

    const divDetails = component.container.querySelector('.blogDetails')
    expect(divDetails).not.toHaveStyle('display: none')

    expect(component.container).toHaveTextContent('Test Author')
    expect(component.container).toHaveTextContent('https://www.google.com')
    expect(component.container).toHaveTextContent('251')
  })

})