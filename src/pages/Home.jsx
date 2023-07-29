import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { aboutBg, blue1, blue2, blue3, blue4, chra1blue, chra1white, chra2blue, chra2white, chra3blue, chra3white, chra4blue, chra4white, homeBg, project1, project2, project3, project4, white1, white2, white3, white4 } from '../assets';

const Home = () => {
  
  const homeBanner =[
    {
      id:1,
      img:homeBg,
      alt:"Test 1",
      text1:"Hər zaman böyük işlər",
      text2:"Yüksək dözümlü metal konstruksiyaların istehsalı istehlakçıların məmnuniyyəti deməkdir.",
      button1link:"/contact",
      button2link:"/about"
    },
    {
      id:2,
      img:homeBg,
      alt:"Test 1",
      text1:"Hər zaman böyük işlər",
      text2:"Yüksək dözümlü metal konstruksiyaların istehsalı istehlakçıların məmnuniyyəti deməkdir.",
      button1link:"/contact",
      button2link:"/about"
    },
  ]

  const services =[
    {
      id:1,
      imgBlue:blue1,
      imgWhite:white1,
      name:"Anbar binaları",
      title:"İstehsalat anbarları, ərzaq anbarları və soyuq hava depoları",
      slug:"/services/anbar-binalari"
    },
    {
      id:2,
      imgBlue:blue2,
      imgWhite:white2,
      name:"Təmir-tikinti işləri",
      title:"Metal,dəmir beton konstruksiyaların işlənməsi,dam örtüklərinin vurulması",
      slug:"/services/temir-tikinti-isleri"
    },
    {
      id:3,
      imgBlue:blue3,
      imgWhite:white3,
      name:"Heyvandarlıq kompleksləri",
      title:"İribuynuzlu heyvanların saxlanılması üçün fermalar",
      slug:"/services/heyvandarliq-kompleksleri"
    },
    {
      id:4,
      imgBlue:blue4,
      imgWhite:white4,
      name:"İstehsalat sahələri",
      title:"İstehsalat anbarları, ərzaq anbarları və soyuq hava depoları",
      slug:"/services/istehsalat-saheleri"
    },
  ]

  const about ={
    id:1,
    img:aboutBg,
    text:"2006-cı ildən müxtəlif şirkətlərlə birlikdə fəaliyyət göstərən,dəmirin gücü ilə gücünə güc qatan Metalcon şirkəti 2021-ci ildə fərdi fəaliyyətinə başlamışdır. Fərdi şəkildə fəaliyyət göstərdiyi bu qısa zaman kəsiyində şirkətimiz bir çox layihələrdə özünü doğrultmuş, təhvil alınan işləri müvəffəqiyyətlə başa vuraraq istehlakçıların böyük rəğbətini qazanmışdır.Bu yola çıxarkan ən böyük hədəfi sizlərin məmnuniyyəti olan şirkətimizin qurulmasında əsas məqsəd təbiəti qoruyaraq keyfiyyətli metal konstruksiyaların istehsalında öncül şirkət olmaq, sizlərə daha yaxşı xidmət etməkdir.",
    textblue:"Dəmirin",
    textblack:"Gücü",
    textblue2:"METALCON",
    textblack2:"HAQQINDA",
    slug:"/about"
  }
  const  characteristics =[
    {
      id:1,
      text1:"Uzunömürlülük",
      text2:"Şirkətimizin məhsullarının keyﬁyyətli olması layihələrimizin uzunömürlü olmasına gətirib çıxarır.Məhsullarımızın uzunömürlü olmasına hər zaman zəmanət verilir.",
      imgblue:chra1blue,
      imgblue:chra1white,
    },
    {
      id:2,
      text1:"Yüksək keyfiyyət",
      text2:"İstehsalat prosesi zamanı Metalcon şirkəti yüksək keyﬁyyətə önəm verir. Keyﬁyyətimiz hər zaman bizim fərqimiz olacaqdır.",
      imgblue:chra2blue,
      imgblue:chra2white,
    },
    {
      id:3,
      text1:"Dözümlülük",
      text2:"Yüksək dözümlü metal konstruksiyaların istehsalı istehlakçıların məmnuniyyəti deməkdir.",
      imgblue:chra3blue,
      imgblue:chra3white,
    },
    {
      id:4,
      text1:"Müştəri ilə ünsiyyət",
      text2:"Müştəri ilə ünsiyyətdə diqqətli olmaq, müştərilərin tələbatlarını yaxından incələmək.",
      imgblue:chra4blue,
      imgblue:chra4white,
    }
  ]

  const projects=[
    {
      id:1,
      text:"İdman zalı və stadion 1",
      image:project1,
      slug:"/projects/idman-zali-ve-stadion-1",
    },
    {
      id:2,
      text:"İdman zalı və stadion 2",
      image:project2,
      slug:"/projects/idman-zali-ve-stadion-2",
    },
    {
      id:3,
      text:"İdman zalı və stadion 3",
      image:project3,
      slug:"/projects/idman-zali-ve-stadion-3",
    },
    {
      id:4,
      text:"İdman zalı və stadion 4",
      image:project4,
      slug:"/projects/idman-zali-ve-stadion-4",
    },
  ]

  return (
    <>
     
    </>
  )
}

export default Home
