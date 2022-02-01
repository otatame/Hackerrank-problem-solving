function timeConversion(s) {
    // Write your code here
    // Split the time format into arrays
    const splitTime = s.split(":");
    // Get the AM/PM
    const ampm = splitTime[2].substring(2, 4);
    // Get the Hour
    let hour = splitTime[0].substring(0, 2);
    const minute = splitTime[1].substring(0, 2);
    const second = splitTime[2].substring(0, 2);
    
    if(ampm === "AM" && hour === "12"){
        hour = "00";
        return `${hour}:${minute}:${second}`;
    }else if(ampm === "PM" && hour === "12"){
        return `${hour}:${minute}:${second}`;
    }else if (ampm === "PM"){
        let parse = parseInt(hour);
        let convert = parse + 12;
        return `${convert}:${minute}:${second}`;
    }else if (ampm === "AM"){
        return `${hour}:${minute}:${second}`;
    }
}

