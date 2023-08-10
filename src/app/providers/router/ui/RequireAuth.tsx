import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import React, { useMemo } from 'react'
import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export const RequireAuth = (props: RequireAuthProps) => {
  const {
    children,
    roles,
  } = props
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some(role => {
      const hasRole = userRoles?.includes(role)

      return hasRole
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate
      to={RoutePath.main}
      state={{ from: location }}
      replace
    />
  }

  if (!hasRequiredRoles) {
    return <Navigate
      to={RoutePath.access_denied}
      state={{ from: location }}
      replace
    />
  }

  return children
}
