
interface Mean {

}

const getMean = (data: any) => {
    const meanArr: any = [];
    const keys = Object.keys(data);
    keys.forEach(item => {
        let total = 0;
        for (let i = 0; i < data[item].length; i++) {
            total += +data[item][i];
        }
        meanArr.push((total / item.length).toFixed(3));
    })
    return meanArr;
}

const getMode = (data: any) => {
    const modeArr: any = [];
    const keys = Object.keys(data);
    keys.forEach(element => {
        const mode: any = {};
        let max = 0, count = 0;
        element = data[element]

        for (let i = 0; i < element.length; i++) {
            const item = element[i];

            if (mode[item]) {
                mode[item]++;
            } else {
                mode[item] = 1;
            }

            if (count < mode[item]) {
                max = +item;
                count = mode[item];
            }
        }
        modeArr.push(max.toFixed(3));
    })
    return modeArr;
}

const getMedian = (data: any) => {

    const medianArr: any = [];
    const keys = Object.keys(data);
    keys.forEach((item: any) => {
        let length = data[item].length;

        item = data[item].sort((a: any, b: any) => a - b);
        
        if (length % 2 === 0) {
            medianArr.push(((item[length / 2 - 1] + item[length / 2]) / 2).toFixed(3));            
        } else {
            medianArr.push((item[(length - 1) / 2]).toFixed(3));
        }


    })
    return medianArr;
}


const filterFlavanoids = (data: any) => {
    const filteredData: any = {};
    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        if (filteredData[item.Alcohol]) {
            filteredData[item.Alcohol] = [...filteredData[item.Alcohol], item.Flavanoids]
        } else {
            filteredData[item.Alcohol] = [item.Flavanoids]
        }
    }
    return filteredData;
}

const filterGamma = (data: any) => {
    const filteredData: any = {};
    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const gamma = item.Ash*item.Hue / item.Magnesium;
        if (filteredData[item.Alcohol]) {
            filteredData[item.Alcohol] = [...filteredData[item.Alcohol], gamma]
        } else {
            filteredData[item.Alcohol] = [gamma]
        }
    }
    return filteredData;
}



const getStatistics = (data: any) => {

    const mean = getMean(data);
    const mode = getMode(data);
    const median = getMedian(data);

    return { mean, mode, median };

}

export { getStatistics, filterFlavanoids, filterGamma };