setInterval(function(){
  if(!navigator.onLine){
    document.body.classList.add("offline-checker--osiris-14c069d0-6e03-4ef7-99c0-233ea7b034ab") 
  }else{
    document.body.classList.remove("offline-checker--osiris-14c069d0-6e03-4ef7-99c0-233ea7b034ab")
  }
},1000);