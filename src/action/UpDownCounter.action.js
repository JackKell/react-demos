// NOTE: This action file is only an example on how to create action files.
// A component as dumb as an UpDownCounter should not be added to the global state.

export const INCREMENT =  "INCREMENT";
export const DECREMENT = "DECREMENT";

export function increment(delta) {
    return {
        type: INCREMENT,
        payload: delta,
    };
}

export function decrement(delta) {
    return {
        type: DECREMENT,
        payload: delta,
    };
}


// This would go at the bottom of the component
// const mapStateToProps = (state) => {
//     return {
//         value: state.counter.value,
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleUpClick: (delta) => {
//             dispatch(increment(delta));
//         },
//         handleDownClick: (delta) => {
//             dispatch(decrement(delta));
//         },
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UpDownCounter);