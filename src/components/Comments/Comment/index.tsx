import { Avatar, Image, Ellipsis } from 'antd-mobile';
import './index.less';
export default function Comment() {
    const comments = [
        {
            avatar_url: '',
            nickname: '匿名用户',
            comment: '非常实用，宝宝用着非常方便，质量不错，物美价廉值得购买。',
            image_url: [
                'https://i.bmp.ovh/imgs/2022/03/5b7702b94ba4e5b1.png',
            ]
        },
        {
            avatar_url: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            nickname: 'ls_lr',
            comment: '该用户没有填写评价，但认为该商品值得购买',
            image_url:
                [
                    'https://s3.bmp.ovh/imgs/2022/03/8b94ba9ee89c4dd5.png',
                    'https://s3.bmp.ovh/imgs/2022/03/fbce0b93c332b613.png',
                    'https://s3.bmp.ovh/imgs/2022/03/02f01fd4aa2bbc8c.png',
                    'https://s3.bmp.ovh/imgs/2022/03/eedc8fc3e5147f25.png',
                    'https://s3.bmp.ovh/imgs/2022/03/04ad214158e0aa3c.png',
                    'https://s3.bmp.ovh/imgs/2022/03/d4f1b083c5d0297c.png'
                ]
        },
    ];
    
    return (
        <div className="comment">
            {
                comments.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="user">
                            <Avatar src={item.avatar_url} className='user-avatar' />
                            <span className="name">{item.nickname}</span>
                        </div>
                        <Ellipsis direction='end' content={item.comment} rows={2} className="comment-content" />

                        <div className="image">
                            {
                                item.image_url.length <= 4
                                    ? item.image_url.map((url, index) => (
                                        <Image lazy src={url} key={index} />
                                    ))
                                    : item.image_url.slice(0, 4).map((url, index) => (
                                        index !== 3
                                            ? <Image lazy src={url} key={index} />
                                            : (
                                                <div className="comment-image-wrap" key={index}>
                                                    <Image lazy src={url} />
                                                    <div className="overlay">共{item.image_url.length}张图</div>
                                                </div>
                                            )
                                    ))

                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
