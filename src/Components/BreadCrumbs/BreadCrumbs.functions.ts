export const getFormattedBreadCrumbsClassNames = (additionalClassNames?: string[]): string => {
    const classNames = ['breadcrumbs']

    additionalClassNames?.length && classNames.push(...additionalClassNames)

    return classNames.join(' ')
}