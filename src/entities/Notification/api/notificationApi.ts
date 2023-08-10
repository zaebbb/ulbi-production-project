import { type Notification } from '../model/types/notifications'
import { rtkApi } from '@/shared/api/rtkApi'

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationsList: build.query<Notification[], null>({
      query: (limit) => ({
        url: '/notifications',
      }),
    }),
  }),
})

export const useNotifications =
  notificationApi.useGetNotificationsListQuery
