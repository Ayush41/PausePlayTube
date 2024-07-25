document.addEventListener('visibilitychange', () => {
    const video = document.querySelector('video');
    if (video) {
      if (document.hidden) {
        video.pause();
      } else {
        video.play();
      }
    }
  });
  