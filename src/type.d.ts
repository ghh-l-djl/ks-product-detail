
type ShopInfo = {
    avatar: string,
    shopName: string,
    soldNewAmountDescV2: string,
    soldNewAmountV2: string,
    shopId:number
    compScoreView: {
        compScoreLabel: string,
        compScoreStars: number,
        scoreData: Array<{
            key: string,
            value: number
        }>
    }
}
type ProductDetail =
    {
        title: string,
        price: number,
        promotedPrice: number,
        expressTemplate: {
            id: number;
            name: string;
            sellerId: number;
            calType: number;
            sendProvinceCode: number;
            sendProvinceName: string;
            sendCityCode: number;
            sendCityName: string;
            sendDistrictCode: number;
            sendDistrictName: string;
            sendTime: number;
            used: boolean;
            status: number;
            sourceType: number;
            deleteTime: number;
            config: string;
            createTime: number;
            updateTime: number;
        },
        expressInfo: {
            deliveryDesc: string
        },
        expressFee: number,
        serviceRule: {
            refundRuleVO: {
                code: string;
                title: string;
                text: string;
            }
        }

    }
type DetailInfo={
    detailImageUrls:Array<string>,
    details:string
}