import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); // 获取请求体
    const { from, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: "hello@contactalexlee.com", // 使用用户输入的邮箱作为发件人
      to: ["lyanlin99@gmail.com", from], // 固定接收邮箱
      subject: subject || "No Subject",
      html: `<p>${message}</p>`, // 使用用户输入的消息
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
