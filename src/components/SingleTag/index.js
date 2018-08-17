import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import TagModal from 'components/TagModal'

import './index.css'


class SingleTag extends Component {

  state = {
    isModalOpen: false,
  };


  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
    this.props.history.push('/')
  }


  render() {

    const { data } = this.props
    const { isModalOpen } = this.state


    let tagColor
    if (data.sentimentScore < 51) {
      tagColor = '#32CD32'
    } else if (data.sentimentScore < 81) {
      tagColor = '#007800'
    } else {
      tagColor = '#2E8B57'
    }


    return (
      <Fragment>

        <Link
          to={`/${data.id}`}
          className="single-tag"
          style={{ fontSize: data.sentimentScore / 2.5, color: tagColor }}
          onClick={this.openModal}
        >
          {data.label}
        </Link>

        <TagModal
          isModalOpen={isModalOpen}
          closeModal={this.closeModal}
          data={data}
          tagColor={tagColor}
        />

      </Fragment>
    )
  }
}


SingleTag.propTypes = {
  data: PropTypes.object
};


export default withRouter(SingleTag)
