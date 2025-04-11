function adjustForMode() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');

  if (mode === 'low') {
    document.body.style.backgroundColor = '#f0fdf4';
    document.body.style.color = '#111827';
  } else if (mode === 'tunnel') {
    const form = document.querySelector('.form-container');
    form.style.margin = 'auto';
    form.style.width = '300px';
  } else if (mode === 'blind') {
    const text = "This is voice-based login. Please speak your username and password.";
    const msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  }

  // Add current mode to sign-up link
  const signupLink = document.getElementById("signupRedirect");
  if (signupLink && mode) signupLink.href = `signup.html?mode=${mode}`;
}