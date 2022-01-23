function distanceFromHqInBlocks(street){
    if(street > 42){
        return street-42
    }
    else{
        return 42-street
    }
}

function distanceFromHqInFeet(street){
    const blocks = distanceFromHqInBlocks(street)
    return blocks*264
}

function distanceTravelledInFeet(start, finish){
    
    return (start > finish ? (start-finish)*264 : (finish-start)*264)
}

function calculatesFarePrice(start, finish){
    const feetCovered = distanceTravelledInFeet(start,finish)
    // feetpayable = feetCovered-400
    if(feetCovered <= 400){
        return 0
    }
    else if(feetCovered > 400 && feetCovered <= 2000){
        return 0.02 * (feetCovered - 400);
    }
    else if(feetCovered > 2000 && feetCovered < 2500){
        return 25
    }
    else{
        return "cannot travel that far"
    }
}
