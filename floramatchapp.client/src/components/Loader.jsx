import React from "react";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-[150px]">
            <div className="relative w-22 h-22">
                <div className="absolute inset-0 rounded-full border-5 border-t-[var(--color-primary-transparent)] border-b-[var(--color-primary-transparent)]  border-l-transparent border-r-transparent animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-[var(--color-primary-transparent-3)]"></div>
                <div className="absolute inset-0 flex items-center justify-center font-display text-[var(--color-muted] text-sm">
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default Loader;
