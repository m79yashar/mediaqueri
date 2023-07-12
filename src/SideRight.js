import logo from './logo.png'

const SideRight = () => {
    return ( 
        <div className="side-right">
            <div className="rightUp">
                <div className="rightUp-left">
                    <img src={logo} alt="logo"  />
                    <b><h1>آموزشگاه زبان های خارجه اوستا</h1></b>
                </div>
                <div className="rightUp-right">
                    <button>مشاهده دوره ها</button>
                    <h3>بازدید 1630</h3>
                    <h4>خیام</h4>
                </div>
            </div>
            <div className="rightDown">
                <h2>:درباره آموزشگاه</h2>
                <h4> شروع ترم تابستان کلاس های زبان فرانسه توسط اساتید مجرب دانشگاه فردوسی استاد خزایی-استاد بایگی- استاد بخشندگان</h4>
                <h4>-دوره های عمومی مبتدی تا پیشرفته و نوجوانان</h4>
                <h4>-دوره های امادگی آزمون TEF</h4>
                <h4>دوره Tef express ویژه کسانی که زمان زیادی برای شرکت در آزمون ندارند-</h4>
            </div>
            
        </div>
     );
}
 
export default SideRight;