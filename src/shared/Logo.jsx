import markUrl from '../assets/brand/silk-inn-mark.webp'
import wordUrl from '../assets/brand/silk-inn-word.webp'
import { cn } from '../lib/cn.js'

/**
 * The Silk Inn logo, built from two stacked layers of the original artwork
 * (the orange butterfly and the "ilk Inn" lettering) so they can animate
 * separately. Size it with a height class; the width follows the artwork.
 *
 *   animation  'enter'   butterfly flutters in, lettering is written in
 *              'splash'  same, then the wings keep beating (transition screen)
 *              'none'    static
 */
function Logo({ animation = 'enter', className }) {
  const animated = animation !== 'none'

  return (
    <span role="img" aria-label="Silk Inn" className={cn('relative inline-block aspect-[760/548] shrink-0', className)}>
      <span
        className={cn(
          'absolute inset-0 origin-[34%_58%]',
          animation === 'splash' && 'animate-logo-flap motion-reduce:animate-none',
        )}
      >
        <img
          src={markUrl}
          alt=""
          draggable="false"
          className={cn(
            'size-full origin-[34%_58%] select-none',
            animated && 'animate-logo-mark motion-reduce:animate-none',
          )}
        />
      </span>
      <img
        src={wordUrl}
        alt=""
        draggable="false"
        className={cn(
          'absolute inset-0 size-full select-none',
          animated && 'animate-logo-word motion-reduce:animate-none',
        )}
      />
    </span>
  )
}

export default Logo
