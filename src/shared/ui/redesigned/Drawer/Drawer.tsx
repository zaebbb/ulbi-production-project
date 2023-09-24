import React, { memo } from 'react'
import cls from './Drawer.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider'
import { toggleFeatures } from '@/shared/lib/features'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Overlay } from '@/shared/ui/redesigned/Overlay/Overlay'
import { Portal } from '@/shared/ui/redesigned/Portal/Portal'

interface DrawerProps {
  className?: string
  children: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const height = window.innerHeight - 100

export const DrawerContent: React.FC<DrawerProps> = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props
  const {
    Gesture,
    Spring,
  } = useAnimationLibs()

  const {
    useSpring,
    config,
    a,
  } = Spring

  const {
    useDrag,
  } = Gesture

  const { theme } = useTheme()
  const [{ y }, api] = useSpring(() => ({ y: height }))

  const openDrawer = React.useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  React.useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [isOpen, openDrawer])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: {
        top: 0,
      },
      rubberband: true,
    }
  )

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  if (!isOpen) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={
        classNames(
          cls.Drawer,
          mods,
          [
            className,
            theme,
            'app_drawer',
            toggleFeatures({
              name: 'isAppRedesigned',
              on: () => cls.drawerRedesigned,
              off: () => cls.drawerDeprecated,
            }),
          ]
        )
      }
      >
        <Overlay onClick={close} />
        <a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </a.div>
      </div>
    </Portal>
  )
})

const DrawerAsync = (props: DrawerProps) => {
  const {
    isLoaded,
  } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
}

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  )
}
