// IPP Dental Landing Page Logic

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const cardContainer = document.getElementById('form-card-container');

  if (contactForm && cardContainer) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.form-submit');
      const originalBtnText = submitBtn.textContent;

      // Loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error || 'Failed to send');

        showSuccessState(cardContainer, formData.name);
      } catch (error) {
        console.error('Form error:', error);

        let errorMsg = cardContainer.querySelector('.form-error-msg');
        if (!errorMsg) {
          errorMsg = document.createElement('p');
          errorMsg.className = 'form-error-msg';
          errorMsg.style.cssText = 'color:#d32f2f; font-size:13px; margin-top:12px; font-weight:500;';
          contactForm.appendChild(errorMsg);
        }
        errorMsg.textContent = 'Something went wrong. Please email hello@ipp-dental.com directly.';

        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = '1';
      }
    });
  }
});

function showSuccessState(container, userName) {
  const firstName = userName.split(' ')[0];
  container.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:340px; text-align:center;">
      <div style="width:64px; height:64px; border-radius:50%; background:rgba(37,117,176,0.1); display:flex; align-items:center; justify-content:center; margin-bottom:24px; color:var(--brand-primary);">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 style="font-size:24px; font-weight:800; color:var(--text-primary); margin-bottom:8px;">Thank you, ${firstName}!</h3>
      <p style="font-size:15px; color:var(--text-secondary); max-width:280px; line-height:1.6;">
        We received your message and will get back to you within one business day.
      </p>
    </div>
  `;
}
