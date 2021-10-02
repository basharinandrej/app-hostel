import React, {ReactNode} from "react";

export type propsTypeForm = {
    title?: string,
    additionalClassNames?: string[]
    children: ReactNode
    onSubmit: (e: React.FormEvent) => void
}