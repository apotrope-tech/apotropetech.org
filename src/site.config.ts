export const site = {
  name: 'Apotrope',
  // true hides the whole site from search engines. Anyone with the link can still open it.
  noindex: true,
  email: 'apotrope.tech@gmail.com',

  // false hides the Product section's content behind a "Coming soon" banner while the team reworks it.
  // Set it back to true to show the clamp player and the Monitor and Guard tiers again. Nothing was deleted.
  showProduct: false,
  // Same for the Progress section: false shows a "Coming soon" banner instead of the timeline and prototype notice.
  showProgress: false,

  // The contact form sends to `email` through FormSubmit (formsubmit.co), so no server is needed.
  // The first message sent from the live site triggers an "Activate form" email to the address above. Click it once.
  formEndpoint: 'https://formsubmit.co/ajax/apotrope.tech@gmail.com',

  // TODO: paste a booking link (for example a Google Calendar appointment schedule) and a "Book a call" button appears.
  bookingUrl: '',

  // TODO: paste each profile's full URL. Empty ones show as "Soon".
  social: {
    instagram: '',
    linkedin: '',
    youtube: '',
  },
};
