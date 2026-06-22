/**
 * TESTIMONIALS — editable carousel content.
 * CMS-READY: model as a `testimonial` document { quote, author, event, city }.
 */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  event: string;
  city: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", quote: "They took complete responsibility for our wedding — we genuinely just enjoyed the day. Every detail was flawless.", author: "Sruthi & Karthik", event: "Wedding", city: "Hyderabad" },
  { id: "t2", quote: "The haldi and stage décor were beyond what we imagined. Guests are still talking about the entry!", author: "Divya R.", event: "Haldi & Reception", city: "Vijayawada" },
  { id: "t3", quote: "Managed our college fest end to end — sound, stage, crowd flow. Super professional team.", author: "Student Council", event: "College Fest", city: "Hyderabad" },
  { id: "t4", quote: "Our product launch looked premium and ran on time. Chaitanya's team is reliable and creative.", author: "Rohit Menon", event: "Corporate Launch", city: "Vijayawada" },
  { id: "t5", quote: "Booked my son's first birthday over WhatsApp in minutes. The theme was adorable and stress-free.", author: "Ananya P.", event: "Birthday Party", city: "Hyderabad" },
];
