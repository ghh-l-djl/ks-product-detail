import { Card, Divider, Skeleton } from 'antd-mobile';
import { useToggleDiscount, useToggleService } from '@/store/action'
import './index.less'
type Props = {
  productDetail: ProductDetail
}

export default function Introduction(props: Props) {
  const { productDetail } = props;
  console.log('productDetail: ', productDetail);
  const { title, price, promotedPrice, expressTemplate, expressInfo, serviceRule: { refundRuleVO } } = productDetail;
  const toggleDiscount = useToggleDiscount();
  const toggleService = useToggleService();
  return (
    <div className="introduction">
      {title
        ?
        (<Card className='introduction'>
          <div className="price" onClick={() => toggleDiscount({ type: 'discount_open' })}>
            <div>￥<span>{price / 100 || ''}</span></div>
            <div className='promote'>预估到手价 ￥<span>{promotedPrice / 100 || ''}</span><span className="iconfont">&#xe7eb;</span> </div>
          </div>
          <div className="title">{title}</div>
          <Divider />
          <div className='return' onClick={() => toggleService({ type: 'service_open' })}>
            <span>{refundRuleVO.title} · 极速退款</span>
            <span className="right iconfont">&#xe7eb;</span>
          </div>
          <Divider />
          <div className="address">{`${expressInfo.deliveryDesc}从${expressTemplate.sendProvinceName}${expressTemplate.sendCityName}发货`}</div>
        </Card>)
        :
        <>
        <Skeleton.Title className='skeleton-introduction-button'/>
        <Skeleton.Paragraph className='skeleton-introduction' animated lineCount={4} />
        </>
      }
    </div>
  )
}
