import { useEffect,useState,createContext, useContext } from 'react';
import { getDetails } from '@/api';
import Carousel from '@/components/Carousel';
import Introduction from '@/components/Introduction';
import Comment from '@/components/Comments';
import Shop from '@/components/Shop';
import Details from '@/components/Details';
import Footer from '@/components/Footer';
import Discount from '@/components/Popup/Discount';
import Service from '@/components/Popup/Service';
import Guesslist from '@/components/GuessList';
import { Skeleton } from 'antd-mobile';

export default function Index() {
    const [imageUrls,setImageUrls]=useState([] as Array<string>);
    const [shopInformation,setShopInformation]=useState(
        {
            compScoreView: {
                scoreData: []
            }
        } as unknown as ShopInfo);
    const [detailInfo,setDetailInfo]=useState({
        detailImageUrls:[],
        details:''
    });
    const [productDetail,setProductDetail]=useState( {
        expressInfo:{},
        expressTemplate:{},
        serviceRule:{
            refundRuleVO:{}
        }
    } as unknown as ProductDetail);
    const [isGuessShow,setGuess] =useState(false);
    useEffect(() => {
        getDetails().then((res:any) => {
            const {productDetail,avatar,shopInfo,soldNewAmountDescV2,soldNewAmountV2,compScoreView} =res.data;
            const {detailImageUrls,details}=productDetail;
            setImageUrls(productDetail.imageUrls);
            setShopInformation({
                avatar,
                shopName:shopInfo.shopName,
                shopId:shopInfo.shopId,
                soldNewAmountDescV2,
                soldNewAmountV2,
                compScoreView
            });
            setProductDetail(productDetail);
            setDetailInfo({
                detailImageUrls,
                details
            })
        })
    }, []);
    return (
        <div className='index'>
            <div className="wrap">
                <div className="scroll">
                {
                    imageUrls.length
                    ?<Carousel imageUrls={imageUrls}/>
                    :<Skeleton.Title className='skeleton-swiper'/>
                }
                    <Introduction productDetail={productDetail}/>
                    <Comment />
                    <Shop info={shopInformation}/>
                    <Details info={detailInfo}/>
                    {
                        <Guesslist/>
                    }
                </div>
            </div>
            <Footer/>
            <Discount />
            <Service />
        </div>
    )
}
