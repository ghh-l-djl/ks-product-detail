import Popup from '../index';
import { Button } from 'antd-mobile'
import './index.less';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useToggleService } from '@/store/action';
import { Link } from 'react-router-dom'
export default function Discount() {
    let visible = useSelector((state: RootState) => state.serviceVisible);
    const toggleService = useToggleService();
    const items = [
        {
            key: '退货补运费',
            detail: {
                title: '查看详情',
                link: '/refunddescription'
            },
            value: `确认收货后7天内申请退货退款，将获得退货补偿运费(生效情况以下单显示为准,补偿运费金额以退货显示为准)`
        },
        {
            key: '假一赔九',
            value: `材质保真,假一赔九`
        },
        {
            key: '支持7天无理由退货(拆封后不支持)',
            value: `商品支持7天无理由退货，商品密封包装拆开后不支持无理由退货`
        },
        {
            key: '已交保证金',
            value: `商家已向平台缴纳保证金，交易产生纠纷时用于保证买家的权益`
        },
        {
            key: '资质保障',
            detail: {
                title: '查看资质证明',
                link: '/qualification'
            },
            value: `商家已向平台提交经营执照、许可资质等相关资质证明`
        },
        {
            key: '极速退款',
            value: `下单成功6小时内,订单待发货状态下，提交退款申请立即退款`
        },
    ]
    return (
        <Popup title='服务保障' type='service' visible={visible} handler={toggleService}>
            <div className="service-body">
                {
                    items.map((item, index) => (
                        <div className="service-item" key={index}>
                            <div className="item">
                                <span className="iconfont">&#xe684;</span>
                                <div className="right">
                                    <div className="item-title">
                                        <div className="info">{item.key}</div>
                                        {
                                            item.detail
                                                ? <div className="more-info">
                                                    <Link to={item.detail.link}>
                                                        {item.detail.title}
                                                        <span className="iconfont">&#xe7eb;</span>
                                                    </Link>
                                                </div>
                                                : ''
                                        }
                                    </div>
                                    <div className="item-body">
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
            <Button shape='rounded' onClick={() => toggleService({ type: 'service_close' })}>知道了</Button>
        </Popup>
    )
}
