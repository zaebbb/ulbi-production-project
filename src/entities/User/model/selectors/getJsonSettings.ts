import { type JsonSettings } from '../types/jsonSettings'
import { buildSelector } from '@/shared/lib/store'

const defaultJsonSettings: JsonSettings = {}

export const [useJsonSettings, getJsonSetting] =
  buildSelector((state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings)
