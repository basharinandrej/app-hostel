export const getFormattedButtonClassNames = (type?: string, additionalClassNames?: string[]) => {
    const classNames = []

    switch (type) {
        case 'small':
            classNames.push('btn btn--small')
            additionalClassNames?.length && classNames.push(...additionalClassNames)
            break;
        case 'big':
            classNames.push('btn btn--big')
            additionalClassNames?.length && classNames.push(...additionalClassNames)
            break;
        default:
            classNames.push('btn')
            additionalClassNames?.length && classNames.push(...additionalClassNames)
    }

    return classNames.join(' ')
}