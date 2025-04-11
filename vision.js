function speakInstructions() {
    const text = "Welcome to ImTech. Choose your vision level: Low Vision, Tunnel Vision, or Total Blindness.";
    const msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  }