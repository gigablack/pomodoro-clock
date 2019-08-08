import {ADD_ONE} from '../actions'

const addOne = title => {
    return {
        type: ADD_ONE,
        title
    }
}

export default addOne