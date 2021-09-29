export const getFormattedFormClassNames = (additionalClassNames?: string[]): string => {
    const classNames = ['main-form']

    additionalClassNames?.length && classNames.push(...additionalClassNames)

    return classNames.join(' ')
}