# PausePlayTube

PausePlayTube is a Chrome extension designed to enhance your YouTube viewing experience. It automatically pauses YouTube videos when you switch tabs or windows and resumes playback when you return. This helps ensure you don't miss any content when multitasking.

## Features

- **Automatic Pause**: Pauses YouTube videos when the tab or window is changed.
- **Seamless Playback**: Resumes video playback when you return to the YouTube tab or window.
- **Lightweight and Simple**: Easy to use with minimal setup required.

## Installation

### Load the Extension in Chrome

1. **Open Chrome** and navigate to `chrome://extensions/`.
2. **Enable "Developer mode"** by toggling the switch in the top-right corner.
3. **Click "Load unpacked"** and select the directory where you downloaded or cloned the extension code.
4. The extension should now be loaded and active. You can verify this by checking the list of extensions on the `chrome://extensions/` page.

### Start Using the Extension

Once loaded, the extension will automatically start working. To test it:

1. Play a YouTube video.
2. Switch to a different tab or window.
3. Return to the YouTube tab or window.

The video should pause when you switch tabs or windows and resume playing when you return.

## How It Works

PausePlayTube uses JavaScript to detect when the user switches tabs or windows and interacts with the YouTube player. The extension listens for tab and window focus changes and sends commands to the YouTube player to pause or play the video accordingly.

## Development

If you want to contribute or modify the extension, follow these steps:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/YourUsername/PausePlayTube.git
