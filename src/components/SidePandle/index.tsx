import './index.css'
import svg from '../../assets/react.svg'
export default function SidePandle() {
    return (
        <div className="SideBar">
            <div className='Title'>MallShop</div>
            <SquareBar name='广场' />
            <SquareBar name='分类' />
            <SquareBar name='关注' />
        </div>

    )
}

function SquareBar(props: { name: string }) {
    return (
        <div className='Square'>
            <img src={svg} alt="" className='SquareImg' />
            <div className="SquareText">
                {props.name}
            </div>
        </div>

    )
}
