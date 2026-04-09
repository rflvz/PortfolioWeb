import * as React from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number | string;
  name: string;
  avatar: string;
  description: string;
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
  showArrows?: boolean;
  showDots?: boolean;
}

const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, showArrows = true, showDots = true, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [exitX, setExitX] = React.useState<number>(0);

    const goToNext = React.useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const goToPrev = React.useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    const handleDragEnd = (
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x);
        setTimeout(() => {
          if (info.offset.x > 0) {
            goToPrev();
          } else {
            goToNext();
          }
          setExitX(0);
        }, 200);
      }
    };

    if (!testimonials.length) return null;

    return (
      <div
        ref={ref}
        className={cn("flex h-[42rem] w-full items-center justify-center", className)}
        {...props}
      >
        <div className="relative h-[38rem] w-full max-w-[36rem]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex;
            const isPrevCard = index === (currentIndex + 1) % testimonials.length;
            const isNextCard = index === (currentIndex + 2) % testimonials.length;

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null;

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute h-full w-full cursor-grab rounded-2xl active:cursor-grabbing",
                  "bg-[linear-gradient(160deg,#2a1618_0%,#1d1113_52%,#140c0f_100%)] shadow-2xl",
                  "border border-[rgba(196,31,58,0.42)]",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.75 : 0.55,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-4 flex justify-between px-5">
                    <motion.button
                      type="button"
                      onClick={goToPrev}
                      whileHover={{ scale: 1.08, x: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(196,31,58,0.45)] bg-[rgba(196,31,58,0.14)] text-[rgba(232,221,208,0.88)] backdrop-blur-sm transition-colors hover:bg-[rgba(196,31,58,0.24)]"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={goToNext}
                      whileHover={{ scale: 1.08, x: 1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(196,31,58,0.45)] bg-[rgba(196,31,58,0.14)] text-[rgba(232,221,208,0.88)] backdrop-blur-sm transition-colors hover:bg-[rgba(196,31,58,0.24)]"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                )}

                <div className="flex h-full flex-col items-center justify-center gap-6 p-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(196,31,58,0.45)] bg-[rgba(196,31,58,0.16)]">
                    <User className="h-10 w-10 text-[rgba(232,221,208,0.94)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[rgba(232,221,208,0.96)]">{testimonial.name}</h3>
                  <p className="max-w-[30rem] text-center text-base leading-relaxed text-[rgba(232,221,208,0.82)]">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {showDots && (
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2.5">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-[rgba(196,31,58,0.95)]"
                      : "bg-[rgba(196,31,58,0.35)]",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

TestimonialCarousel.displayName = "TestimonialCarousel";

export { TestimonialCarousel, type Testimonial };
