import Popup from '../index';
import { Tag } from 'antd-mobile';
import {useSelector} from 'react-redux';
import { RootState } from '@/store';
import {useToggleDiscount} from '@/store/action';
import './index.less';
export default function Discount() {
    const discountDetail = {
        price: 50,
        discount: {
            type: '品类券',
            title: '满49减10',
            rebate: 10
        },
    }
    let visible=useSelector((state:RootState)=>state.discountVisible);
    const toggleDiscount=useToggleDiscount();
    return (
        <Popup title='优惠明细' type='discount' visible={visible} handler={toggleDiscount} withDivider>
            <div className="original-price discount-item">
                <div className="key">
                    原价
                </div>
                <div className="value">
                    ￥<span className="price">{discountDetail.price}</span>
                </div>
            </div>
            <div className="discount discount-item">
                <div className="key">
                    <Tag
                        color='#eb4a69'
                        fill='outline'
                        style={{ '--background-color': '#fae2e4' }}
                    >
                        <span className="small">{discountDetail.discount.type}</span>
                    </Tag>
                    {discountDetail.discount.title}
                </div>
                <div className="value">
                    -￥<span className="price">{discountDetail.discount.rebate}</span>
                </div>
            </div>
            <div className="final-price">到手价 ￥<span className="price-num">{discountDetail.price - discountDetail.discount.rebate}</span></div>
        </Popup>
    )
}
