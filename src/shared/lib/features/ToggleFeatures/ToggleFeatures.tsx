import type React from 'react'
import { getFeatureFlags } from '../setGetFeatures'
import { type FeatureFlags } from '@/shared/types/featuresFlags'

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags
  on: React.ReactElement
  off: React.ReactElement
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const {
    on,
    feature,
    off,
  } = props

  if (getFeatureFlags(feature)) {
    return on
  }

  return off
}
