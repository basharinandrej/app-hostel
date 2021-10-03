export const getFormattedButtonFilterClassNames = (additionalClassNames?: string[]): string => {
    const classNames = ['btn-filter']

    additionalClassNames?.length && classNames.push(...additionalClassNames)

    return classNames.join(' ')
}

export class propsTypeButtonFilter {
}