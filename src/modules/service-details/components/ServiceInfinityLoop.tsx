interface ServiceInfinityLoopProps {
  loopImages: string[];
}

export const ServiceInfinityLoop = ({ loopImages }: ServiceInfinityLoopProps) => {
  if (!loopImages) return null;
  
  return (
    <div className="mt-12 lg:mt-20 overflow-hidden">
      <div className="flex animate-infinite-scroll gap-6 lg:gap-8">
        {[...loopImages, ...loopImages].map((img, idx) => (
          <div key={idx} className="h-[300px] sm:h-[450px] lg:h-[550px] w-[250px] sm:w-[350px] lg:w-[400px] shrink-0 overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
