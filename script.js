setTimeout(() => {
    let percent = 0;
    const interval = setInterval(() => {
      document.getElementById("percent").innerHTML = percent + "%";
      percent++;
      if (percent > 100) {
        clearInterval(interval);
      }
    }, 200);
  }, 2000);