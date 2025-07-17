"use client"
import { useState } from "react";
import Button from "./ui/Button";
import SectionLines from "./ui/SectionLines";

function useFormState(initial = { name: '', email: '', mobile: '', location: '', message: '' }) {
  const [form, setForm] = useState(initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };
  return [form, handleChange, setForm] as const;
}

export default function ContactUs() {
  const [form, handleChange, setForm] = useFormState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', email: '', mobile: '', location: '', message: '' });
  };

  return (
    <div className="w-full mb-12 relative flex flex-col items-center">
        {/* <div className="absolute top-[-26rem] justify-center flex w-full h-full pointer-events-none">
            <BlurArc />
        </div> */}
      <div className="flex items-center justify-center gap-8 mt-8">
        <SectionLines left={false} />
        <div className="flex flex-col items-center">
          <h1 className="text-[3rem] font-semibold">Contact Us</h1>
          <h3 className="text-[1.2rem] font-medium max-w-[31rem] text-foreground/50 text-center leading-[1.3]">
            Reach out to us to get <span className="text-foreground/75">support</span> and <span className="text-foreground/75">exciting benefits</span>
          </h3>
        </div>
        <SectionLines left={true} />
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-16 max-w-2xl mt-8 p-6 rounded-xl bg-white/80 shadow flex flex-col gap-4 bg-gradient-to-b from-[#FFFFFF] to-[#D0D4FA]/30 border-1 border-[#6F78D4]/10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="flex flex-col">
            <label className="text-foreground/75 text-[14px] font-semibold" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" className="border border-foreground/10 rounded-md p-2 bg-white focus:outline-none" value={form.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="text-foreground/75 text-[14px] font-semibold" htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" className="border border-foreground/10 rounded-md p-2 bg-white focus:outline-none" value={form.email} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="text-foreground/75 text-[14px] font-semibold" htmlFor="mobile">Mobile No.</label>
            <input id="mobile" name="mobile" type="text" className="border border-foreground/10 rounded-md p-2 bg-white focus:outline-none" value={form.mobile} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="text-foreground/75 text-[14px] font-semibold" htmlFor="location">Where are you from</label>
            <input id="location" name="location" type="text" className="border border-foreground/10 rounded-md p-2 bg-white focus:outline-none" value={form.location} onChange={handleChange} />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-foreground/75 text-sm font-semibold" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} className="border border-foreground/10 rounded-md p-2 bg-white focus:outline-none" value={form.message} onChange={handleChange} />
        </div>
        <div className="flex justify-center mt-2">
          <Button
            type="submit"
            variant="fancy"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
        {success && <div className="text-green-600 text-center">Thank you for contacting us!</div>}
      </form>
    </div>
  );
}