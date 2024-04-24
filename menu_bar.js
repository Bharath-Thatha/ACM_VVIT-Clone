class SplHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="menu_bar">
            <div class="vvit_logo">
                <a href="index.html"><img src="vvit_acm_logo.png" alt="err" id="img"></a>
            </div>
            <div><a href="index.html" id="home" class="white">Home</a></div>

            <div class="title"><a href="#" id="about" class="white">About Us <i class="fa-solid fa-caret-down"></i></a>
                <div class="outer_box">
                    <ul class="outer_list">
                        <li><a href="./AboutUsACM.html" id="about_acm" class="black" >ACM </a></li>
                        <li><a href="./AboutUsACM-W.html" id="about_acm-w" class="black" >ACM-W</a></li>
                        <li><a href="./AboutUsHEADS.html" id="about_heads" class="black" >HEADS</a></li>
                    </ul>
                </div>
            </div>
            <div class="title"><a href="#" class="white" id="members">Members <i class="fa-solid fa-caret-down"></i></a>
                <div class="outer_box">
                    <ul class="outer_list">
                        <li><a href="./Member_ACM.html" id="members_acm" class="black" >ACM </a></li>
                        <li><a href="./Member_ACM-W.html" id="members_acm-w" class="black">ACM-W</a></li>
                    </ul>
                </div>
            </div>
            <div class="title"><a href="#" class="white" id="private">Private Events <i class="fa-solid fa-caret-down"></i></a>
                <div class="outer_box">
                    <ul class="outer_list">
                        <li><a href="./PrivateEventsACM.html" id="private_acm" class="black" >ACM </a></li>
                        <li><a href="./PrivateEventsACM-W.html" id="private_acm-w" class="black" >ACM-W</a></li>
                    </ul>
                </div>
            </div>
            <div class="title"><a href="#" class="white" id="public">Public Events <i class="fa-solid fa-caret-down"></i></a>
                <div class="outer_box">
                    <ul class="outer_list">
                        <li><a href="Spardha.html" class="black" id="spardha">Spardha</a></li>
                        <li><a href="AAVEGA.html" class="black" id="aavega">AAVEGA</a></li>
                        <li><a href="viva_vvit.html" class="black" id="viva_vvit">VIVA VVIT</a></li>
                    </ul>
                </div>
            </div>    
            <div class="title"><a href="#" class="white" id="calendar">Calendar <i class="fa-solid fa-caret-down"></i></a>
                <div class="outer_box">
                    <ul class="outer_list">
                        <li><a href="./CalendarACM.html" class="black" id="calendar_acm">ACM </a></li>
                        <li><a href="./CalendarACM-W.html" class="black" id="calendar_acm-w">ACM-W</a></li>
                    </ul>
                </div>
            </div>
            <div class="title">
                <a href="#">Contact Us </a>
                <a href="https://www.facebook.com/vvitacm.1/"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/acm_vvit/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/AcmVvit?s=08" ><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UC9ISck3zjhdRDnhQUUsETdg"><i class="fa-brands fa-youtube"></i></a>         
            </div>   
        </div>
        `
    }
}


class SplFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
        `
        <div class="foot">
            <div class="foot_items">
                <img src="vvit_logo.png" alt="err">
            </div>
            <div class="foot_items">
                <div>
                    <i class="fa-solid fa-house-chimney"></i>   
                </div>
                <div class="content">
                    Vasireddy Venkatadri Institute of Technology <br/>
                    Nambur (V)<br/>
                    Peda Kakani (Md)<br/>
                    Guntur (Dt)<br/>
                    Andhra Pradesh<br/>
                    522508.<br/>
                </div>
            </div>
            <div class="foot_items">
                <div>
                    <i class="fa-solid fa-phone"></i> 
                </div>
                <div class="content">
                    (0863)2263339<br/>
                </div>
            </div>
            <div class="foot_items">
                <div>
                    <i class="fa-solid fa-phone"></i> 
                </div>
                <div class="content">
                    6304250600 (VVIT)<br/>
                </div>
            </div>

            <div class="foot_items">
                <div>
                    <i class="fa-regular fa-envelope"></i> 
                </div>
                <div class="content">
                    acm.vvit@gmail.com<br/>
                </div>
            </div>
            <div class="foot_items">
                <div>
                    <i class="fa-solid fa-earth-americas"></i> 
                </div>
                <div class="content">
                    acm.vvitguntur.com<br/>
                </div>
            </div>
        </div>
        <div id="copyright">
            <label> © Copyright 2024 ACM Student Chapter Joomla Templates by JoomDev</label>
        </div>
        `
    }
}

customElements.define('my-header',SplHeader)
customElements.define('my-footer',SplFooter)
