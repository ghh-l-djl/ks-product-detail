import { Swiper } from 'antd-mobile';
import './index.less';
type CarouselProp = {
  imageUrls: Array<string>
}
export default function Carousel(props: CarouselProp) {
  const { imageUrls } = props;
  const items = imageUrls.map((url, index) => (
    <Swiper.Item key={index}>
      <div className='content'>
        <img src={url} alt="swiper" />
      </div>
    </Swiper.Item>
  ))
  return (
    <div>
      <Swiper
        indicator={(total, current) => (
          <div className='customIndicator'>
            {`${current + 1} / ${total}`}
          </div>
        )}
      >
        {items}
      </Swiper>
    </div>
  )
}
