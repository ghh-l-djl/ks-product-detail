import { Image, Ellipsis, Tag } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './index.less';
type Props = {
  data: {
    pic: string;
    title: string;
    discount: string;
    sale: number;
    price: number;
    id:string
  }
}
export default function GuessCard(props: Props) {
  const { data } = props;
  const navigate=useNavigate();
  return (
    <div className='guess-card' onClick={()=>navigate(`/shop/${data.id}`)}>
      <Image src={data.pic} />
      <div className="guess-card-info">
        <Ellipsis rows={2} content={data.title} />
        <Tag
            color='#ea4a68'
            fill='outline'
          >
            {data.discount}
          </Tag>
        <div className="price-sale">
          <div className="price">￥{data.price.toFixed(1)}</div>
          <div className="sale">已售{data.sale}</div>
        </div>
      </div>
    </div>
  )
}
