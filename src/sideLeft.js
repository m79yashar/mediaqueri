import img from './812931633242.jpg'
const SideUp = () => {
    return ( 
        <div className="SideContainer">
            <div className="SideUp">
                <img src={img} alt="" />
            </div>
            <div className="SideDown">
                <p>شماره تماس :<a href="">برای مشاهده شماره تماس کلیک کنید</a></p>
                <p>آدرس: خیابان خیام جنوبی 11, بین نسترن و هوشیار , پلاک 56</p>
                <div className='hamkari'>
                    <button>همکاری با ما</button> 
                    <p>مدیر آموزشگاه هستید؟</p> 
                      
                </div>
                <div className='valid'> 
                    <p>آیا اطلاعات آموزشگاه صحیح است؟</p>
                      <label htmlFor="yes">بله</label><input type="radio" id='yes' />
                      <label htmlFor="no">نه</label><input type="radio" id='no'/>
                </div>
                <button className='btbt'>درخواست مشاوره</button>
            </div>
        </div>
        
     );
}
 
export default SideUp;