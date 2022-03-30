import axios, { AxiosPromise } from 'axios';
const http = axios.create({
    baseURL: 'https://www.fastmock.site/mock/8b5ee3a644cabfb32a3f7f3ec6a89aad/base'
});
const tmp = {
    itemId: 394793069395,
    retryLimit: true,
    carrierType: 0,
    guarantee: false,
    installWechat: false,
    installAlipay: false,
    installWechatSdk: false,
    installAlipaySdk: false,
    installUnionPaySdk: false,
    sigCatVer: 1,
};
export function getDetails(params = tmp) {
    return http({
        method: 'GET',
        url: '/details',
        params,
    });

}
export type List = Array<{
    pic: string;
    title: string;
    discount: string;
    price: number;
    sale: number;
    id:string;
}>


type Data = {
    data:{
        list: List;
        hasMore: boolean;
    }
}

export function getGuess(page: number): AxiosPromise<Data> {
    return http({
        method: 'GET',
        url: '/guess',
        params: { page },
    });
}
