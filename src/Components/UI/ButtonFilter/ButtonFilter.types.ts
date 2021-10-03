import React from "react";

export type propsTypeButtonFilter = {
    text: string
    additionalClassNames?: string[]
    onClick: (e: React.MouseEvent) => void
    statusSort: 'none' | 'asc' | 'desc'
}