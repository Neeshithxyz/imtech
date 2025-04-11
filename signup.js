function adjustForMode() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');

  if (mode === 'low') {
    document.body.style.backgroundColor = '#e0f2fe';
  } else if (mode === 'tunnel') {
    const form = document.querySelector('.form-container');
    form.style.margin = 'auto';
    form.style.width = '300px';
  } else if (mode === 'blind') {
    const text = "This is voice-based sign up. Please speak your desired username and password.";
    const msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  }

  const loginLink = document.getElementById("loginRedirect");
  if (loginLink && mode) loginLink.href = `login.html?mode=${mode}`;
}