import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const LOGO_DARK =
  "https://customer-assets.emergentagent.com/job_people-leadership/artifacts/sgzpl4ho_Intentio%20logo%20%28800%20x%20300%20px%29%283%29.png";

const BREVO_FORM_HTML = `
<div class="sib-form" style="text-align: center; background-color: transparent;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;max-width:100%;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">Il tuo messaggio non può essere convalidato.</span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Inter, sans-serif; color:#085229; background-color:#e7faf0; border-radius:0; border-color:#13ce66;max-width:100%;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">L'invio del tuo messaggio è avvenuto correttamente.</span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:transparent; max-width:100%; border-width:0; direction:ltr">
      <form id="sib-form" method="POST" action="https://89526534.sibforms.com/serve/MUIFABSToygkciKEV5jqoZZebyAFjq9Bh5Yy1Yzqz0fp-n_oL8JlFJNobwpATNwI7ey0i_2gzJzoqMnTz5sFdTUKwJgEufo0r8Ja68IPG5eH70REPiE9evaWNb_UTAcOjiV9WiLm39NwWsJW1F9W_caRPWPp-OOhFtseUHJysHTcMHirEUv1VpIZINK3pKglhEcRgzCasgN7West8w==" data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:500; text-align:left; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:Inter, sans-serif; color:#475569;" for="NOME">Nome e cognome</label>
                <div class="entry__field">
                  <input class="input" maxlength="200" type="text" id="NOME" name="NOME" autocomplete="off" placeholder="Nome e cognome" />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:500; text-align:left; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:Inter, sans-serif; color:#475569;" for="COGNOME">Azienda</label>
                <div class="entry__field">
                  <input class="input" maxlength="200" type="text" id="COGNOME" name="COGNOME" autocomplete="off" placeholder="Azienda" />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:500; text-align:left; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:Inter, sans-serif; color:#475569;" for="JOB_TITLE">Ruolo</label>
                <div class="entry__field">
                  <input class="input" maxlength="200" type="text" id="JOB_TITLE" name="JOB_TITLE" autocomplete="off" placeholder="Ruolo" />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:500; text-align:left; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:Inter, sans-serif; color:#475569;" for="EMAIL" data-required="*">Email *</label>
                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-sms-field sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:500; text-align:left; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:Inter, sans-serif; color:#475569;" for="SMS">Telefono (opzionale)</label>
                <div class="sib-sms-input-wrapper" style="direction:ltr">
                  <div class="sib-sms-input" data-placeholder="" data-required="" data-country-code="CH" data-whatsapp-country-code="CH" data-value="" data-whatsappvalue="" data-attributename="SMS">
                    <div class="entry__field">
                      <select class="input" name="SMS__COUNTRY_CODE">
                        <option value="+41">+41 CH</option>
                        <option value="+39">+39 IT</option>
                        <option value="+49">+49 DE</option>
                        <option value="+33">+33 FR</option>
                        <option value="+43">+43 AT</option>
                        <option value="+44">+44 GB</option>
                        <option value="+34">+34 ES</option>
                        <option value="+1">+1 US</option>
                      </select>
                    </div>
                    <div class="entry__field" style="width: 100%">
                      <input type="tel" class="input" id="SMS" name="SMS" autocomplete="off" placeholder="Numero di telefono" />
                    </div>
                  </div>
                  <div class="sib-sms-tooltip" style="display:none;">
                    <div class="sib-sms-tooltip__box">Il campo SMS deve contenere tra i 6 e i 19 caratteri e includere il prefisso del paese senza usare +/0</div>
                    <span class="sib-sms-tooltip__icon">?</span>
                  </div>
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
              <label class="entry__error entry__error--secondary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:500; text-align:left; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:Inter, sans-serif; color:#475569;" for="CONTACT_TIMEZONE">Obiettivo</label>
                <div class="entry__field">
                  <input class="input" maxlength="200" type="text" id="CONTACT_TIMEZONE" name="CONTACT_TIMEZONE" autocomplete="off" placeholder="Descrivi brevemente obiettivo e contesto..." style="height:96px !important;" />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-multiselect sib-multiselect-multichoice sib-form--blockPosition sib-form-block">
            <div class="form__entry">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:500; text-align:left; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:Inter, sans-serif; color:#475569;" for="lists">Tempistiche</label>
                <div class="entry__field">
                  <div class="input input_display input--multiselect input--centerText" style="padding-right:">0 selezionati</div>
                  <input id="lists" class="input" name="TEMPISTICHE[]" type="hidden" value="[]" />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:14px; text-align:left; font-family:Inter, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:0; border-color:#ff4949;"></label>
            </div>
            <div class="sib-menu" style="text-align:left">
              <div class="sib-menu__select sib-menu__selectTextAlign">
                <button type="button" class="clickable_link sib-menu__select-all-button">Seleziona tutto</button>
                <span class="sib-menu__separator">/</span>
                <button type="button" class="clickable_link sib-menu__clear-button">Cancella</button>
              </div>
              <ul class="sib-menu__item-list">
                <li class="sib-menu__item"><div class="entry__choice"><label class="sib-multiselect__label"><input type="checkbox" class="input_replaced" data-value="Entro un mese"><span class="checkbox checkbox_tick_positive"></span><span class="sib-multiselect__label-text">Entro un mese</span></label></div></li>
                <li class="sib-menu__item"><div class="entry__choice"><label class="sib-multiselect__label"><input type="checkbox" class="input_replaced" data-value="Entro 3 mesi"><span class="checkbox checkbox_tick_positive"></span><span class="sib-multiselect__label-text">Entro 3 mesi</span></label></div></li>
                <li class="sib-menu__item"><div class="entry__choice"><label class="sib-multiselect__label"><input type="checkbox" class="input_replaced" data-value="Entro 6 mesi"><span class="checkbox checkbox_tick_positive"></span><span class="sib-multiselect__label-text">Entro 6 mesi</span></label></div></li>
                <li class="sib-menu__item"><div class="entry__choice"><label class="sib-multiselect__label"><input type="checkbox" class="input_replaced" data-value="Da valutare"><span class="checkbox checkbox_tick_positive"></span><span class="sib-multiselect__label-text">Da valutare</span></label></div></li>
              </ul>
              <div class="sib-menu__apply">
                <button type="button" class="sib-menu__cancel-button clickable_link">Annulla</button>
                <button type="button" class="sib-menu__apply-button clickable_button">Applica</button>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 16px 0 8px;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:13px; text-align:left; font-weight:600; font-family:Inter, sans-serif; color:#FFFFFF; background-color:#4338CA; border-radius:0; border-width:0px; letter-spacing:0.08em;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512"><path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/></svg>
              INVIA RICHIESTA &rarr;
            </button>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block sib-divider-form-block"><div style="border: 0; border-bottom: 1px solid #E2E8F0"></div></div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form__declaration" style="direction:ltr">
            <div class="declaration-block-icon">
              <svg class="icon__SVG" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="svgIcon-sphere" viewBox="0 0 63 63"><path class="path1" d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z" fill="#0092FF"></path></symbol></defs></svg>
              <svg class="svgIcon-sphere" style="width:63px; height:63px;"><use xlink:href="#svgIcon-sphere"></use></svg>
            </div>
            <div style="font-size:13px; text-align:left; font-family:Inter, sans-serif; color:#94a3b8; background-color:transparent;">
              <p>Utilizziamo Brevo come piattaforma di marketing. Inviando questo modulo, accetti che i dati personali da te forniti vengano trasferiti a Brevo per il trattamento in conformità <a target="_blank" href="https://www.brevo.com/it/legal/privacypolicy/" style="color:#4338CA;">all'Informativa sulla privacy di Brevo.</a></p>
            </div>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="it">
      </form>
    </div>
  </div>
</div>
`;

function BrevoForm() {
  const containerRef = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load Brevo CSS
    if (!document.querySelector('link[href*="sibforms"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://sibforms.com/forms/end-form/build/sib-styles.css";
      document.head.appendChild(link);
    }

    // Set global config BEFORE script loads
    window.REQUIRED_CODE_ERROR_MESSAGE = "Scegli un prefisso paese";
    window.LOCALE = "it";
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE =
      "Le informazioni fornite non sono valide. Controlla il formato del campo e riprova.";
    window.REQUIRED_ERROR_MESSAGE = "Questo campo non può essere lasciato vuoto.";
    window.GENERIC_INVALID_MESSAGE =
      "Le informazioni fornite non sono valide. Controlla il formato del campo e riprova.";
    window.translation = {
      common: {
        selectedList: "{quantity} lista selezionata",
        selectedLists: "{quantity} liste selezionate",
        selectedOption: "{quantity} selezionato",
        selectedOptions: "{quantity} selezionati",
      },
    };
    window.AUTOHIDE = Boolean(0);

    // Delay script load to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (scriptLoaded.current) return;
      scriptLoaded.current = true;

      const existing = document.querySelector('script[src*="sibforms"]');
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.src = "https://sibforms.com/forms/end-form/build/main.js";
      document.body.appendChild(script);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid="brevo-contact-form"
      dangerouslySetInnerHTML={{ __html: BREVO_FORM_HTML }}
    />
  );
}

export default function ContactSection() {
  return (
    <>
      {/* CTA Band */}
      <section className="py-20 md:py-28 bg-indigo-700 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Tutto inizia da una conversazione.
            </h2>
            <p className="text-base md:text-lg text-indigo-200 max-w-xl mx-auto mb-8">
              Raccontaci il tuo contesto. Ti ricontattiamo con una proposta di primo passo concreto.
            </p>
            <a href="#contatti">
              <Button className="bg-white text-indigo-800 hover:bg-white/90 rounded-none px-10 py-3.5 text-sm font-medium tracking-wide uppercase">
                Richiedi un contatto <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contatti" data-testid="contact-section" className="py-24 md:py-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left intro */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-indigo-600 mb-5 block">
                Contatti
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Richiedi un contatto
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Risposta entro 1 giorno lavorativo con una proposta di primo passo concreto.
              </p>
              <div className="space-y-4 text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <a href="mailto:info@intentionova.ch" className="hover:text-indigo-700 transition-colors">info@intentionova.ch</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>+41 77 26 14 860</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                  <span>Via Clemente Maraini, 13<br />6900 Lugano CH</span>
                </div>
              </div>
            </motion.div>

            {/* Right form - Brevo embedded */}
            <div className="lg:col-span-8">
              <BrevoForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-testid="main-footer" className="bg-[#0C0820] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <img src={LOGO_DARK} alt="Intentio" className="h-20 mb-5" />
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                Evoluzione consapevole di persone, leadership e team.
                Società svizzera di consulenza organizzativa.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-400 mb-5">Contatti</h4>
              <div className="space-y-2.5 text-sm text-slate-500">
                <p className="font-medium text-slate-400">Intentio Nova Sagl</p>
                <p>Via Clemente Maraini, 13</p>
                <p>6900 Lugano CH</p>
                <a href="mailto:info@intentionova.ch" className="block hover:text-indigo-400 transition-colors">info@intentionova.ch</a>
                <p>CH: +41 77 26 14 860</p>
                <p>IT: +39 340 240 33 77</p>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-400 mb-5">Link</h4>
              <div className="space-y-2.5 text-sm text-slate-500">
                <a href="https://www.human-aimpact.ch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors" data-testid="footer-site-link">
                  human-aimpact.ch <ExternalLink className="h-3 w-3" />
                </a>
                <a href="/privacy" className="block hover:text-indigo-400 transition-colors">Privacy Policy</a>
                <a href="/cookie" className="block hover:text-indigo-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Intentio Nova sagl &middot; P.IVA CHE 489.716.728 &middot; Tutti i diritti riservati.</p>
            <p className="text-xs text-slate-600">Lugano, Svizzera</p>
          </div>
        </div>
      </footer>
    </>
  );
}
