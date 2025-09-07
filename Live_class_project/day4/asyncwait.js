let Ticket = false;

let login = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Login successful");
            resolve();
        }, 3000);
    });
};

let search_train = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Train searching");
            resolve();
        }, 4000);
    });
};

let book_ticket = () => {
    return new Promise((resolve, reject) => {
        if (Ticket) {
            setTimeout(() => {
                console.log("Ticket booked successfully");
                resolve();
            }, 5000);
        } else {
            setTimeout(() => {
                reject("Ticket is not available");
            }, 5000);
        }
    });
};

let download_ticket = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ticket Downloading");
            resolve();
        }, 6000);
    });
};


async function processBooking() {
    try {
        await login();
        await search_train();
        await book_ticket();
        await download_ticket();
        console.log("Process completed..... ✅");
    } catch (error) {
        console.log(error);
    }
}

processBooking();