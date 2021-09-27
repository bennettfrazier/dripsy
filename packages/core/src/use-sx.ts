import { useCallback } from 'react'
import { useDripsyTheme } from './use-dripsy-theme'
import { SxProp } from './css/types'
import { css } from './css'
import { useBreakpointIndex } from './css/use-breakpoint-index'
import { StyleSheetCache } from './css/cache'

export function useSx() {
  const { theme } = useDripsyTheme()
  const breakpoint = useBreakpointIndex()

  return useCallback(
    (sx: SxProp, { fontFamily }: { fontFamily?: string } = {}) => {
      const themedStyle = css(
        sx,
        breakpoint
      )({
        theme,
        fontFamily,
      })
      const cachedStyleSheet = StyleSheetCache.get(themedStyle)

      return cachedStyleSheet
    },
    [breakpoint, theme]
  )
}
