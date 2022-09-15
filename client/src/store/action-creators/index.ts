import * as doctorActionCreators from './doctors'
import * as userActionCreators from './user'
export default {
    ...doctorActionCreators,
    ...userActionCreators
}
