// https://bit.dev/nsebhastian/tutorial-examples/jotai-stateless
// https://blog.bitsrc.io/redux-free-state-management-with-jotai-2c8f34a6a4a
// https://jotai.org/docs/utils/use-update-atom
// https://jotai.org/docs/basics/primitives#provider
// https://github.com/pmndrs/jotai/discussions/384
// https://twitter.com/dai_shi/status/1364203403023314952
// https://egghead.io/lessons/react-prevent-rerenders-and-add-functionality-with-jotai-write-only-atoms
// https://jotai.org/docs/basics/primitives
// https://anguscroll.com/just/just-remove
import { atom } from 'jotai';
import remove from 'just-remove';
import range from 'lodash.range';
import sumBy from 'lodash.sumby';

import data from './data.json';

const dataAtom = atom(range(data.length));

export const markersAtom = atom([]);
export const availableDataAtom = atom((get) => remove(get(dataAtom), get(markersAtom)));

// https://lodash.com/docs/4.17.15#sumBy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed (`.toFixed(2)`)
export const carbonAtom = atom((get) => sumBy(get(markersAtom), (i) => data[i].co2_saved));

export const housesAtom = atom((get) => sumBy(get(markersAtom), (i) => data[i].houses_built) ?? 0);
