import { useState } from 'react';
import Reveal from './Reveal';
import { getCountryDataList, getEmojiFlag } from 'countries-list';

type ToastState = {
  type: 'success' | 'error';
  title: string;
  message: string;
} | null;

const COUNTRIES = getCountryDataList()
  .filter((country) => country.phone.length > 0)
  .map((country) => ({
    name: country.name,
    iso2: country.iso2,
    dialCode: `+${country.phone[0]}`,
    flag: getEmojiFlag(country.iso2),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const DEFAULT_COUNTRY = COUNTRIES.find((country) => country.iso2 === 'MA') || COUNTRIES[0];

// ===================== BUSINESS NICHE ICONS =====================
const IndustryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22V8l10-6 10 6v14" /><path d="M6 12v6" /><path d="M10 12v6" /><path d="M14 12v6" /><path d="M18 12v6" /><path d="M2 16h20" />
  </svg>
);
const LogisticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="15" height="13" rx="1" /><path d="M16 10h4l3 3v6h-7V10z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const ProfessionalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm2-10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6H8v-6Z" /><path d="m9 9 2-2 2 2" /><path d="m11 7 2 2-2 2" />
  </svg>
);
const OtherIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" />
  </svg>
);

// ===================== BUSINESS NICHE DATA =====================
const NICHE_CATEGORIES = [
  {
    group: 'Industrial & Commercial Infrastructure',
    icon: <IndustryIcon />,
    items: [
      'Commercial HVAC & Industrial Chiller Repair',
      'Commercial Roofing & Structural Waterproofing',
      'Data Center Cooling & Power Grid Systems',
      'Cleanroom Engineering & Bio-Containment Construction',
      'Commercial Fire Sprinkler & Suppression Systems',
      'Industrial Automation & Robotics Integrators',
      'Elevator, Escalator, & Moving Walkway Contractors',
      'Commercial Concrete, Foundation, & Paving Corporations',
    ]
  },
  {
    group: 'Specialized Logistics & Heavy Supply Chain',
    icon: <LogisticsIcon />,
    items: [
      'Cold Chain Logistics (Pharma & Biotech Storage)',
      'Medical & Biohazard Waste Disposal',
      'Hazardous Material (Hazmat) Transport',
      'Customs Brokerage & International Freight Forwarding',
      'Industrial Scrap Metal Salvage & Recycling Operations',
      'Heavy Machinery & Crane Rental Operators',
    ]
  },
  {
    group: 'High-LTV Professional Services',
    icon: <ProfessionalIcon />,
    items: [
      'Mass Tort & Class Action Law Firms',
      'Catastrophic Personal Injury Law Firms',
      'Corporate M&A (Mergers & Acquisitions) Advisory Firms',
      'Executive Luxury Rehabilitation & Mental Health Centers',
      'Commercial Real Estate (CRE) Brokerages',
      'Corporate Tax Mitigation & Cost Segregation CPAs',
      'Aviation Law & Private Jet Charter Brokers',
    ]
  },
  {
    group: 'Other / Custom Sector',
    icon: <OtherIcon />,
    items: ['Other / Custom Sector']
  }
];

// ===================== TERMS & CONDITIONS FULL TEXT =====================
const TERMS_TEXT = `Terms and Conditions
Legal framework and terms of our digital services
Last updated: June 13, 2026

Company: mintora.
Location: Tetouan, Morocco
Email: abab86620@gmail.com
WhatsApp/Phone: +212 619 539 346
Social Channels: Instagram (@binosko.valorin) // Facebook (mintora.infrastructure)

1. Scope and Application
These Terms and Conditions (hereinafter "Terms") govern all digital automation and web infrastructure services provided by mintora. (hereinafter "mintora.", "we", "our"), an automated systems agency based in Tetouan, Morocco.

These Terms apply to any order, deployment, or configuration request placed by a client (hereinafter the "Client"), whether for web development, interactive AI conversational chatbots, autonomous AI voice agents (call interception bots), automated booking pipelines, Google Maps grid node integrations, hosting deployment stacks, or any monthly infrastructure maintenance services offered by mintora.

Any system deployment or order placement implies unreserved acceptance of these Terms, which prevail over any other Client document, except by express written agreement signed by mintora.

2. Infrastructure Setup and Orders
2.1. System Staging: Every project begins with a baseline layout agreement specifying the scope of AI capabilities, integration nodes, deployment deadlines, setup pricing, and recurring server allocations.

2.2. Order Finalization: An order is considered firm, final, and locked into our deployment queue after the Client processes the initial setup payment. Any validated system setup commits the Client to the entire scope of the initialized service.

2.3. Structural Modifications: Any layout or structural modifications requested by the Client after infrastructure deployment has begun will be subject to a separate configuration billing amendment. Initial deadlines and server deployment schedules may be revised accordingly.

3. Pricing and Recurring Payment Terms
3.1. Valuation Framework: Initial infrastructure deployment is billed at a one-time setup fee of $450 USD (or local currency equivalent), unless a custom structural amendment is specified. Deployed systems require a mandatory recurring subscription fee of $50 USD per month to cover cloud server maintenance, hosting allocations, and AI engine API routing costs.

3.2. Initial Deployment Invoicing: Direct payment of the setup fee is required upfront to initialize server deployment stacks, route third-party domains, and configure neural APIs.

3.3. Recurring Billing Cycles: The monthly $50 subscription fee is processed automatically or manually invoiced on the 31st day of every consecutive calendar month (or standard 30-day recurring cycle) following system delivery.

3.4. Default and Suspension: Invoices are payable immediately upon receipt. Any unpaid recurring server invoice at maturity will automatically result in:
• Immediate termination or suspension of all live AI conversational chat bots, voice agents, and web hosting servers.
• Immediate forfeiture of territorial reservation grid protections (allowing competitors to claim the region).
• Application of late payment penalties calculated at 12% per annum on outstanding allocations.

4. Deployment Windows and Delays
4.1. Indicative Delivery: Target deployment windows are approximate and depend heavily on the Client's prompt submission of operational credentials (domain names, API tokens, business details, or calendar access links).

4.2. Exclusions of Liability: mintora. cannot be held responsible for system delays or failures caused by:
• Client's failure to provide access credentials or media content within a 72-hour window.
• Unannounced downtime, breaking changes, or access restrictions imposed by third-party vendor APIs (e.g., OpenAI, Vercel, GitHub, Google Maps Cloud).
• Force majeure events including natural disruptions, localized telecom network failures, or prolonged internet grid outages.

5. Client Obligations
The Client strictly agrees to:
• Provide mintora. with all required deployment elements (domain routing rights, legal business data, operational hours, baseline scheduling preferences).
• Appoint a single point of operational contact with absolute decision-making authority.
• Guarantee legal ownership and usage rights for all branding assets, texts, logos, or media provided for system training.
• Maintain accurate payment profiles to fulfill the $50/mo server allocation costs on schedule.
• Immediately report any anomalous AI behavior or loop errors detected inside live conversational channels.

6. mintora. Obligations & Absolute AI Liability Disclaimer
6.1. Technical Best Practices: mintora. commits to deploying stable web applications utilizing clean code structures, responsive UI design layout modules, and industry-standard security protocols.

6.2. Best Efforts Constraint: mintora. operates under a strict "best efforts" obligation, not an obligation of definitive corporate result. We deploy the structural tech stack, but do not guarantee exact lead volumes, specific revenue increases, or commercial conversion figures.

6.3. CRITICAL AI LIABILITY PROTECTION SHIELD: mintora. provides generative AI conversational tools, automated voice responders, and programmatic scheduling pipelines on an "as-is" structural basis. The Client assumes 100% operational ownership, monitoring duties, and legal risk associated with all live text interactions, telephone conversations, and automated bookings processed by the deployed bots. mintora. assumes absolutely NO liability for conversational hallucinations, vulgar language output, scheduling conflicts, mistaken material cost or pricing estimates delivered by the AI to a customer, or any legal fines arising from automated outreach. The Client holds sole responsibility for ensuring their active automation suites comply with local telecommunication guidelines, SMS spam acts, and automated marketing regulations (including TCPA and CTIA structures).

7. Intellectual Property and Source Control
7.1. Title Retention: mintora. retains all core structural intellectual property rights to custom-developed proprietary scripts, system methods, and prompt architectures until the initial setup balance is completely resolved.

7.2. Client Exploitation License: Upon full settlement of setup invoicing, mintora. grants the Client a non-transferable, global, royalty-free license to utilize the deployed web layout and integrated interfaces within the scope of their independent business infrastructure.

7.3. Distribution Prohibition: The Client is strictly prohibited from duplicating, reselling, white-labeling, redistributing, or packaging the configured system workflows or integrated chatbot configurations to external third parties without written authorization from mintora.

7.4. Open-Source Ecosystems: Open-source frameworks and external libraries utilized within our deployment stack (e.g., React, Next.js, Vercel Core, Tailwind) remain bound to their respective public licenses. mintora. does not guarantee the perpetual open-source status or lifecycle of external core frameworks.

8. Data Protection and Algorithmic Privacy
8.1. Regulatory Compliance: mintora. structures client data capture systems to align with safe privacy procedures, including Moroccan Law No. 09-08 and global international data protection acts (GDPR) for cross-border traffic validation.

8.2. Collection Parameters: Deployed systems log standard user-submitted contact metrics (Business titles, emails, user telephone numbers, core text inputs) purely for calendar routing, CRM integration, and customer interaction histories.

8.3. Data Ownership: All text logs, recording tracks, and client list parameters remain the exclusive property of the Client business. mintora. will never sell, lease, scrape, or distribute client databases to external marketing registries or third-party algorithmic scraping engines.

9. Applicable Law and Dispute Resolution
9.1. Governing Framework: These Terms, system architectures, and software licenses are governed entirely by the laws of Morocco.

9.2. Pre-Litigation Mediation: In the event of an operational dispute, both parties commit to an open, good-faith mediation period lasting a minimum of thirty (30) days to discover an amicable compromise before taking any escalating steps.

9.3. Exclusive Jurisdiction: If amicable settlement methods fail completely, any dispute relating to the interpretation, breakdown, or execution of these Terms will be submitted to the exclusive legal jurisdiction of the competent Courts of Tetouan, Morocco.`;

// ===================== FAQ DATA =====================
const FAQS = [
  {
    q: "How long does it take to launch my new website?",
    a: "Most standard websites are designed, built, and launched within 1 to 2 weeks after our initial strategy call."
  },
  {
    q: "What does the $50/month hosting fee cover?",
    a: "It covers premium cloud hosting, daily backups, standard security updates, and an SSL certificate so your website always loads fast and stays secure."
  },
  {
    q: "Will my website look good on mobile phones?",
    a: "Absolutely. Over 60% of web traffic comes from mobile devices. We design mobile-first so your site looks perfect on all screen sizes."
  },
  {
    q: "Do I need to provide the images and text?",
    a: "You can provide your own, or we can use premium high-quality stock images and help write professional copy for your business at no extra charge."
  }
];

// ===================== NAV SECTION LINKS =====================
const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Booking', id: 'start-project' },
  { label: 'Contact', id: 'contact' },
];

// ===================== MAIN COMPONENT =====================
export default function Home() {
  const [showTerms, setShowTerms] = useState(false);
  const [showNicheModal, setShowNicheModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
  const [phoneDigits, setPhoneDigits] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    email: '',
    businessType: ''
  });

  const filteredCountries = COUNTRIES.filter((country) => {
    const query = countrySearch.trim().toLowerCase();
    if (!query) return true;
    return (
      country.name.toLowerCase().includes(query) ||
      country.iso2.toLowerCase().includes(query) ||
      country.dialCode.includes(query)
    );
  });

  const showToast = (nextToast: NonNullable<ToastState>) => {
    setToast(nextToast);
    window.setTimeout(() => setToast(null), 5000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullPhoneNumber = `${selectedCountry.dialCode} ${phoneDigits}`.trim();

    if (!formData.businessName || !formData.email || !phoneDigits || !formData.businessType) {
      showToast({
        type: 'error',
        title: 'Missing information',
        message: 'Please fill in your business name, phone number, email, and business sector.',
      });
      return;
    }

    if (localStorage.getItem('mintora_submission_locked') === 'true') {
      showToast({
        type: 'error',
        title: 'Request already submitted',
        message: 'We already received your project request from this device. We will contact you shortly.',
      });
      return;
    }

    const existingData = localStorage.getItem('mintora_leads');
    const leads = existingData ? JSON.parse(existingData) : [];
    const duplicateLead = leads.some((lead: { email?: string; phoneNumber?: string }) =>
      lead.email?.toLowerCase() === formData.email.toLowerCase() || lead.phoneNumber === fullPhoneNumber
    );

    if (duplicateLead) {
      localStorage.setItem('mintora_submission_locked', 'true');
      showToast({
        type: 'error',
        title: 'Duplicate request blocked',
        message: 'This email or phone number has already submitted a project request.',
      });
      return;
    }

    const newLead = {
      id: crypto.randomUUID(),
      ...formData,
      phoneNumber: fullPhoneNumber,
      timestamp: new Date().toISOString()
    };

    leads.push(newLead);
    localStorage.setItem('mintora_leads', JSON.stringify(leads));
    localStorage.setItem('mintora_submission_locked', 'true');
    showToast({
      type: 'success',
      title: 'Project request submitted',
      message: 'We received your details. Mintora will contact you shortly.',
    });
    setFormData({ businessName: '', phoneNumber: '', email: '', businessType: '' });
    setPhoneDigits('');
    setCountrySearch('');
    setSelectedCountry(DEFAULT_COUNTRY);
    setShowNicheModal(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#0066FF] selection:text-white">
      {/* Modern custom notification */}
      {toast && (
        <div className="fixed top-5 right-5 z-[120] w-[calc(100%-2.5rem)] max-w-sm">
          <div className={`rounded-2xl border bg-white shadow-2xl p-4 flex gap-3 ${toast.type === 'success' ? 'border-green-200' : 'border-red-200'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${toast.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
              {toast.type === 'success' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-[#111111]">{toast.title}</div>
              <div className="text-sm text-gray-500 mt-1 leading-relaxed">{toast.message}</div>
            </div>
            <button onClick={() => setToast(null)} className="text-gray-400 hover:text-[#111111] transition-colors shrink-0" aria-label="Close notification">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
      )}
      
      {/* ==================== STICKY NAV ==================== */}
      <nav className="w-full border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            mintora<span className="text-[#0066FF]">.</span>
          </div>
          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-sm text-gray-500 hover:text-[#111111] transition-colors">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('start-project')} className="ml-2 px-5 py-2 bg-[#111111] text-white text-sm font-medium hover:bg-[#0066FF] transition-colors rounded-xl">
              Get a Free Quote
            </button>
          </div>
          {/* Mobile hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileMenuOpen ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></> : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 flex flex-col gap-3 shadow-lg">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-left text-sm text-gray-600 py-1 hover:text-[#111111] transition-colors">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('start-project')} className="mt-1 px-5 py-3 bg-[#0066FF] text-white text-sm font-medium rounded-xl text-center">
              Get a Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* ==================== 1. HERO ==================== */}
      <section className="relative overflow-hidden pt-20 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-blue-50/70 via-[#FAFAFA] to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 bg-white border border-[#E5E7EB] rounded-full text-xs font-semibold text-gray-500 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                Custom websites for service businesses
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.08]">
                We build websites that answer calls, book jobs, and bring you more work.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg md:text-xl text-gray-600 mb-9 leading-relaxed max-w-3xl mx-auto">
                You're on the job. Your phone rings. You can't answer. The customer hangs up and calls your competitor. We fix this with a simple, beautiful website that picks up the phone, chats with visitors, and books estimates for you — automatically, 24/7.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => scrollTo('start-project')} className="bg-[#0066FF] text-white px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 rounded-xl">
                  Get a Free Quote
                </button>
                <button onClick={() => scrollTo('about')} className="bg-white border border-[#E5E7EB] text-[#111111] px-8 py-4 text-lg font-semibold hover:border-[#111111] transition-colors rounded-xl">
                  See our work
                </button>
              </div>
            </Reveal>
          </div>

          {/* Pricing stat row */}
          <Reveal delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
              <div className="bg-white/70 backdrop-blur-xl border border-[#E5E7EB] rounded-2xl p-5 text-center shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-300 line-through decoration-2">$4,000</span>
                  <span className="text-3xl font-extrabold text-[#111111]">$450</span>
                </div>
                <div className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide mb-1">One-time setup</div>
                <div className="text-[11px] text-gray-400 font-medium">Only 3 builds left this month</div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl border border-[#E5E7EB] rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-[#111111] mb-1">$50<span className="text-lg text-gray-400">/mo</span></div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Hosting</div>
                <div className="text-[11px] text-gray-400 font-medium">Cancel anytime</div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl border border-[#E5E7EB] rounded-2xl p-5 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-[#111111] mb-1">3–7 days</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Average build time</div>
                <div className="text-[11px] text-gray-400 font-medium">From first call to launch</div>
              </div>
            </div>
          </Reveal>

          {/* Apple-style floating mockup */}
          <Reveal delay={200}>
            <div className="relative max-w-4xl mx-auto" style={{ perspective: '1600px' }}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_40px_90px_-30px_rgba(17,17,17,0.25)] overflow-hidden">
                <div className="bg-[#F4F4F5] border-b border-[#E5E7EB] px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                  <div className="ml-3 flex-1 max-w-sm bg-white border border-[#E5E7EB] h-7 rounded-md text-[11px] text-gray-400 flex items-center px-3 gap-2">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    apexplumbing.com
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="text-xs font-bold tracking-widest text-[#0066FF] mb-3">24/7 ESTIMATE BOOKING</div>
                    <div className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 leading-tight">Fast, Reliable Plumbing Repairs in Your Area.</div>
                    <div className="h-2 w-24 bg-gray-100 rounded-full mb-5"></div>
                    <div className="flex gap-3 mb-6">
                      <div className="bg-[#0066FF] text-white text-xs font-semibold px-4 py-2.5 rounded-lg">Book a Free Estimate</div>
                      <div className="border border-[#E5E7EB] text-[#111111] text-xs font-semibold px-4 py-2.5 rounded-lg">Call Now</div>
                    </div>
                    <div className="flex items-center gap-4 pt-5 border-t border-[#F0F0F0]">
                      <div className="flex gap-1 text-[#0066FF] text-xs">★★★★★</div>
                      <div className="text-[11px] text-gray-400">Rated 4.9 by 200+ locals</div>
                    </div>
                  </div>
                  <div className="bg-[#F7F8FA] border-l border-[#E5E7EB] p-8 md:p-10 flex flex-col justify-center gap-5">
                    <div className="rounded-xl bg-white border border-[#E5E7EB] p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div className="text-sm font-bold">AI Call Interception</div>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full mb-2"></div>
                      <div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
                    </div>
                    <div className="rounded-xl bg-white border border-[#E5E7EB] p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/></svg>
                        </div>
                        <div className="text-sm font-bold">Google Maps Node</div>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating phone */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 md:-right-12 w-52 md:w-60">
                <div className="bg-[#111111] rounded-[2.2rem] p-2 shadow-[0_30px_70px_-20px_rgba(17,17,17,0.45)] border border-[#222]">
                  <div className="bg-[#FAFAFA] rounded-[1.7rem] overflow-hidden">
                    <div className="bg-[#0066FF] text-white px-4 py-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-300"></div>
                      <div className="text-[11px] font-semibold">Live Assistant · Online</div>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm px-3 py-2 text-[10px] text-gray-600 max-w-[85%]">Hi! Do you do same-day water heater repair?</div>
                      <div className="bg-[#0066FF] text-white rounded-2xl rounded-tr-sm px-3 py-2 text-[10px] max-w-[88%] ml-auto">Yes! I can book a technician today. What time works?</div>
                      <div className="bg-white border border-green-200 rounded-2xl rounded-tl-sm px-3 py-2 text-[10px] text-green-700 font-semibold max-w-[88%] flex items-center gap-1.5">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                        Estimate booked: Tue 2:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hidden md:flex absolute -top-5 -left-5 items-center gap-2 bg-white/80 backdrop-blur-xl border border-[#E5E7EB] rounded-full pl-2 pr-4 py-2 shadow-lg">
                <div className="w-7 h-7 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-bold text-[#111111]">Call intercepted</div>
                  <div className="text-gray-400">Lead saved automatically</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== 2. SPEED / SECURITY / SALES ==================== */}
      <section id="about" className="py-20 border-y border-[#E5E7EB] bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal><h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Built For Speed, Security, and Sales</h2></Reveal>
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            <Reveal><div className="text-center px-4"><div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] mb-2">&lt; 2.5s</div><div className="text-sm text-gray-500">Average Page Load Speed</div></div></Reveal>
            <Reveal delay={100}><div className="text-center px-4 md:border-x border-[#E5E7EB]"><div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] mb-2">99.9%</div><div className="text-sm text-gray-500">Guaranteed Website Uptime</div></div></Reveal>
            <Reveal delay={200}><div className="text-center px-4"><div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] mb-2">100%</div><div className="text-sm text-gray-500">Custom Code (Zero Clunky Templates)</div></div></Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 3. WHY MINTORA (Services) ==================== */}
      <section id="services" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why a Custom Mintora Site Beats Cheap Website Builders</h2>
              <p className="text-gray-600 leading-relaxed">Most businesses use generic templates that look nice but fail to generate sales. We engineer your digital storefront from scratch to maximize your revenue.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 h-full hover:border-[#111111] transition-colors shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Built to Convert</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Most templates are just pretty. We code with consumer psychology in mind, placing strategic call-to-action buttons exactly where your customers naturally look to maximize phone calls and leads.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 h-full hover:border-[#111111] transition-colors shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Lightning Fast Speed</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Heavy template code slows your site down, hurting your Google rankings and driving impatient visitors away. Our clean, lightweight code ensures your site loads instantly on all networks.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 h-full hover:border-[#111111] transition-colors shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Zero Technical Maintenance Stress</h3>
                <p className="text-sm text-gray-600 leading-relaxed">You run your business, we run your technology. We manage your cloud hosting, security updates, and daily data backups so your website stays secure and never goes down.</p>
              </div>
            </Reveal>
          </div>

          {/* Price comparison strip */}
          <Reveal delay={120}>
            <div className="mt-12 bg-[#111111] text-white rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Real Cost Comparison</div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Other agencies charge $4,000+ for the same result.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">We deliver a fully custom, sales-focused site for a flat $450 — because every local business deserves to look elite online.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                  <div className="text-xs text-gray-400 mb-2">Typical Agency</div>
                  <div className="text-2xl font-extrabold text-gray-500 line-through decoration-gray-600">$4,000+</div>
                </div>
                <div className="bg-[#0066FF] border border-[#0066FF] rounded-xl p-5 text-center">
                  <div className="text-xs text-blue-100 mb-2">Mintora</div>
                  <div className="text-2xl font-extrabold">$450</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== 4. PROCESS ==================== */}
      <section id="process" className="py-24 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-4">How Easy It Is to Work With Us</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-16">Three clear steps from first conversation to live website.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <Reveal>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] text-2xl font-bold mx-auto mb-5">1</div>
                <h3 className="text-lg font-bold mb-2">Consultation</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">We learn about your business goals, target audience, and brand vision in a quick strategy call.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] text-2xl font-bold mx-auto mb-5">2</div>
                <h3 className="text-lg font-bold mb-2">Design</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">We build your fully customized, mobile-friendly website and write professional content tailored to your industry.</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] text-2xl font-bold mx-auto mb-5">3</div>
                <h3 className="text-lg font-bold mb-2">Launch</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">Your site goes live. We handle the hosting, security, and monthly maintenance so you never worry about a thing.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 5. FAQ ==================== */}
      <section id="faq" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal><h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2></Reveal>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <Reveal key={index} delay={index * 60}>
                <div className="border border-[#E5E7EB] bg-white rounded-2xl overflow-hidden">
                  <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full px-6 py-5 text-left flex justify-between items-center font-bold">
                    {faq.q}
                    <span className="text-[#0066FF] font-mono text-xl ml-4 shrink-0">{activeFaq === index ? '-' : '+'}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. BOOKING / FORM ==================== */}
      <section id="start-project" className="py-24 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-400 max-w-lg mx-auto">Get a premium website designed entirely for you. Lock in your project today with our discounted one-time setup fee.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border border-white/20 rounded-3xl p-8 md:p-12 bg-white/5">
              {/* Pricing summary */}
              <div className="mb-10 text-center">
                <div className="flex items-center justify-center gap-4 text-xl mb-2">
                  <span className="text-gray-500 line-through decoration-gray-500 font-mono">$4,000</span>
                  <span className="text-[#0066FF] font-bold font-mono text-4xl">$450</span>
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Special Discount · One-Time Setup</div>
                <div className="max-w-md mx-auto text-left space-y-3 text-sm text-gray-300 border border-white/10 bg-black/20 rounded-2xl p-6">
                  <div className="flex justify-between border-b border-white/10 pb-3"><span>Custom Web Design & Build</span><strong className="text-white">FREE</strong></div>
                  <div className="flex justify-between border-b border-white/10 pb-3"><span>Mobile Optimization</span><strong className="text-white">FREE</strong></div>
                  <div className="flex justify-between border-b border-white/10 pb-3"><span>Domain Setup & Email Routing</span><strong className="text-white">FREE</strong></div>
                  <div className="flex justify-between pt-2 items-center"><span className="font-medium text-white">Cloud Hosting & Maintenance</span><strong className="text-white bg-blue-600 px-2 py-1 rounded-sm">$50 / month</strong></div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Business Name</label>
                    <input type="text" required value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} className="w-full bg-transparent border border-white/20 p-4 text-white focus:border-[#0066FF] outline-none transition-colors rounded-xl" placeholder="e.g. Apex Roofing" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Personal Number</label>
                    <div className="relative">
                      <div className="flex border border-white/20 rounded-xl focus-within:border-[#0066FF] transition-colors">
                        <button
                          type="button"
                          onClick={() => setShowCountryPicker(!showCountryPicker)}
                          className="px-4 border-r border-white/20 flex items-center gap-2 text-white hover:bg-white/5 transition-colors rounded-l-xl"
                          aria-label="Select country code"
                        >
                          <span className="text-lg leading-none">{selectedCountry.flag}</span>
                          <span className="text-sm font-semibold">{selectedCountry.dialCode}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </button>
                        <input
                          type="tel"
                          required
                          value={phoneDigits}
                          onChange={e => setPhoneDigits(e.target.value.replace(/[^0-9\s()-]/g, ''))}
                          className="w-full bg-transparent p-4 text-white outline-none rounded-r-xl"
                          placeholder="619 539 346"
                        />
                      </div>

                      {showCountryPicker && (
                        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 bg-white text-[#111111] border border-[#E5E7EB] rounded-2xl shadow-2xl overflow-hidden">
                          <div className="p-3 border-b border-[#E5E7EB]">
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={e => setCountrySearch(e.target.value)}
                              className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0066FF]"
                              placeholder="Search country or code..."
                              autoFocus
                            />
                          </div>
                          <div className="max-h-72 overflow-y-auto p-2">
                            {filteredCountries.length === 0 ? (
                              <div className="px-4 py-6 text-sm text-gray-500 text-center">No countries found.</div>
                            ) : (
                              filteredCountries.map((country) => (
                                <button
                                  key={`${country.iso2}-${country.dialCode}`}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setShowCountryPicker(false);
                                    setCountrySearch('');
                                  }}
                                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-gray-50 transition-colors ${selectedCountry.iso2 === country.iso2 ? 'bg-blue-50 text-[#0066FF]' : 'text-[#111111]'}`}
                                >
                                  <span className="text-xl leading-none">{country.flag}</span>
                                  <span className="flex-1 text-sm font-medium truncate">{country.name}</span>
                                  <span className="text-sm text-gray-500 font-semibold">{country.dialCode}</span>
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Your Email</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border border-white/20 p-4 text-white focus:border-[#0066FF] outline-none transition-colors rounded-xl" placeholder="you@company.com" />
                  </div>
                </div>

                {/* Business Niche Selector Button */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-400">Your Business Sector</label>
                  <button
                    type="button"
                    onClick={() => setShowNicheModal(true)}
                    className={`w-full text-left border p-4 transition-colors rounded-xl flex items-center justify-between ${formData.businessType ? 'border-[#0066FF] bg-[#0066FF]/10 text-white' : 'border-white/20 text-gray-400 hover:border-white/40 bg-transparent'}`}
                  >
                    <span>{formData.businessType || 'Tap to select your industry...'}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                </div>

                <button type="submit" className="w-full bg-[#0066FF] text-white py-5 text-lg font-bold hover:bg-blue-600 transition-colors mt-4 shadow-lg shadow-blue-500/20 rounded-xl">
                  Submit Project Request
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== 7. CONTACT SECTION ==================== */}
      <section id="contact" className="py-24 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-4">Let's Work Together</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-14">Ready to get started? Reach out through the channel that works best for you. We respond within hours.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* WhatsApp */}
            <Reveal>
              <a href="https://wa.me/0619539346" target="_blank" rel="noreferrer" className="group block bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl p-6 text-center hover:border-[#0066FF] hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="font-bold text-sm mb-1">WhatsApp</div>
                <div className="text-xs text-gray-400">+212 619 539 346</div>
                <div className="text-xs text-[#0066FF] font-semibold mt-2 group-hover:underline">Message us directly</div>
              </a>
            </Reveal>

            {/* Email */}
            <Reveal delay={80}>
              <a href="mailto:abab86620@gmail.com" className="group block bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl p-6 text-center hover:border-[#0066FF] hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="font-bold text-sm mb-1">Email</div>
                <div className="text-xs text-gray-400">abab86620@gmail.com</div>
                <div className="text-xs text-[#0066FF] font-semibold mt-2 group-hover:underline">Send us an email</div>
              </a>
            </Reveal>

            {/* Instagram */}
            <Reveal delay={160}>
              <a href="https://instagram.com/binosko.valorin" target="_blank" rel="noreferrer" className="group block bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl p-6 text-center hover:border-[#E1306C] hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#igGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <defs><linearGradient id="igGrad" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#833AB4"/><stop offset=".5" stopColor="#E1306C"/><stop offset="1" stopColor="#F77737"/></linearGradient></defs>
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <div className="font-bold text-sm mb-1">Instagram</div>
                <div className="text-xs text-gray-400">@binosko.valorin</div>
                <div className="text-xs text-[#E1306C] font-semibold mt-2 group-hover:underline">Follow us</div>
              </a>
            </Reveal>

            {/* Facebook */}
            <Reveal delay={240}>
              <a href="https://www.facebook.com/profile.php?id=100091787592810" target="_blank" rel="noreferrer" className="group block bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl p-6 text-center hover:border-[#1877F2] hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#1877F2]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div className="font-bold text-sm mb-1">Facebook</div>
                <div className="text-xs text-gray-400">mintora.infrastructure</div>
                <div className="text-xs text-[#1877F2] font-semibold mt-2 group-hover:underline">Visit our page</div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-10 px-6 border-t border-[#E5E7EB] bg-white text-sm text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#111111] text-lg">mintora<span className="text-[#0066FF]">.</span></span>
            <span>© {new Date().getFullYear()} Mintora. - Digital agency</span>
          </div>
          <button onClick={() => setShowTerms(true)} className="hover:text-[#111111] transition-colors font-medium">Terms & Conditions</button>
        </div>
      </footer>

      {/* ==================== TERMS MODAL ==================== */}
      {showTerms && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#111111]/70 backdrop-blur-sm">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="px-8 py-6 border-b border-[#E5E7EB] flex justify-between items-center shrink-0">
              <h3 className="text-xl font-bold">Terms & Conditions</h3>
              <button onClick={() => setShowTerms(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-[#111111] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">{TERMS_TEXT}</pre>
            </div>
          </div>
        </div>
      )}

      {/* ==================== NICHE SELECTION MODAL ==================== */}
      {showNicheModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#111111]/70 backdrop-blur-sm">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="px-8 py-6 border-b border-[#E5E7EB] flex justify-between items-center shrink-0">
              <div>
                <h3 className="text-xl font-bold">Select Your Business Sector</h3>
                <p className="text-sm text-gray-500 mt-1">Choose the industry that best describes your business</p>
              </div>
              <button onClick={() => setShowNicheModal(false)} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-[#111111] hover:bg-gray-200 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
              {NICHE_CATEGORIES.map((cat, ci) => (
                <div key={ci}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF]">
                      {cat.icon}
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500">{cat.group}</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cat.items.map((item) => {
                      const isSelected = formData.businessType === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => { setFormData({...formData, businessType: item}); }}
                          className={`text-left p-4 border rounded-xl transition-all text-sm ${isSelected ? 'border-[#0066FF] bg-[#0066FF]/5 text-[#111111] font-semibold ring-1 ring-[#0066FF]/20' : 'border-[#E5E7EB] text-gray-600 hover:border-[#111111] hover:bg-gray-50'}`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-8 py-5 border-t border-[#E5E7EB] flex justify-end gap-3 shrink-0">
              <button onClick={() => setShowNicheModal(false)} className="px-6 py-3 border border-[#E5E7EB] text-sm font-medium text-gray-600 hover:border-[#111111] hover:text-[#111111] transition-colors rounded-xl">
                Cancel
              </button>
              <button onClick={() => setShowNicheModal(false)} className="px-6 py-3 bg-[#0066FF] text-white text-sm font-bold hover:bg-blue-600 transition-colors rounded-xl">
                Confirm Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
