const galleryImages = [
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559839734-2b71f1e3c77d?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606811919082-9907f7f32924?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1470&auto=format&fit=crop",
];

export const GalleryGrid = () => {
  return (
    <div className="mt-10 lg:mt-16 grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((src, i) => (
        <div key={i} className="group relative overflow-hidden rounded-2xl lg:rounded-3xl h-[280px] md:h-[320px] lg:h-[350px]">
          <img 
            src={src} 
            alt={`Gallery ${i}`} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <span className="text-white font-bold text-[14px] lg:text-base">View Larger</span>
          </div>
        </div>
      ))}
    </div>
  );
};
