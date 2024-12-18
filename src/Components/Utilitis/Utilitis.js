
const getStoreHeat = ()=>{
    const storedWishList = localStorage.getItem("Wish-list");
    if(storedWishList){
        const storedWish = JSON.parse(storedWishList);
        return storedWish;
    }
    else{
        return [];
    }
    
}
const addToStoredReadList = (id)=>{
    const storeRead = getStoreHeat();
    if(storeRead.includes(id)){
        alert("Aleady Exists");
      }
      else{
        storeRead.push(id);
        const storedWishStr = JSON.stringify(storeRead);
        localStorage.setItem("Wish-list", storedWishStr);
        alert("Added Successfully");

      }
}



export {addToStoredReadList}