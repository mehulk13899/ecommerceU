import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    hats: 1,
    jackets: 3,
    sneakers: 2,
    women: 4,
    mens: 5
}

export const collectionSelect = state => state.shop;

export const shopItemSelect = createSelector(
    [collectionSelect],
    shop => shop.collections
)

export const collectionSelectForPreview = createSelector(
    [shopItemSelect],
    collections => Object.values(collections)
)

export const shopItemSelectCollectionPage = collectionUrlParam => createSelector(
    [shopItemSelect],
    collections => collections[collectionUrlParam]
)
