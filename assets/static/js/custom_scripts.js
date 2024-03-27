// Custom scripts for the Spyder website

(function () {
  "use strict";

  /* Top-level variables */
  const buttonsData = {
    win: [
      {
        id: "download-windows",
        text: "Download for Windows",
        icon: ["fab", "fa-windows"],
        url: "https://github.com/spyder-ide/spyder/releases/latest/download/Spyder_64bit_full.exe",
      },
    ],
    mac: [
      {
        id: "download-mac-m1",
        text: "Download for macOS (M1)",
        icon: ["fab", "fa-apple"],
        url: "https://github.com/spyder-ide/spyder/releases/latest/download/Spyder_arm64.dmg",
      },
      {
        id: "download-mac-intel",
        text: "Download for macOS (Intel)",
        icon: ["fab", "fa-apple"],
        url: "https://github.com/spyder-ide/spyder/releases/latest/download/Spyder.dmg",
      },
    ],
    linux: [
      {
        id: "download-linux",
        text: "Download for Linux (Anaconda)",
        icon: ["fab", "fa-linux"],
        url: "https://www.anaconda.com/download/",
      },
    ],
    other: [
      {
        id: "download-other",
        text: "Download Spyder",
        icon: ["fas", "fa-download"],
        url: "https://github.com/spyder-ide/spyder/releases/latest",
      },
    ],
  };

  /* Helper functions */

  // Get the key corresponding to the current desktop operating system
  function getOSName() {
    const platform = navigator.platform;
    if (!platform) {
      return "other";
    }
    if (platform.indexOf("Win") === 0) {
      return "win";
    }
    if (platform.indexOf("Mac") === 0) {
      return "mac";
    }
    if (
      (platform.indexOf("Linux") === 0 || platform.indexOf("X11") === 0) &&
      !platform.match(/android/i) &&
      !navigator.userAgent.match(/android/i)
    ) {
      return "linux";
    }
    return "other";
  }

  // Get the button data corresponding to the current OS
  function getButtonsData() {
    const osName = getOSName();
    return buttonsData[osName];
  }

  // Create the download button nodes from a prototype
  function createDownloadButton(templateButton, buttonData) {
    const newButton = templateButton.cloneNode(true);
    newButton.id = buttonData.id;
    newButton.href = buttonData.url;
    newButton.getElementsByClassName("download-text")[0].textContent =
      buttonData.text;
    for (const icon of buttonData.icon) {
      newButton
        .getElementsByClassName("download-os-icon")[0]
        .classList.add(icon);
    }
    return newButton;
  }

  /* Main functions */

  // Set up download button based on current OS
  function setupDownloadButton(downloadButton) {
    const downloadButtonContainer = document.createElement("div");
    downloadButtonContainer.id = "download-buttons-container";
    for (const buttonData of getButtonsData()) {
      const newButton = createDownloadButton(downloadButton, buttonData);
      downloadButtonContainer.appendChild(newButton);
    }
    downloadButton.replaceWith(downloadButtonContainer);
  }

  /* Fire events */

  // On initial DOM ready, set up the tour and the version dropdown
  document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("download-buttons-button");
    if (downloadButton) {
      setupDownloadButton(downloadButton);
    }
  });
})();
