import React from "react";

export type propsTypeButtonFilter = {
    text: string
    additionalClassNames?: string[]
    onClick: (e: React.MouseEvent) => void
    statusSortRating?: 'none' | 'asc' | 'desc'
}