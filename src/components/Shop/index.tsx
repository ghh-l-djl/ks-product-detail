import { Card, Avatar, Button, Rate } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './index.less';
type ShopProps = {
  info: ShopInfo,
}
export default function ShopCard(props: ShopProps) {
  const { info } = props;
  const navigate=useNavigate();
  const { compScoreView:{ compScoreLabel, compScoreStars, scoreData } } = info;
  return (
    <Card className='shop-card' onClick={()=>navigate(`/shop/${info.shopId}`)}>
        <div className="shop">
          <Avatar src={info.avatar} className='shop-avatar' />
          <div className="shop-info">
            <div className="main">
              <div className='shop-name'>{info.shopName}</div>
              <div>{info.soldNewAmountDescV2} {info.soldNewAmountV2}</div>
            </div>
            <Button size='mini' shape='rounded'>进店逛逛</Button>
          </div>
        </div>
        <Card className="evaluation">
          <div className="title">
            {compScoreLabel}
            <Rate readOnly value={compScoreStars} />
          </div>
          <div className="score">
            {
              scoreData.map((item,index) =>
              (
                <div className="score-item" key={index}>
                  <div className='score-key'>{item.key}</div>
                  <div className='score-value'>{item.value}</div>
                </div>
              )
              )
            }
          </div>
        </Card>
      </Card>
  )
}
