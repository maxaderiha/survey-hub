import sendgrid from 'sendgrid';
import { SEND_GRID_KEY } from 'config';

const { 
  ClickTracking,
  Content,
  Email,
  Mail,
  TrackingSettings,
  Personalization,
} = sendgrid.mail;

export class Mailer extends Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(SEND_GRID_KEY);
    this.recipients = this.getFormatedAddresses(recipients);
    this.from_email = new Email('no-reply@surveyhub.com');
    this.body = new Content('text/html', content);
    this.subject = subject;

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  getFormatedAddresses(recipients) {
    return recipients.map(({ email }) => new Email(email));
  }

  addClickTracking() {
    const trackingSettings = new TrackingSettings();
    const clickTracking = new ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalization = new Personalization();

    this.recipients.forEach(recipient => personalization.addTo(recipient));
    this.addPersonalization(personalization);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });

    return this.sgApi.API(request);
  }
}
