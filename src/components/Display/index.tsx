import { NavBar } from "antd-mobile";
import { useNavigate } from 'react-router-dom';
import './index.less';
type Props={
    title:string,
    children:Array<JSX.Element|string>|JSX.Element|string|undefined
}
export default function RefoundDescription(props:Props) {
    const {title,children}=props;
    const navigate = useNavigate();
    return (
        <div className="description">
            <NavBar onBack={() => navigate(-1)}>{title}</NavBar>
            <div className="description-body">
                {children}
            </div>
        </div>
    )
}
