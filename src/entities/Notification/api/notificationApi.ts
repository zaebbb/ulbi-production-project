import { rtkApi } from 'shared/api/rtkApi'
import { type Notification } from '../model/types/notifications'

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
