import Hero from './imgs/hero.png'
import Bottomicon from './icons/Group.svg'
import Listimg from './imgs/113.png'

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
        <div className='w-[1440px] mx-auto relative'>
            <img src={Hero} alt="" />
            <div className='w-[643px] h-[443px] bg-[#DFE9F4] p-[39px] absolute top-[155px] left-[707px] rounded-[10px]'>
                <p className='font-semibold text-[16px] text-[#333333] tracking-[3px]'>New Arrival</p>
                <h1 className='text-[#054C73] font-bold text-[52px] leading-[65px] w-[400px] mt-5'>Discover Our New Collection</h1>
                <p className='text-[#333333] font-medium text-[18px] leading-[39px] w-[500px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className='px-[72px] py-[25px] bg-[#054C73] text-white rounded-[50px] font-bold text-[18px] mt-7.5'>BUY NOW</button>
            </div>
            <div className='w-[1440px] h-[150px] bg-[#F2F5FF] flex justify-between items-center gap-[27px] px-30'>
                <div className='flex justify-between items-center gap-[27px]'>
                    <img src={Bottomicon} alt="" />
                    <div className=''>
                        <h4 className='text-[#333333] text-2xl font-semibold'>Free Delivery</h4>
                        <p className='text-[#333333] text-[16px] font-normal'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-[27px]'>
                    <img src={Bottomicon} alt="" />
                    <div className=''>
                        <h4 className='text-[#333333] text-2xl font-semibold'>Free Delivery</h4>
                        <p className='text-[#333333] text-[16px] font-normal'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-[27px]'>
                    <img src={Bottomicon} alt="" />
                    <div className=''>
                        <h4 className='text-[#333333] text-2xl font-semibold'>Free Delivery</h4>
                        <p className='text-[#333333] text-[16px] font-normal'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='mt-15 text-[#333333] text-[32px] font-bold'>Inspiration Collection</h2>
                <p className='mt-5 text-[#666666] text-[20px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <img className='mt-12.5' src={Listimg} alt="" />
            </div>
        </div>    
    )
}