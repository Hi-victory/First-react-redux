import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPostsAction } from '../actions/post_action';
import  store  from '../store'
class PostList extends Component {
  state = {
    datalist:[
      { label:'你是', value:0},
      { label:'我是', value:1},
      { label:'他是', value:2}
    ],

  }
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  componentDidMount() {
    store.dispatch(loadPostsAction)
  }
  render() {
    console.log ( this.props )
    const { list } = this.props.post
    const { count } = this.props.counter
    return (
      <div>
        <span onClick={()=>{this.props.HandleSub(count)}}>{count}</span>
          {list.map(post=>{
            return (<li key={post.id}>{post.title}</li>)
          })}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
    counter:state.counter
  }
}
const mapDispatchProps = dispatch =>({
  HandleSub:(data)=>{
    dispatch({
      type:'COUNT_ADD',data
    })
  }
})

// 通过connect连接组件和redux数据,传递state数据和dispatch方法
export default connect(mapStateToProps,mapDispatchProps)(PostList);
