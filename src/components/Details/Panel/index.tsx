import { Card } from 'antd-mobile';
import './index.less';
export default function Panel() {
    const itmes = [
        {
            key: '品牌',
            value: '三木采菇仔'
        },
        {
            key: '是否为食盐',
            value: '否'
        },
        {
            key: '产地',
            value: '河北'
        },
        {
            key: '食品生产证编号',
            value: 'xxxxxxxxxxxxxxxxxx'
        },
        {
            key: '是否进口',
            value: '否'
        },
        {
            key: '净含量',
            value: '150克'
        },
        {
            key: '净含量',
            value: '150克'
        },
        {
            key: '保质期',
            value: '18'
        },
        {
            key: '规格包装',
            value: '罐装'
        },
    ]
    return (
        <Card className="panel-wrap">
            {
                itmes.map((item,index)=>(
                    <div className="item" key={index}>
                        <span className="key">{item.key}</span>
                        <span className="value">{item.value}</span>
                    </div>
                ))
            }
        </Card>
    )
}
