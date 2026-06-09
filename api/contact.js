export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'IPP Dental Contact Form <onboarding@resend.dev>',
        to: ['hello@ipp-dental.com'],
        reply_to: email,
        subject: `New Contact: ${name}`,
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 32px; background: #f5f8fc; border-radius: 12px;">
            <h2 style="font-size: 20px; font-weight: 700; color: #121e26; margin-bottom: 4px;">New Contact Submission</h2>
            <p style="font-size: 13px; color: #8295a5; margin-bottom: 32px;">via IPP Dental website</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9eff6; font-size: 12px; font-weight: 600; color: #8295a5; text-transform: uppercase; letter-spacing: 0.08em; width: 80px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9eff6; font-size: 15px; color: #121e26;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9eff6; font-size: 12px; font-weight: 600; color: #8295a5; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9eff6; font-size: 15px; color: #2575b0;"><a href="mailto:${email}" style="color: #2575b0;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 16px 0 0; font-size: 12px; font-weight: 600; color: #8295a5; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Message</td>
                <td style="padding: 16px 0 0; font-size: 15px; color: #121e26; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e9eff6;">
              <a href="mailto:${email}" style="display: inline-block; background: #2575b0; color: #fff; font-size: 13px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 100px;">Reply to ${name}</a>
            </div>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: err.message });
  }
}
