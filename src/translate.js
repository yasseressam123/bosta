import LocalizedStrings from 'react-localization';
const Translate = ()=>{
  const Strings = new LocalizedStrings({
    en:{
      header:{
        Home: "Home",
        Pricing:"Pricing",
        ContactSales:"Contact Sales",
        TrackingShipment:"Tracking Shipment",
        Track:{
          Tracking:"Track Your Shipment",
          TrackNo : "Enter your tracking No."
        },
        HomePage:{
          title:"Please Enter your shipment number and Track your Shipment.",
          subTitle:"Track another shipment",
          placeholder:"Tracking No."
        },
        SignIn:"Sign in",
        lang:"عربي",
      },
      code:"en"
    },
    ar: {
      header:{
        Home:"الرئيسية",
        Pricing:"التسعير",
        ContactSales:"كلم المبيعات",
        TrackingShipment:"تتبع الشحنة",
        Track:{
          Tracking:"تتبع شحنتك",
          TrackNo : "أدخل رقم التتبع."
        },
        HomePage:{
          title:"الرجاء إدخال رقم الشحنة وتتبع شحنتك.",
          subTitle:"تتبع شحنة أخرى",
          placeholder:"رقم التعقب."
        },
        SignIn:"تسجيل الدخول",
        lang:"English",
      },
      code:"ar"
    }
   });
   let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en" ;
   Strings.setLanguage(lang);
    return Strings 
}

export default Translate;
