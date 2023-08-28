import React from 'react'
import { useParams } from 'react-router-dom'
import cls from './ProfilePage.module.scss'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

interface ProfilePageProps {
  className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()

  return (
    <Page
      className={classNames(cls.ProfilePage, {}, [className])}
      data-testid={'ProfilePage'}
    >
      <EditableProfileCard id={String(id)} />
    </Page>
  )
}

export default ProfilePage
