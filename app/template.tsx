"use client";

import React, { useEffect, useState } from "react";

let isFirstMount = true;

export default function Template({ children }: { children: React.ReactNode }) {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (isFirstMount) {
            isFirstMount = false;
        } else {
            const timer = setTimeout(() => {
                setShouldAnimate(true);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className={shouldAnimate ? "route-enter" : ""}>
            {children}
        </div>
    );
}

