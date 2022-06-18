
 export async function getParking() {
    let url = 'https://europe-west1-bootcamp222.cloudfunctions.net/stops-service/getParking';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

