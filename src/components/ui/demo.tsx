import { TestimonialCarousel } from "@/components/ui/testimonial";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    description:
      "Amazing experience working with this team! The results exceeded my expectations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    description:
      "Highly recommended! Great service and professional approach.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    description:
      "Exceptional quality and professionalism. Would definitely work with them again.",
  },
];

export function TestimonialCarouselDemo() {
  return (
    <TestimonialCarousel
      testimonials={TESTIMONIAL_DATA}
      className="mx-auto max-w-2xl"
    />
  );
}
