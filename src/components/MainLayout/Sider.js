import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

import { Link } from 'dva/router';

class Sider extends React.Component {
  state = {
    current: '1',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <Menu
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>在职人员</span></span>}>
            <Menu.Item key="1">人员列表</Menu.Item>
            <Menu.Item key="2">批量修改状态</Menu.Item>
            <Menu.Item key="3">批量增加</Menu.Item>
            <Menu.Item key="4">批量删除</Menu.Item>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>退休人员</span></span>}>
            <Menu.Item key="9"><Link to="/retiree">人员列表</Link></Menu.Item>
            <Menu.Item key="10">批量修改状态</Menu.Item>
            <Menu.Item key="11"><Link to="/retiree_add">批量增加</Link></Menu.Item>
            <Menu.Item key="12">批量删除</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sider;