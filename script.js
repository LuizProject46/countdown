

  const date = '1 jan 2021';
  const day =  document.getElementById('value-days')
  const hour = document.getElementById('value-hour')
  const minute = document.getElementById('value-min')
  const second = document.getElementById('value-sec')
  
  countdown = ()=>{
    const newYear = new Date(date).getTime() / 1000;
    const currentTime = new Date().getTime() / 1000;
    
    const totalSeconds = (newYear - currentTime);
  
    const days = Math.floor((totalSeconds / 3600) / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    day.innerHTML = days
    hour.innerHTML =  hours
    minute.innerHTML = minutes
    second.innerHTML =  seconds
    
    
    
  }
  
  setInterval(()=>{
    countdown();
  },1000);
  countdown()


