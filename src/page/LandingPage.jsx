import React from 'react'
import HeaderComponent from '../components/landingComponents/HeaderComponent'
import DetailsComponent from '../components/landingComponents/DetailsComponent'
import group1 from '../assets/images/Group1.png'
import group3 from '../assets/images/Group3.png'
import VideoDetailsComponent from '../components/landingComponents/VideoDetailsComponent'
import InformationContainerComponent from '../components/landingComponents/InformationContainerComponent'

import SliderCardsComponent from '../components/landingComponents/SliderCardsComponent'
import ReviewComponent from '../components/landingComponents/ReviewComponent'
import Footer from '../components/Uitily/Footer'
const LandingPage = () => {
  return (
    <>
      <HeaderComponent/>
      <DetailsComponent
        image={group1}
        title={'ماذا نقدم ف Schoolify ؟'}
      />
      <VideoDetailsComponent 
        title={'بناء القدرات وتطوير المهارات'} 
        paragrah={'تهتم المنصة ببناء القدرات وتطوير المهارات لدى الطلاب والمعلمين واولياء الامور عن طريق تقديم مناهج دراسية متخصصة لمساعتدتهم ف تحقيق اهدافهم التعلمية والحياتية'}
      />
      <DetailsComponent
        image2={group3}
        title={'بنوك  اسئلة وملخصات'}
        paragrah={
          `تتيح المنصة بنوك اسئلة وملخصات للعديد من مواد
          الدراسية لمساعدة الطلاب ف رفع مستواهم الدراسى`
        }
      />
      <InformationContainerComponent/>
      
      <SliderCardsComponent/>
      <ReviewComponent/>
      <Footer/>
    </>
  )
}

export default LandingPage