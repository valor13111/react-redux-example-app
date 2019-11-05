export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const increment_by_5 = (number) => {
    return {
        type: 'INCREMENT_BY_5',
        payload: number
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const decrement_by_5 = (number) => {
    return {
        type: 'DECREMENT_BY_5',
        payload: number
    };
};