import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); // Get request body
    const { from, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: "hello@contactalexlee.com", // Use a fixed sender email
      to: ["lyanlin99@gmail.com", from], // Fixed recipient email
      subject: subject || "No Subject",
      html: `<p>${message}</p>`, // Use user input message
    });
    console.log("Email send response:", data);
    console.error("Email send error:", error);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
