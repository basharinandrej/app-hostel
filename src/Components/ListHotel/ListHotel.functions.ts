export const getFormattedListHotelClassNames = (additionalClassNames?: string[]): string => {
    const classNames = ['list-hotel']

    additionalClassNames?.length && classNames.push(...additionalClassNames)

    return classNames.join(' ')
}