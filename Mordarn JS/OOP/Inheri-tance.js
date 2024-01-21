class Parent {
  constructor(father, mother) {
    this.father = father;
    this.mother = mother;
  }

  totalAsset() {
    return this.father + this.mother;
  }
}

class Siblings extends Parent {
  childAsset() {
    const parent = this.totalAsset();
    const brother = 200;

    return parent + brother;
  }

  rentAssetSister() {
    const sister = 100;
    const total = this.childAsset();

    return total - sister;
  }
}

const asset = new Siblings(20, 15);
console.log(asset.childAsset());
console.log(asset.totalAsset());
console.log(asset.rentAssetSister());
// console.log(asset.childAsset())
