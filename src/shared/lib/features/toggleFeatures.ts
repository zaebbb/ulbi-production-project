import { getFeatureFlags } from '@/shared/lib/features/setGetFeatures'
import { type FeatureFlags } from '@/shared/types/featuresFlags'

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags
  on: () => T
  off: () => T
}

export const toggleFeatures = <T>(options: ToggleFeaturesOptions<T>): T => {
  const {
    on,
    off,
    name,
  } = options

  if (getFeatureFlags(name)) {
    return on()
  }

  return off()
}
