import React from 'react'
import { create } from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ImageTheatreInfo from '../info'

describe('ImageTheatre Component', () => {

  it('should match snapshot with null', () => {
    const tree = create(
      <ImageTheatreInfo
        showInfo={false}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with complete details', () => {
    const tree = create(
      <Router>
        <ImageTheatreInfo
          showInfo
          username='takkar'
          link='/'
          time='1518972814710'
        />
      </Router>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

})
