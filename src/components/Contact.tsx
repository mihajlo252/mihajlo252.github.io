import { useState, useEffect, useRef, type ChangeEvent, type JSX } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface InfoRow {
  label: string;
  value: string;
  href?: string;
  valueColor?: string;
}

const INFO_ROWS: InfoRow[] = [
  { label: "Email",        value: "hello@yourname.com", href: "mailto:hello@yourname.com" },
  { label: "Based in",     value: "Your City, Country" },
  { label: "Availability", value: "Open to work", valueColor: "#7ec87e" },
  { label: "Timezone",     value: "UTC+X" },
];

export default function Contact(): JSX.Element {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [form, setForm]     = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current?.classList.add("visible");
      rightRef.current?.classList.add("visible");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setStatus("sending");

    // ── Wire this up to your backend / email service ──────────────────────────
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
    await new Promise<void>((r) => setTimeout(r, 1200));
    setStatus("success");
    // ─────────────────────────────────────────────────────────────────────────
  };

  return (
    <>
      <div className="contact-root">

        

        <div className="contact-body">

          {/* Left */}
          <div className="contact-left" ref={leftRef}>
            <p className="contact-eyebrow">Let's work together</p>
            <h1 className="contact-heading">
              Start a<br /><em>conversation.</em>
            </h1>
            <p className="contact-subtext">
              Whether you have a project in mind, a question, or just want to say
              hello — my inbox is always open. I'll get back to you within 24 hours.
            </p>
            <div className="contact-info-list">
              {INFO_ROWS.map((row) => (
                <div className="contact-info-row" key={row.label}>
                  <span className="contact-info-label">{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className="contact-info-value">{row.value}</a>
                  ) : (
                    <span className="contact-info-value" style={row.valueColor ? { color: row.valueColor } : undefined}>
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-right" ref={rightRef}>
            {status === "success" ? (
              <div className="contact-success">
                <span className="contact-success-icon">✓</span>
                <div className="contact-success-title">Message sent.</div>
                <p className="contact-success-text">
                  Thanks for reaching out! I'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field-row">
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="name">Name</label>
                    <input
                      className="contact-input"
                      id="name" name="name" type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label" htmlFor="email">Email</label>
                    <input
                      className="contact-input"
                      id="email" name="email" type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="subject">Subject</label>
                  <input
                    className="contact-input"
                    id="subject" name="subject" type="text"
                    placeholder="Project inquiry, collaboration…"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label" htmlFor="message">Message</label>
                  <textarea
                    className="contact-textarea"
                    id="message" name="message"
                    placeholder="Tell me about your project or idea…"
                    value={form.message}
                      onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
              </form>
            )}
          </div>

        </div>


      </div>
    </>
  );
}
