/**
 * Created by k186 on 2020/4/24.
 */
import React, { Component } from "react"
import '../App.css';
import { connect } from "react-redux"
import { Button,Input } from 'antd'
import  store  from '../store'

class TodoList extends Component {
    componentDidMount () {

    }

  render () {
    return (
      <div className="TodoLists">
       <Input type="text" size="large"/>
       <Button type='primary' style={{marginLeft:"20px"}} size="large">新增</Button>
      </div> )
  }
}
//yarn upgrade caniuse-lite browserslist


const mapStateToProps = ( state ) => {
  return {}
}

export default connect ( mapStateToProps ) ( TodoList )

