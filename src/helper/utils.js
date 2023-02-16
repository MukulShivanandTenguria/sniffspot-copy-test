export const getSortedList = (spotlist) => {

    if (spotlist && spotlist.length > 0){
        return spotlist.sort((a,b) => b.price - a.price);
    }

    return spotlist;
}