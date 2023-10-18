"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformedData = void 0;
const transformedData = (originalData) => {
    return originalData.map((item) => {
        const values = Object.values(item);
        return {
            [values[0].split(';')[0]]: values[0].split(';')[1],
        };
    });
};
exports.transformedData = transformedData;
//# sourceMappingURL=dataTransformation.js.map