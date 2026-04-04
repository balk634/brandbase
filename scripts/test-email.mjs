// Test email functionality
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
    console.log("🧪 Testing simple email configuration...");
    
    try {
        // Test: Send notification to you
        console.log("📧 Sending test notification to info@brandbase.in...");
        
        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "contact@brandbase.in",
            to: process.env.CONTACT_TO_EMAIL || "info@brandbase.in",
            replyTo: "test@example.com", // Simulate user email
            subject: "🧪 Test: Simple Email Notification/Test User",
            text: `
📋 Test Contact Form Submission

👤 Contact Details:
   Name: Test User
   Email: test@example.com
   Phone: +91 9876543210
   Subject: Test inquiry

💬 Message:
This is a test message to verify your simple email setup is working correctly.

---
🔧 Reply Information:
• Reply to this email to contact user directly
• User's email: test@example.com
• Form submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            `.trim(),
        });

        if (error) {
            console.error("❌ Test failed:", error);
            return;
        }

        console.log("✅ Notification email sent successfully!");
        console.log("📬 Check your inbox for test email");
        console.log("🔄 Try replying to test reply-to functionality");
        console.log("\n🎉 Simple email setup test completed!");
        console.log("📋 Checklist:");
        console.log("  ☐ Check you received notification email");
        console.log("  ☐ Reply to notification email");
        console.log("  ☐ Verify reply goes to test@example.com");

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
