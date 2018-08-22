/**
 * @authors 2387698637@qq.com
 * @date    2018-08-20 16:42:19
 * @description 主入口模块
 */

import React from 'react';
import { render } from 'react-dom';

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面
import myCard from './components/fetch.js'
import myTable from './components/table.js'

const ACTIVE = { color :'red'}

// 配置导航
class Slider extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    // 此时点击的导航项
    /*handleClick = (e) =>{
        this.setState({
            current:e.key
        })
    }*/
    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    // 调用getUser()
    componentDidMount() {
        this.getUser()
    }

    // username赋值
    getUser = () => {
        this.setState({
            username: 'Richard'
        })
    }

    render(){
        return(
            <div>
                <div id="leftMenu">
                    <img src='src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                          onClick={this.handleClick}
                          style={{ width:185}}
                          defaultOpenKeys={["sub1","sub2"]}
                          defaultSelectedKeys={[this.state.current]}
                          mode="inline"
                    >
                       <SubMenu key="sub1" title={<span><Icon type="mail" /><span>插件</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myChart">图表</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myCalendar">日历</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>其他</span></span>}>
                            <Menu.Item key="5"><Link to="/myCard">导航</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/myAnimate">关注</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="right-box">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

// 配置路由
render((
    <Router history={hashHistory}>
        <Route path="/" component={Slider}>
            <IndexRoute path="myCard" component={myCard}/>
            <Route path="myTable" component={myTable} />
            <Route path="myCard" component={myCard} />
        </Route>
    </Router>
),document.getElementById('app'));
