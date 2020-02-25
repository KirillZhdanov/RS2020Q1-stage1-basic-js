module.exports = class DepthCalculator {
    calculateDepth(arr,depth=1) {
        for(const element of arr){
            if(element instanceof Array){
                depth++;
                arr=arr.flat(1);
                return this.calculateDepth(arr,depth);
            }
        }
        return depth;
    }
};
