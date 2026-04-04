# Resend Setup Guide for BrandBase

## 🎯 Goal
Send form notifications to `balk634@gmail.com` with reply-to functionality so when you reply, it goes to the user.

## 📋 Prerequisites
- Resend account (free tier available)
- Access to DNS settings for `brandbase.in`

## 🔧 Setup Steps

### 1. Domain Verification
1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click "Add Domain"
3. Enter: `brandbase.in`
4. Resend will show DNS records to add

### 2. Add DNS Records
In your domain registrar (GoDaddy, Namecheap, etc.), add:

**TXT Record:**
```
Host: @
Value: resend-verification-code=your-verification-code
TTL: 3600
```

**MX Record:**
```
Host: @
Value: feedback-smtp.eu-west-1.amazonaws.com
Priority: 10
TTL: 3600
```

**CNAME Records:**
```
Host: _dmarc
Value: dmarc.resend.com
TTL: 3600

Host: dkim._domainkey
Value: dkim.resend.com
TTL: 3600
```

### 3. Create Verified Senders
Once domain is verified, create TWO sender emails:
- `contact@brandbase.in` (for notifications to you)
- `noreply@brandbase.in` (for auto-replies to users)

### 4. Environment Variables
Add these to your hosting environment:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@brandbase.in
CONTACT_TO_EMAIL=info@brandbase.in
```

## 🔄 How It Works

### Current Implementation (Already Working!)
```javascript
const { data, error } = await resend.emails.send({
    from: "contact@brandbase.in",       // Personal sender
    to: "info@brandbase.in",             // You get notification
    replyTo: "user@example.com",         // User's email
    subject: "BrandBase Form submission/John Doe",
    text: "Form details...",
});
```

### Email Flow
1. **User fills form** → Email sent to `info@brandbase.in`
2. **You receive notification** at your business email
3. **You hit Reply** → Email goes to user's email address
4. **User receives your reply** directly in their inbox

## 📧 Email Templates

### Notification Email (to you)
```
From: contact@brandbase.in
To: info@brandbase.in
Reply-To: user@example.com
Subject: BrandBase Form submission/John Doe

Name: John Doe
Email: user@example.com
Phone: +91 9876543210
Subject: Website development inquiry

Message:
Hi, I need a website for my business...
```

### Auto-Reply Email (to user)
```
From: noreply@brandbase.in
To: user@example.com
Reply-To: info@brandbase.in
Subject: Re: BrandBase Form submission - We've received your message!

Hi John,

Thank you for reaching out! We've received your inquiry and will be in touch within 24 hours.

Best regards,
Team BrandBase
```

## 🚀 Alternative Solutions

### Option 1: Gmail Forwarding (Free)
If you don't want to use Resend:
1. Create `forms@brandbase.in` Gmail
2. Forward all emails to `balk634@gmail.com`
3. Use Nodemailer with Gmail SMTP

### Option 2: SendGrid (Free Tier)
Similar to Resend but with different setup

### Option 3: AWS SES (Pay-as-you-go)
Most scalable, but more complex setup

## ✅ Testing

After setup, test the form:
1. Fill out a form on your site
2. Check you receive email at `balk634@gmail.com`
3. Hit "Reply" - it should go to user's email
4. User should receive your reply

## 🎯 Benefits of This Approach

- ✅ **Direct Communication**: Reply goes straight to user
- ✅ **Professional**: Uses your domain email
- ✅ **Trackable**: All conversations in your Gmail
- ✅ **Scalable**: Can handle high volume
- ✅ **Reliable**: Resend handles deliverability

## 🔍 Troubleshooting

### If emails don't send:
1. Check DNS records are propagated (use digwebinterface.com)
2. Verify domain in Resend dashboard
3. Check environment variables
4. Check Resend API key is valid

### If reply-to doesn't work:
1. Ensure `replyTo` field is set correctly
2. Test with different email clients
3. Check email headers in Gmail (Show original)

## 📞 Support
- Resend docs: https://resend.com/docs
- Domain verification: https://resend.com/domains
- API reference: https://resend.com/docs/api-reference
