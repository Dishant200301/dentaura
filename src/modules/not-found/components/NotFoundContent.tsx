import { Button } from "@/components/Button";

export const NotFoundContent = () => {
  return (
    <section className="min-h-screen bg-[#f5f4f7] px-6 py-12 md:py-20 flex items-center justify-center overflow-hidden">
      <div className="mx-auto flex max-w-[700px] flex-col items-center">
        {/* 404 with Tooth Image */}
        <div className="flex items-center justify-center scale-75 sm:scale-80 xl:scale-100 transition-transform">
          <span className="font-display text-[120px] sm:text-[180px] xl:text-[280px] font-medium leading-none text-[#0D9F6F]">4</span>
          <img
            src="/images/common/404.webp"
            alt="0"
            className="h-[100px] sm:h-[140px] xl:h-[180px] w-auto animate-float object-contain"
          />
          <span className="font-display text-[120px] sm:text-[180px] xl:text-[280px] font-medium leading-none text-[#0D9F6F]">4</span>
        </div>

        {/* White Card */}
        <div className="-mt-4 lg:mt-4 xl:-mt-8 w-full rounded-[24px] bg-white p-6 sm:p-10 text-center shadow-sm md:p-12">
          <h1 className="font-display text-[48px] sm:text-[64px] xl:text-[96px] font-medium leading-tight text-[#0D1B15]">
            OOPS!
          </h1>
          <p className="font-inter mx-auto mt-4 sm:mt-0 xl:mt-8 max-w-[500px] text-[16px] sm:text-[18px] leading-relaxed sm:leading-[31px] text-[#595e5c]">
            Uh-oh! It seems the page you're looking for has vanished. How about returning to our homepage or trying out the search feature?
          </p>
          <div className="mt-8 sm:mt-10">
            <Button to="/" variant="primary" showIcon={false} className="btn-slide h-[50px] sm:h-[51.2px] px-8 text-[16px] font-medium">
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
