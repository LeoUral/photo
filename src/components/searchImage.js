
class SearchImage {
    constructor() {
        this.size = 1798;
        this.quantity = 0;
    }


    async searchGallary(number) {
        let result = true;

        while (result) {
            let gal = await fetch(`../image/gal_${number}/img_${this.quantity}.jpg`);
            let blob = await gal.blob();

            console.log(blob.size);
            if (blob.size > this.size) {
                console.log('FILE IMAGE REALLY');
                ++this.quantity;
                console.log(this.quantity);
            } else {
                console.log('FILE NOT FOUND!!!');
                result = false;
                return console.log(this.quantity + ' <<< QUANTITY IMAGE IN GALLARY');
            }
        }
    }

}
export default new SearchImage();