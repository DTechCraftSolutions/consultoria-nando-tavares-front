interface ProceedButtonProps {
    isLoading: boolean;
    onClick?: () => void ;
  }
  

export function ProceedButton({isLoading, onClick}: ProceedButtonProps) {
    
    return (
        <button
        onClick={onClick}
        className="w-full md:w-3/5 hover:duration-500 py-3 mt-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md">
            {
                isLoading ? <div className="h-8 w-8 mx-auto border-4 border-l-transparent border-b-transparent border-r-zinc-900 border-t-zinc-900 animate-spin ease-linear rounded-full "> </div>
                : "Prosseguir"

            }
        </button>
    );
}