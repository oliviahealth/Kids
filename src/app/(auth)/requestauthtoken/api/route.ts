import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const data = await resend.emails.send({
    from: "onboarding@sumitnalavade.com",
    to: "oliviahealth@tamu.edu",
    subject: "Olivia Kids Access Requested",
    html: `
    <div>
      <p>Someone is requesting access to Olivia Kids</p>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <a href="http://localhost:3000/approveauthtoken/api?name=${name}&email=${email}">Click here to approve.</a>
    </div>
    `,
  });

  console.log(data);

  return Response.json({ data: "success" });
}
