

class LunchCoolerBox {

    // How do I hide this until called?
    items = ["sandwich", "granola bar", "water bottle"]
    //

    isOpen:boolean = false;
    contents:boolean = false;
    isFull: boolean = false;

    constructor( newItem?:string ){
    }

    openLid() {
        this.isOpen = true;
    };

    hasNoContents (){
        return this.contents;
    }

    hasContents(){
        if (this.isOpen == true){
            this.contents = true;
        }
    }

    insertContents(){
       this.isOpen && this.items.push()
       return this.items;
    }

    // removeItems (){
    //     this.isOpen && this.items(this.newItem)
    // }

    tippedUpsidedown() {
        this.contents = false;
    }

    closeLid() {
        this.isOpen = false;
    }

    maxItems() {
        if (this.items.length >= 3) {
            this.isFull = true;
        }
    }
}

const example1 = new LunchCoolerBox();
example1.openLid();
example1.hasContents();
example1.maxItems();

console.log("example1", example1)

const example2 = new LunchCoolerBox();
example2.openLid();
example2.maxItems();
example2.tippedUpsidedown();

console.log("Example 2", example2)
