function toggleVoice() {
    fetch("/stop_voice", {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        console.log("Voice assistant stopped.");
      })
      .catch(error => {
        console.error("Error stopping voice assistant:", error);
      });
  }
  