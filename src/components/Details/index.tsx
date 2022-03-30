import { Card, ImageViewer, Image } from 'antd-mobile';
import Panel from './Panel';
import './index.less';
type DetailsProp = {
  info: DetailInfo
}

export default function Details(props: DetailsProp) {
  const { info } = props;
  const { detailImageUrls, details } = info;
  return (
    <div className="detail">
      <Card className='details-card'>
        <p className="title">商品详情</p>
        <p className="detail-info">{details}</p>
        <Panel />
      </Card>
      {
        detailImageUrls.map((url, index) => (
          <Image src={url} key={index} onClick={() => {
            ImageViewer.Multi.show({ images: detailImageUrls })
          }} />
        ))
      }
      <Image src='https://i.bmp.ovh/imgs/2022/03/c927fcc8296e4557.png' />
    </div>

  )
}
