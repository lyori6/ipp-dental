// IPP Dental Landing Page Logic

// Replace with your deployed Google Apps Script URL
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynwsNXaLTUoAHKcfMnY26GMSM735YBTDJsM7cJPmLjRa4AfrmasARySH1D7yqCOKGdUQ/exec';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const cardContainer = document.getElementById('form-card-container');

  if (contactForm && cardContainer) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.form-submit');
      const originalBtnText = submitBtn.textContent;
      
      // Loading State
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';

      // Gather Data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      try {
        if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_SCRIPT_URL') {
          throw new Error('Google Apps Script URL is not configured.');
        }

        const response = await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors', // Standard CORS mode for simple Apps Script deployment
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        // Since mode is 'no-cors', we won't be able to read the response body,
        // but if it didn't throw an error, it succeeded.
        showSuccessState(cardContainer, formData.name);
      } catch (error) {
        console.error('Error submitting form:', error);
        
        // Show user-friendly inline error
        let errorMsg = cardContainer.querySelector('.form-error-msg');
        if (!errorMsg) {
          errorMsg = document.createElement('p');
          errorMsg.className = 'form-error-msg';
          errorMsg.style.color = '#d32f2f';
          errorMsg.style.fontSize = '13px';
          errorMsg.style.marginTop = '12px';
          errorMsg.style.fontWeight = '500';
          contactForm.appendChild(errorMsg);
        }
        
        if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_SCRIPT_URL') {
          errorMsg.textContent = 'Configuration needed: Please set your Google Apps Script URL in main.js.';
        } else {
          errorMsg.textContent = 'Something went wrong. Please try again or email Hello@ipp-dental.com.';
        }

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = '1';
      }
    });
  }
});

// Beautiful custom success message state
function showSuccessState(container, userName) {
  const firstName = userName.split(' ')[0];
  container.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 340px; text-align: center; animation: fadeIn 0.4s ease forwards;">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(37, 117, 176, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; color: var(--brand-primary);">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 style="font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">Thank you, ${firstName}!</h3>
      <p style="font-size: 15px; color: var(--text-secondary); max-width: 280px; line-height: 1.6; font-weight: 400;">
        We have received your practice details and will get back to you within one business day.
      </p>
    </div>
  `;
}
