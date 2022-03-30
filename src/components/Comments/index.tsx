import './index.less';
import {Card} from 'antd-mobile';
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';
export default function Comments() {
    const navigate = useNavigate();
    return (
        <Card className='comment-card' onClick={() => navigate('/comments')}>
            <div className="head">
                <p className="title">商品评价</p>
                <span className="right iconfont">&#xe7eb;</span>
            </div>
            <Comment />
        </Card>
    )
}
