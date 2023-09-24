import { rtkApi } from '@/shared/api/rtkApi'
import { type FeatureFlags } from '@/shared/types/featuresFlags'

interface UpdateFeatureFlagsArgs {
  userId: string
  features: Partial<FeatureFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsArgs>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features,
        },
      }),
    }),
  }),
})

export const updateFeaturesFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate
