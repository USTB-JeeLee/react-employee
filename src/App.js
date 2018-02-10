import React from 'react'
import { Button, List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团,团长{boss}</h2>
        <Ying boss="this is zhangdamiao"></Ying>
        <Qi boss="顺德盛"></Qi>
      </div>
    )
  }
}

function Qi(props) {
  return <h2>骑兵连连长{props.boss}</h2>
}

class Ying extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '柱子', '王根生']
    }
    this.addSolder = this.addSolder.bind(this)
  }
  addSolder() {
    console.log('hello add solder')
    this.setState({
      solders: [...this.state.solders, '新兵蛋子' + Math.random()]
    })
  }
  componentWillMount() {
    console.log('组件马上就要加载了')
  }
  componentDidMount() {
    console.log('组件加载完毕')
  }
  render() {
    const Item = List.Item
    // const boss = '张大喵'
    return (
      <div>
        <h2>一营营长,{this.props.boss}</h2>
        <Button type="primary" onClick={this.addSolder}>新兵入伍</Button>  
        <List
          renderHeader={()=>'士兵列表'} className="my-list">
          {this.state.solders.map(v => <Item key={v}>{v}</Item>)}
        </List>
      </div>
    ) 
  }
}

export default App

