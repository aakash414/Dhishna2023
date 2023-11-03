import clsx from 'clsx'

export function Container({ as, className, children }) {
  let Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 md:px-8', className)}>
      <div className="mx-auto max-w-2xl md:max-w-none">{children}</div>
    </Component>
  )
}
