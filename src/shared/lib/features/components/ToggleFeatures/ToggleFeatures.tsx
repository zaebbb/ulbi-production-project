import type React from 'react'
import { getFeatureFlags } from '../../lib/setGetFeatures'
import { type FeatureFlags } from '@/shared/types/featuresFlags'

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags
  off: React.ReactElement
  on: React.ReactElement
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const {
    feature,
    off,
    on,
  } = props

  if (getFeatureFlags(feature)) {
    return on
  }

  return off
}
