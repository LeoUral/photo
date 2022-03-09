/** Определяем количество галерей с фотографиями
 * и количество фотографий в галереях
 * результат формируется в массив массивов
 * this.arrGallary
 */


class SearchImage {
    constructor() {
        this.size = 1841; // 1798
        this.arrGallary = [];
    }

    async searchGallary() {
        let result = true;
        let result2 = true;
        let numberGal = 0;
        let numberFalse = 0;
        let quantity = 0;

        if (this.arrGallary.length > 0) return this.arrGallary;

        while (result2) {
            result = true;
            quantity = 0;

            while (result) {
                let response = await fetch(`../image/gal_${numberGal}/img_${quantity}.jpg`);
                let blob = await response.blob();

                // console.log(`BLOB >>>`, blob.size); // test
                if (blob.size > this.size) {
                    ++quantity;
                    numberFalse = 0;
                } else {
                    ++numberFalse;
                    result = false;
                    console.log(`numberFalse ::: `, numberFalse); // test
                }
            } // first WHILE - end

            if (numberFalse >= 2) {
                result2 = false;
                // console.log(this.arrGallary + ' < RESULT RUN SEARCH GALLARY end IMAGE'); // test                
            } else {
                this.arrGallary = [...this.arrGallary, [numberGal, quantity]];
                // console.log(numberGal + ' <== GALLARY ' + quantity + ' <== IMAGE in gallary'); // test                
                ++numberGal;
            }
        } // second WHILE end

        return this.arrGallary;
    }

}
export default new SearchImage();