export default class SearchService {

    static getHeightResult(allList, height) {
        let res = [];
        for (let i = 0; i < allList.length; i++) {
            if (allList[i].height > height) {
                res.push(allList[i]);
            }
        }
        return res;
    }
};