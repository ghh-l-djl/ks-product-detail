import { TabBar,Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './index.less';
export default function Footer() {
    const navigate=useNavigate();
    const tabs = [
        {
            key: '/user',
            title: '个人主页',
            icon: <span className="iconfont">&#xe654;</span>,
        },
        {
            key: '/shop',
            title: '店铺',
            icon: <span className="iconfont">&#xe60e;</span>,
        },
        {
            key: '/service',
            title: '客服',
            icon: <span className="iconfont">&#xe60f;</span>,
        }
    ]

    return (
        <div className="footer">
            <TabBar onChange={(k)=>navigate(k)}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                ))}
            </TabBar>
            <div className="button-wrap">
                <Button shape='rounded'>领券购买</Button>
            </div>
        </div>
    )
}
