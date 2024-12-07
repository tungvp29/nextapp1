"use client"

import { ReactNode } from "react";
import { Provider } from "react-redux"
import {store} from "@/components/Redux/store"


export function ProviderRedux({children}: {children: ReactNode}){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}