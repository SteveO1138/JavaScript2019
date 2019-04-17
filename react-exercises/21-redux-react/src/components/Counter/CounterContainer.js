/**
 * You will be creating a container for the Counter component.
 * A container connects a component to t
 * he Redux store.
 * @see https://redux.js.org/basics/usagewithreact#implementing-container-components
 */

import { connect } from "react-redux";
import Counter from "./Counter";
import { decreaseCount, increaseCount } from "../../actions";

/**
 * Import the actions that you need
 */

/**
 * Complete this function. You may need to pass in arguements
 */
function mapStateToProps(state) {
    return{
    count: state.count
};
}

/**
 * Complete this function. You may need to pass in arguements
 */
function mapDispatchToProps(dispatch) {
    return{

        decreaseCount: () => dispatch(decreaseCount()),
        increaseCount: () => dispatch(decreaseCount())
   };


/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ounter)};