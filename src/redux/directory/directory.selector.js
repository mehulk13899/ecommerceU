import { createSelector } from 'reselect'

export const selectDirectory = state => state.directory;

export const selectDirectorSections = createSelector(
    [selectDirectory],
    directory => directory.sections
)



