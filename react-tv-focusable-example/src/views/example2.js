import React, { useState, useEffect } from "react";
import '../common/public.css';

export default function Example2(){
    const [active,setActive] = useState(0)
    useEffect(() => {
        window.$tv.offsetDistance = 50;
        window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[9]'))
    },[])

    const skip1 = () => {
        setActive(1)
        window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[55]'))
    }

    const skip2 = () => {
        setActive(2)
        window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/span[20]'), false);
    }


    let lists = [];
    for (let i = 0; i < 105; i++) {
        lists.push(<span className="span" r-focusable="" key={i}> {i + 1} </span>)
    }

    return <div className="example2-out">
            ie浏览器上是不可以使用getElementByPath获取el的哦<br />
            <span className={active === 1 ? 'btn active' : 'btn'} onClick={() => skip1()}>动效跳到第55个div</span> <br /> <br />
            <span className={active === 2 ? 'btn active' : 'btn'} onClick={() => skip2()}>没有动效跳到第20个div</span>
            <div className="demo">
                {lists}
            </div>
        </div>
        
}
