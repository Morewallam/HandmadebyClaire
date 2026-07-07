import {postType} from './postTypes'
import {categoryType} from './productCategory'
import { themeType } from './productThemes'
import { sizeType } from './sizeTypes'
import { eventType } from './eventType'
import { occasionType } from './occasionType'
import { storeType } from './storesType'
import frontPage from "./frontPage"
import { aboutPage } from './aboutDocument'
import { workshop } from './workshopDocument'

export const schemaTypes = [aboutPage,workshop,eventType,storeType, postType, categoryType, themeType,occasionType, sizeType, frontPage]
