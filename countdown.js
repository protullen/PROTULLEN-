function initializeCountdown(targetDateTime) {
  const targetDate = new Date(targetDateTime).getTime();
  const countdownElement = document.createElement('div');
  countdownElement.id = 'countdown';

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance >= 0) {
      const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-value">${years}</span>
          <span class="countdown-label">Years</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${months}</span>
          <span class="countdown-label">Months</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${days}</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${hours}</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${minutes}</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${seconds}</span>
          <span class="countdown-label">Seconds</span>
        </div>
      `;
    } else {
      countdownElement.innerHTML = '<p>Countdown expired</p>';
    }
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const countdownSection = document.getElementById('countdown');
  if (countdownSection) {
    countdownSection.appendChild(countdownElement);
  }
}

// Initialize the countdown with the target date and time
initializeCountdown('September 27, 2023 18:00:00');
