import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        // nghia la muon su dung css cua thang children ta bat buoc phai khai bao cn , className cua children khi lay vao
        <div className={cn("mx-auto w-full max-w-screen-2xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;