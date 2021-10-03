export const getHTMLFor = (legend: string): string => {
    return legend +'_'+ Math.random().toString()
}

export const getFormattedInputClassNames = (isError: boolean, additionalClassNames?: string[]): string => {
    const classNames = ['input']
    if (isError) classNames.push('input--error')

    additionalClassNames?.length && classNames.push(...additionalClassNames)

    return classNames.join(' ')
}

export const loginRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
export const passwordRegExp = /[а-яё]/i