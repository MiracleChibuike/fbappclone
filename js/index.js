 let phoneCheck = document.getElementById("checkversion");
 var userDevice = navigator.userAgentData.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"
]);
const userCheck = navigator.appVersion;
var check = navigator.userAgent;
 phoneCheck.textContent = check;

//  const userAgent = navigator.userAgent;
//  const deviceName = {
//     ipad: /ipad/.test(userAgent),
//     iphone: /iphone/.test(userAgent),
//     Android: /Android/.test(userAgent)
//  }
//  if (deviceName.ipad) {
//     phoneCheck.textContent = `You are ${ipad} on this device`
//  }else if(deviceName.iphone){
//     phoneCheck.textContent = iphone.test(userAgent)
//  }
//  else if(deviceName.Android){
//     phoneCheck.textContent = Android.test(userAgent)
//  }