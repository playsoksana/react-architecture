const head = (arr) => {
    if (arr && arr.length > 0) {
        return arr[0];
    }

    return null;
};

const last = (arr) => {
    if (arr && arr.length > 0) {
        return arr[arr.length - 1];
    }

    return null;
};

const findByFieldName = (arr, fieldName, value) => {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i += 1) {
            const obj = arr[i] || {};

            if (obj[fieldName] === value) {
                return obj;
            }
        }
    }

    return null;
};

const findOneById = (arr, objId) => {
    if (arr) {
        for (let i = 0; i < arr.length; i += 1) {
            const obj = arr[i];

            if (obj.id === objId) {
                return obj;
            }
        }
    }

    return null;
};

export default {
    head,
    last,
    findByFieldName,
    findOneById,
};
