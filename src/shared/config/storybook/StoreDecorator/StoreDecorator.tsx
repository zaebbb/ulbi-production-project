import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList
) => (StoryComponent: Story) => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  )
}
