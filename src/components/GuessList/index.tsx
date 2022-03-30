import './index.less';
import GuessCard from '@/components/GuessCard';
import { InfiniteScroll } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { getGuess, List } from '@/api';
export default function Guesslist() {
    const [list, setList] = useState([] as unknown as List);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const loadMore = async () => {
        const res = await getGuess(page);
        setPage(page+1)
        setList(val => [...val, ...res.data.data.list])
        setHasMore(res.data.data.hasMore);
    };
    useEffect(() => {
        getGuess(page).then((res) => {
            console.log('res: ', res.data);
            setPage(page+1)
            setList(val => [...val, ...res.data.data.list])
            setHasMore(res.data.data.hasMore);
        })
    }, []);
    return (
        <div>
            <div className="guess-header">
                <span className="iconfont">&#xe62e;</span>
                猜你喜欢
            </div>
            <div className="guess-body">
                <div className="left">
                    {
                        list.filter((_, index) => index % 2 === 0).map((item, index) => (
                            <GuessCard data={item} key={index} />

                        ))
                    }
                </div>
                <div className="right">
                    {
                        list.filter((_, index) => index % 2).map((item, index) => (
                            <GuessCard data={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} >
                {
                    hasMore
                        ? ''
                        :
                        <div className="no-more">没有更多内容了</div>
                }
            </InfiniteScroll>
        </div>
    )
}
