/**Dependencies */
import React, { Component } from 'react'
import { connect } from 'react-redux'

/**Other components */
import VideoPlayer from '../../player/containers/video-player'
import NotFound from '../components/not-found'


class Video extends Component {

  render () {
    const { existId, id } = this.props

    if (existId)
    {
      return (
        <VideoPlayer
          id={ id }
        />
      )
    }

    return <NotFound />
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params
  return {
    existId: state.get('data').get('entities').get('media').has(id),
    id
  }
}

export default connect(mapStateToProps)(Video)
