 let phoneCheck = document.getElementById("checkversion");
 const userDevice = navigator.appVersion;
 phoneCheck.textContent = userDevice;

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