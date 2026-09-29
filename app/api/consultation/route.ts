import { digitalServices, revenueNames } from "@/lib/service-content";

const recipient = "ziaurrahman.26261@gmail.com";
const allowedServices = new Set([
  "Not sure yet",
  ...Object.values(revenueNames),
  ...Object.values(digitalServices).map((service) => service.name),
  "Healthcare AI (in development)",
]);

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] ?? character);
}

function page(title: string, content: string, status = 200) {
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} | Meddot Solutions</title><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&amp;display=swap"><style>body{margin:0;background:#f2f8f9;color:#071a42;font:16px/1.6 Satoshi,Arial,sans-serif}main{max-width:700px;margin:7vh auto;padding:36px;background:#fff}a{color:#00777b}h1{font-size:clamp(32px,6vw,49px);line-height:1.12;letter-spacing:-.035em;margin:0 0 16px}p{color:#536479}.button{display:inline-block;background:#008f91;color:#fff;text-decoration:none;font-weight:700;padding:14px 22px;margin:16px 0}.summary{border-top:1px solid #d8e4e9;margin-top:23px;padding-top:20px}.summary div{padding:8px 0}.summary strong{display:block;font-size:13px;color:#3c5267}.summary p{white-space:pre-wrap;margin:5px 0}.note{font-size:14px;border-top:1px solid #d8e4e9;padding-top:18px;margin-top:22px}@media(max-width:760px){main{margin:0;padding:28px 20px;min-height:100vh}}</style></head><body><main><a href="/" aria-label="Meddot Solutions home">Meddot Solutions</a>${content}</main></body></html>`, { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
}

export async function POST(request: Request) {
  let form: FormData;
  try { form = await request.formData(); }
  catch { return page("Request could not be read", '<h1>Please try again.</h1><p>The form could not be read. Return to the contact page and check your entries.</p><a class="button" href="/contact#consultation-form">Back to form</a>', 400); }

  const read = (key: string, limit: number) => {
    const value = form.get(key);
    return typeof value === "string" ? value.trim().slice(0, limit) : "";
  };
  const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
  const name = oneLine(read("name", 100));
  const practice = oneLine(read("practice", 120));
  const email = oneLine(read("email", 160));
  const phone = oneLine(read("phone", 40));
  const service = oneLine(read("service", 100));
  const message = read("message", 1000);
  if (!name || !practice || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !allowedServices.has(service) || !message) {
    return page("Check your request", '<h1>Check the required fields.</h1><p>Please enter your name, practice, a valid email, a service, and a short message.</p><a class="button" href="/contact#consultation-form">Return to form</a>', 400);
  }

  const subject = `Meddot consultation request — ${practice}`;
  const body = [`Name: ${name}`, `Practice: ${practice}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, `Service: ${service}`, "", "What they would like to discuss:", message].join("\n");
  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return page("Review your request", `<h1>Your request is ready.</h1><p>Review the details below, then open the email draft and send it from your email app. Meddot has not received anything yet.</p><div class="summary"><div><strong>Name</strong>${escapeHtml(name)}</div><div><strong>Practice</strong>${escapeHtml(practice)}</div><div><strong>Email</strong>${escapeHtml(email)}</div>${phone ? `<div><strong>Phone</strong>${escapeHtml(phone)}</div>` : ""}<div><strong>Service</strong>${escapeHtml(service)}</div><div><strong>Message</strong><p>${escapeHtml(message)}</p></div></div><a class="button" href="${escapeHtml(mailto)}">Open email draft</a><p class="note">If no email app opens, send these details to <a href="mailto:${recipient}">${recipient}</a>. Please do not include patient information or medical records.</p><a href="/contact#consultation-form">Start over</a>`);
}
