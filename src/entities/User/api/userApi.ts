import { type JsonSettings } from '../model/types/jsonSettings'
import { type User } from '../model/types/user'
import { rtkApi } from '@/shared/api/rtkApi'

interface setJsonSettingArgs {
  userId: string
  jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, setJsonSettingArgs>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
  }),
})

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate
