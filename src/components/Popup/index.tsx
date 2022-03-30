import { Popup,Divider } from 'antd-mobile'
import './index.less';
type Props={
    title:string,
    children:JSX.Element|undefined|string|Array<JSX.Element|string>,
    visible:boolean,
    handler:Function,
    type:'discount'|'service',
    withDivider?:boolean
}
export default function Pop(props:Props) {
    const {title,children,visible,handler,type,withDivider} = props;
    return (
        <Popup
            visible={visible}
            bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '70vh',
            }}
            bodyClassName='popup'
            onMaskClick={()=>handler({type:type+'_close'})}
        >
            <div className="head">
                <span className="title">{title}</span>
                <span className="iconfont cross" onClick={()=>handler({type:type+'_close'})}>&#xe600;</span>
            </div>
            {withDivider?<Divider />:''}
            <div className="children">
                {children}
            </div>
        </Popup>
    )
}
