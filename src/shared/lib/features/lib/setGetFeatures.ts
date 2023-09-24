import { type FeatureFlags } from '../../../types/featuresFlags'

let featuresFlags: FeatureFlags = {}

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featuresFlags = newFeatureFlags
  }
}

export const getFeatureFlags = (flag: keyof FeatureFlags) => featuresFlags[flag]

export const getAllFeatureFlags = () => featuresFlags
