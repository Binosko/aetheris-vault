export default function NotFound() {
  const returnHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full border border-[#111111] p-12 text-center bg-white shadow-sm">
        <h1 className="text-xl font-bold mb-6 tracking-tight uppercase">ERROR 404</h1>
        <p className="text-md mb-8 font-medium leading-relaxed">
          Our landing page is only 1 page, how the f*ck did you get here? Gett'outta ere men.
        </p>
        <button 
          onClick={returnHome}
          className="bg-[#111111] text-white px-6 py-3 font-semibold text-sm hover:bg-[#0066FF] transition-colors duration-300 w-full"
        >
          Return to Safe Boundary
        </button>
      </div>
    </div>
  );
}
