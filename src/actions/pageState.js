import { pages } from './projectActions'

export function pageStateUpdate(pageState) {
    return {
        type: pages.PAGESTATE_UPDATE,
        payload: { pageState }
    }

}