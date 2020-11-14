// Custom scripts for the Spyder website

;(function () {
  'use strict'

  /* Top-level variables */
  var buttonData = {
    win: {
      text: 'Download for Windows',
      icon: ['fab', 'fa-windows'],
      url: 'https://github.com/spyder-ide/spyder/releases/latest/download/Spyder_64bit_full.exe'
    },
    mac: {
      text: 'Download for macOS',
      icon: ['fab', 'fa-apple'],
      url: 'https://github.com/spyder-ide/spyder/releases/latest/download/Spyder.dmg'
    },
    linux: {
      text: 'Download for Linux (Anaconda)',
      icon: ['fab', 'fa-linux'],
      url: 'https://www.anaconda.com/download/'
    },
    other: {
      text: 'Download Spyder',
      icon: ['fas', 'fa-download'],
      url: 'https://github.com/spyder-ide/spyder/releases/latest'
    }
  }

  /* Helper functions */

  // Get the key corresponding to the current desktop operating system
  function getOSName () {
    var platform = navigator.platform
    if (!platform) {
      return 'other'
    };
    if (platform.indexOf('Win') === 0) {
      return 'win'
    };
    if (platform.indexOf('Mac') === 0) {
      return 'mac'
    };
    if ((platform.indexOf('Linux') === 0 || platform.indexOf('X11') === 0) &&
          !platform.match(/android/i) && !navigator.userAgent.match(/android/i)) {
      return 'linux'
    };
    return 'other'
  };

  // Get the button data corresponding to the current OS
  function getButtonData () {
    var osName = getOSName()
    return buttonData[osName]
  };

  /* Main functions */

  // Setup download button based on current OS
  function setupDownloadButton (downloadButton) {
    var buttonData = getButtonData()
    downloadButton.href = buttonData.url
    downloadButton.getElementsByClassName('download-text')[0].textContent = buttonData.text
    for (var i = 0; i < buttonData.icon.length; i++) {
      downloadButton.getElementsByClassName('download-os-icon')[0].classList.add(buttonData.icon[i])
    };
  };

  /* Fire events */

  // On initial DOM ready, set up the tour and the version dropdown
  document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById('download-button-button')
    if (downloadButton) {
      setupDownloadButton(downloadButton)
    };
  })
}())
