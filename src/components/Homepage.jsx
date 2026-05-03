import Hero from './imgs/hero.png'

export default function Header(){
    return(
        <div className='container'>
            <nav className='h-[123px] flex justify-between items-center'>
                <h1 className ="text-[#054C73] text-[34px] font-bold">Furniture</h1>
                <ul className='w-[567px] flex justify-between items-center font-semibold text-[14px] text-[#212230]'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Doctors</li>
                    <li>Products</li>
                    <li>Gallery</li>
                </ul>
            </nav>
        </div>
    )
}

export function Herosection(){
    return(
        <div className='w-[1440px] mx-auto'>
            <img src={Hero} alt="" />
            <div className='w-[643px] h-[443px] bg-[#DFE9F4] p-[39px]'>
                <p>New Arrival</p>
                <h1>Discover Our New Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button>BUY NOW</button>
            </div>
        </div>    
    )
}