import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SingleTag from 'components/SingleTag'
import { fetchTags } from 'redux/tags'

import './index.css'
import 'animate.css'


const Loading = () => (
  <h1 style={{ fontSize: 72, color: 'cyan' }}>Loading...</h1>
)


class Tags extends Component {

  componentDidMount() {
    this.props.fetchTags()
  }

  render() {

    const { tags } = this.props

    return (
      <div>
        {
          this.props.loading
            ? <Loading />
            : <div className="tag-wrapper animated fadeIn">
              {tags.map(item => <SingleTag key={item.id} data={item} />)}
            </div>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  tags: state.tags.data,
  loading: state.tags.isLoading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTags
    },
    dispatch
  )


Tags.propTypes = {
  tags: PropTypes.array,
  loading: PropTypes.bool
};


export default connect(mapStateToProps, mapDispatchToProps)(Tags)
