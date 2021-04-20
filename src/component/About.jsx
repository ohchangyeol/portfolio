import React from "react";
import myPhoto from "../img/about/my_photo.png";

const About = (reSizeWidth)=> {
    
  return (

    <div className="content_grid">
        <div className="my_photo">
            <img src={myPhoto}/>
        </div>
        <div className="about_me">
            <div className="my_name">
                <span>Oh Chang Yeol</span>
            </div>
            <div className="my_introduction">
                <div className="title">
                    <p><span>사용자가 불편함 없이 즐길 수 있도록</span></p>
                    <p><span>도와주는 </span><span className="introduction_roboto">Front-end </span><span>개발자 입니다.</span></p>
                </div>
                <div className="sub_text">
                    <span>웹 사이트를 제작할 때 사용자의 니즈를 분석하여<br/>
                    가장 기본적인 불편함을 개선하고자 합니다. <br/>
                    여기에 멈추지 않고 동료들과 소통하며 <br/>
                    재미와 편리함을 두루 갖춘 웹 사이트를 만들겠습니다. <br/>
                    코드를 짤 때 가장 중요하게 <br/>
                    생각하는 것은 가독성입니다. <br/>
                    직관적이고 간단하게 만드는 것이 목표입니다. <br/>
                    편리함에서 재미, 가독성에서 간단함까지 <br/>
                    한 단계씩 발전할 줄 아는 사람입니다. <br/>
                    스스로 front-end에 머무르지 않고 <br/>
                    풀스택 개발자로 성장해 나가겠습니다. <br/>
                    일을 즐기면서 하되, <br/>
                    무거운 책임감을 가진 개발자가 되겠습니다.</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
