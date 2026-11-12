// Shared Real-Time Lead Delivery Engine for Aetherovate Software Solutions
// Handles Gmail (FormSubmit / Web3Forms), Instant Mobile Push (ntfy.sh), and WhatsApp (+91 76079 19233)

(function (window) {
  const CONFIG = {
    gmail: "aetherovatesoftwaresolution@gmail.com",
    whatsappNumber: "917607919233",
    // Subscribe to this topic in the free "ntfy" mobile app (Android/iOS) for 1-second direct phone alerts
    ntfyTopic: "aetherovate-leads-7607919233",
    // Optional free keys (paste to enable silent Web3Forms email / CallMeBot WhatsApp bot):
    web3FormsAccessKey: "",
    callMeBotApiKey: ""
  };

  function buildLinks(data) {
    const whatsappText = [
      "*New Aetherovate Website Inquiry*",
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Service: ${data.service}`,
      `Details: ${data.message || "Not provided"}`
    ].join("\n");

    const emailSubject = `New Aetherovate Inquiry: ${data.company} (${data.service})`;
    const emailBody = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Service Needed: ${data.service}`,
      "",
      `Requirements:\n${data.message || "Not provided"}`
    ].join("\n");

    return {
      whatsappText,
      waUrl: `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
      gmailWebUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.gmail)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
      mailtoUrl: `mailto:${CONFIG.gmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    };
  }

  async function sendNtfyPush(data) {
    const topic = (CONFIG.ntfyTopic || "").trim();
    if (!topic) return { sent: false, skipped: true };

    const title = `New Lead: ${data.company} (${data.service})`;
    const body = [
      `Client: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Service: ${data.service}`,
      `Details: ${data.message || "None"}`
    ].join("\n");

    try {
      const url = `https://ntfy.sh/${encodeURIComponent(topic)}?title=${encodeURIComponent(title)}&priority=high&tags=bell,briefcase`;
      const res = await fetch(url, { method: "POST", body });
      return { sent: res.ok };
    } catch (err) {
      return { sent: false, error: err };
    }
  }

  async function sendCallMeBotWhatsapp(whatsappText) {
    const key = (CONFIG.callMeBotApiKey || "").trim();
    if (!key) return { sent: false, skipped: true };
    try {
      const url = `https://api.callmebot.com/whatsapp.php?phone=${CONFIG.whatsappNumber}&text=${encodeURIComponent(whatsappText)}&apikey=${encodeURIComponent(key)}`;
      await fetch(url, { mode: "no-cors" });
      return { sent: true };
    } catch (err) {
      return { sent: false, error: err };
    }
  }

  async function sendEmail(data) {
    if (window.location.protocol === "file:") {
      return {
        ok: false,
        reason: "file_protocol",
        message: "Direct background Gmail API needs http://localhost (start.bat) or live HTTPS website."
      };
    }

    const web3Key = (CONFIG.web3FormsAccessKey || "").trim();
    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `New Aetherovate Inquiry: ${data.company} (${data.service})`,
          from_name: "Aetherovate Website",
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email || "not-provided@aetherovate.in",
          service: data.service,
          message: data.message || "No extra details provided"
        })
      });
      const json = await res.json();
      return res.ok && json.success ? { ok: true } : { ok: false, reason: "provider_error", message: json.message };
    }

    const payload = {
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email || "Not provided",
      service: data.service,
      message: data.message || "No extra details provided",
      _subject: `New Aetherovate Inquiry: ${data.company} (${data.service})`,
      _template: "table",
      _captcha: "false"
    };
    if (data.email) payload._replyto = data.email;

    const response = await fetch(`https://formsubmit.co/ajax/${CONFIG.gmail}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    const succeeded = response.ok && (result.success === true || result.success === "true");
    if (succeeded) return { ok: true, message: result.message };

    const rawMsg = String(result.message || "");
    if (rawMsg.toLowerCase().includes("activat") || rawMsg.toLowerCase().includes("confirm")) {
      return { ok: false, reason: "needs_activation", message: rawMsg };
    }
    return { ok: false, reason: "provider_error", message: rawMsg || "Email delivery service returned an error." };
  }

  function renderStatus(alertBox, emailState, pushState, data, links, openedWhatsapp) {
    if (!alertBox) return;

    const actionButtons = `
      <div class="mt-3 flex flex-wrap items-center justify-center gap-2">
        <a href="${links.waUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs">
          <span>Send on WhatsApp (+91 76079 19233)</span>
        </a>
        <a href="${links.gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-xs">
          <span>Open in Gmail</span>
        </a>
        <a href="${links.mailtoUrl}" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs">
          <span>Mail App</span>
        </a>
      </div>
    `;

    const mobileNote = pushState && pushState.sent
      ? "Direct mobile push notification sent!"
      : (openedWhatsapp ? "WhatsApp chat opened for +91 76079 19233." : "");

    if (emailState.ok) {
      alertBox.className = "p-4 rounded-xl text-xs font-medium text-center bg-emerald-50 text-emerald-900 border border-emerald-200 block";
      alertBox.innerHTML = `
        <div class="font-extrabold text-sm mb-1">🎉 Inquiry Delivered to Gmail!</div>
        <div>Thank you, <strong>${data.name}</strong>! Details for <strong>${data.company}</strong> were sent to <code>${CONFIG.gmail}</code>. ${mobileNote}</div>
        ${actionButtons}
      `;
      return;
    }

    if (emailState.reason === "needs_activation") {
      alertBox.className = "p-4 rounded-xl text-xs font-medium text-center bg-amber-50 text-amber-900 border border-amber-300 block";
      alertBox.innerHTML = `
        <div class="font-extrabold text-sm mb-1">⚠️ 1-Time Gmail Verification Required</div>
        <div>FormSubmit sent a one-time activation link to <code>${CONFIG.gmail}</code> (check <strong>Inbox &amp; Spam</strong>). Click <strong>Activate Form</strong> once, and all future submissions will arrive automatically! ${mobileNote}</div>
        ${actionButtons}
      `;
      return;
    }

    alertBox.className = "p-4 rounded-xl text-xs font-medium text-center bg-blue-50 text-slate-800 border border-blue-200 block";
    alertBox.innerHTML = `
      <div class="font-extrabold text-sm mb-1">${pushState && pushState.sent ? "🔔 Mobile Alert Sent — Finish Email Below" : "📲 Complete Delivery via WhatsApp or Gmail"}</div>
      <div>${emailState.message || "Background email delivery needs an active HTTP/HTTPS origin."} ${mobileNote}</div>
      ${actionButtons}
    `;
  }

  async function submitLead({ form, alertBox, submitBtn, data, openWhatsapp = true }) {
    const links = buildLinks(data);

    // Trigger WhatsApp synchronously inside user gesture so popup blockers allow it
    if (openWhatsapp) {
      window.open(links.waUrl, "_blank", "noopener,noreferrer");
    }

    const originalHtml = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "<span>Sending to Gmail &amp; Mobile...</span>";
    }

    try {
      const [emailState, pushState] = await Promise.all([
        sendEmail(data),
        sendNtfyPush(data),
        sendCallMeBotWhatsapp(links.whatsappText)
      ]);
      renderStatus(alertBox, emailState, pushState, data, links, openWhatsapp);
      if (emailState.ok && form) form.reset();
    } catch (err) {
      renderStatus(
        alertBox,
        { ok: false, reason: "network_error", message: "Network/CORS blocked background email request in this browser." },
        { sent: false },
        data,
        links,
        openWhatsapp
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml || "<span>Submit Inquiry</span>";
      }
      if (window.lucide) lucide.createIcons();
    }
  }

  window.AetherovateNotify = {
    CONFIG,
    buildLinks,
    submitLead
  };
})(window);
