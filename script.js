function selectVision(level) {
  if (level === 'blind') {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance("Welcome to ImTech. You have selected Total Blindness. You will now be redirected to the login and signup page. Please follow voice instructions.");
    synth.speak(utterance);
    setTimeout(() => window.location.href = 'login.html', 7000);
  } else {
    window.location.href = 'login.html';
  }
}