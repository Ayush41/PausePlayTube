chrome.tabs.onActivated.addListener(pauseYouTubeVideo);
chrome.windows.onFocusChanged.addListener(pauseYouTubeVideo);

function pauseYouTubeVideo() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const tab = tabs[0];
      if (tab.url.includes("youtube.com/watch")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: pauseVideo
        });
      }
    }
  });
}

function pauseVideo() {
  const video = document.querySelector('video');
  if (video && !document.hidden) {
    video.pause();
  }
}

function playVideo() {
    const video = document.querySelector('video');
    if (video) {
      video.play();
    }
  }
  
  