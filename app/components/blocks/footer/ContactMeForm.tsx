import { useState } from "react";

type Status = 'idle' | 'sending' | 'success' | 'error';

export const ContactMeForm = () => {

  const [disable, setDisable] = useState(false);
  const [process, setProcess] = useState<Status>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('botcheck')) {
      console.log('Bot detected, blocking submission');
      return; 
    }

    setProcess("sending");
    setDisable(true)

    formData.append("access_key", "190d84f2-dbb6-4c6e-8fa7-86bb774486a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setProcess("success");
      form.reset();
    } else {
      console.log("Error", data);
      setProcess('error');
    }
  };

  const getButtonStyles = (status: Status) => {
  const styles = {
    idle: 'bg-teal-600 hover:bg-teal-700',
    sending: 'bg-gray-500 cursor-not-allowed opacity-50',
    success: 'bg-green-600',
    error: 'bg-red-600'
  };
  return `w-full px-4 py-2 rounded-lg font-medium transition text-sm ${styles[status]}`;
};

const getButtonText = (status: Status) => {
  const text = {
    idle: 'Send Message',
    sending: 'Sending...',
    success: '✓ Sent!',
    error: 'Try Again'
  };
  return text[status];
};



  return (
    <>
      <div>
        <h4 className="font-semibold text-teal-400 mb-4">Get in Touch</h4>
        <form onSubmit={onSubmit} className="space-y-3" method="POST">
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
          <input type="text" name="name" placeholder="Your name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm outline-none focus:border-teal-500" autoComplete="name" />
          <input type="email" name="email" placeholder="Your email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm outline-none focus:border-teal-500" autoComplete="email" />
          <textarea name="message" placeholder="Your message..." rows={3} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm outline-none focus:border-teal-500 resize-none"></textarea>
          <button type="submit" className={getButtonStyles(process)} disabled={disable}>
            {getButtonText(process)}
          </button>
        </form>
      </div>
    </> 
  )
}