import React from 'react'
import { Card, WhiteSpace, WingBlank} from 'antd-mobile'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class UserCard extends React.Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    handleClick(v) {
        // console.log(v)
        this.props.history.push(`/chat/${v._id}`)
    }

    render() {
        const Body = Card.Body
        return (
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userList.map(v => (
                    v.avatar ? (<Card 
                            key={v._id} 
                            onClick={() => this.handleClick(v).bind(this)}
                            >
                        <Card.Header
                            title={v.user}
                            thumb={require(`../img/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        >
                            
                        </Card.Header>
                        <Body>
                            {v.type == 'boss' ? <div>公司:{v.company}</div> : null}
                            {v.desc.split('\n').map(v => (
                                <div key={v}>{v}</div>
                            ))}
                            {v.type == 'boss' ? <div>薪资:{v.money}</div> : null}
                        </Body>
                        </Card>) : null
                ))}
            </WingBlank>
        )
    }
}

export default UserCard