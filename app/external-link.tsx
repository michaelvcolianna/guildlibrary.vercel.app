/**
 * External link element.
 *
 * @param  string  href
 * @param  ReactNode  children
 * @return ReactNode
 */
export default function ExternalLink(
  { href, children }:
  {
    href: string,
    children: React.ReactNode
  }
) {
  return (
    <a href={href} className="inline-flex gap-1 items-center underline">
      {children}
      <svg className="h-4" aria-label="Opens an external site" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM320 313.4V176c0-8.8-7.2-16-16-16H166.6c-12.5 0-22.6 10.1-22.6 22.6c0 6 2.4 11.8 6.6 16L184 232l-66.3 66.3C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L248 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6z"/></svg>
    </a>
  )
}
