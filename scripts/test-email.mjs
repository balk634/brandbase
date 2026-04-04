// Test email functionality
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
    console.log("🧪 Testing email configuration...");
    
    try {
        // Test 1: Send notification to you
        console.log("📧 Sending test notification to info@brandbase.in...");
        
        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "contact@brandbase.in",
            to: "info@brandbase.in",
            replyTo: "test@example.com", // Simulate user email
            subject: "🧪 Test: BrandBase Form Notification/Test User",
            text: `
📋 Test Contact Form Submission

👤 Contact Details:
   Name: Test User
   Email: test@example.com
   Phone: +91 9876543210
   Subject: Test inquiry

💬 Message:
This is a test message to verify your email setup is working correctly.

---
🔧 Reply Information:
• This is a test email from your BrandBase website
• Reply to this email to test reply-to functionality
• User's email: test@example.com
• Form submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            `.trim(),
        });

        if (error) {
            console.error("❌ Test failed:", error);
            return;
        }

        console.log("✅ Notification email sent successfully!");
        console.log("📬 Check your inbox for the test email");
        console.log("🔄 Try replying to test the reply-to functionality");

        // Test 2: Send auto-reply to test user
        console.log("\n📧 Sending test auto-reply to test@example.com...");
        
        const autoReplyResult = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "contact@brandbase.in",
            to: "test@example.com",
            subject: "Re: Test: BrandBase Form Notification/Test User - We've received your message!",
            text: `
Hi Test User,

Thank you for reaching out to BrandBase! 

We've received your inquiry and will be in touch within 24 hours.

Our team will review your requirements and get back to you with a detailed response.

Best regards,
Team BrandBase
🌐 https://brandbase.in
📱 +91 9113702669
            `.trim(),
            replyTo: "info@brandbase.in", // User can reply back to you
        });

        if (autoReplyResult.error) {
            console.error("❌ Auto-reply test failed:", autoReplyResult.error);
        } else {
            console.log("✅ Auto-reply sent successfully!");
        }

        console.log("\n🎉 Email setup test completed!");
        console.log("📋 Checklist:");
        console.log("  ☐ Check you received the notification email");
        console.log("  ☐ Reply to the notification email");
        console.log("  ☐ Verify reply goes to test@example.com");
        console.log("  ☐ Check auto-reply was delivered");

    } catch (err) {
        console.error("❌ Test failed:", err.message);
    }
}

// Check environment variables
if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY not found in environment variables");
    process.exit(1);
}

if (!process.env.RESEND_FROM_EMAIL) {
    console.error("❌ RESEND_FROM_EMAIL not found in environment variables");
    process.exit(1);
}

console.log("🔧 Configuration:");
console.log(`  API Key: ${process.env.RESEND_API_KEY ? "✅ Set" : "❌ Missing"}`);
console.log(`  From Email: ${process.env.RESEND_FROM_EMAIL}`);
console.log(`  To Email: info@brandbase.in`);

testEmail().catch(console.error);
