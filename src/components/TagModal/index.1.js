import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import './index.css'


class TagModal extends Component {


  handleTotalSentiments = obj => {
    return Object.values(obj).reduce((a, b) => a + b)
  }


  render() {
    
    const { data } = this.props
    const { sentiment } = this.props.data

    const pageTypeList = Object.keys(data.pageType).join(', ')

    return (
      this.props.isModalOpen &&
      <Fragment>
        <div
          className="tag-modal-overlay"
          onClick={this.props.closeModal}
        >
        </div>

        <div className="tag-modal-info">
          <button onClick={this.props.closeModal}>✖</button>
          <ul style={{ color: this.props.tagColor }} className="animated fadeIn">
            <li><h1>{data.label}</h1></li>
            <li>Total mentions: {this.handleTotalSentiments(sentiment)}</li>
            <li>Positive mentions: {sentiment.positive || 0}</li>
            <li>Neutral mentions: {sentiment.neutral || 0}</li>
            <li>Negative mentions: {sentiment.negative || 0}</li>
            <li>List of page types: {pageTypeList}</li>
          </ul>
        </div>
      </Fragment>
    )
  }
}


TagModal.propTypes = {
  data: PropTypes.object,
  tagColor: PropTypes.string,
  closeModal: PropTypes.func
};


export default TagModal
