import React from "react";

export type propsTypeInput = {
    legend: string,
    type: 'text' | 'email' | 'password' | 'number' | 'date',
    value: string,
    isValid?: boolean,
    isDirty: boolean,
    isRequired: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    additionalClassNames?: string[],
    errorMessage?: string,
    maxLength?: number,
    max?: string,
    min?: string,
}