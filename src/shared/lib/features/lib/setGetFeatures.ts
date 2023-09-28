import { type FeatureFlags } from '../../../types/featuresFlags'
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage'

const defaultFeatures = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
}

let featuresFlags: FeatureFlags = {
  ...defaultFeatures,
}

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featuresFlags = newFeatureFlags
  }
}

export const getFeatureFlags = (flag: keyof FeatureFlags) => featuresFlags[flag]

export const getAllFeatureFlags = () => featuresFlags
