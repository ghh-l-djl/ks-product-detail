import { useParams } from 'react-router-dom'
export default function Shop() {
    const params = useParams();
    return (
        <div style={{textAlign:'center',marginTop:300,fontSize:40}}>
            Shop{params.id}
        </div>
    )
}
