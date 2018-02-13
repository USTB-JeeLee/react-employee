import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Card, WhiteSpace, WingBlank} from 'antd-mobile'
import { getUserList } from '../../redux/chat.redux'
import UserCard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Genius extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // axios.get('/user/list?type=genius').then(res => {
        //     if (res.data.code == 0) {
        //         this.setState({data: res.data.data})
        //     }
        // })
        this.props.getUserList('genius')
    }
    render() {
        const Body = Card.Body
        return <UserCard userList={this.props.userList}></UserCard>
    }
}

export default Genius