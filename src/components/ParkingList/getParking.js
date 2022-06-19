
export async function getParking(category, lat, lon) {
    let url = `https://europe-west1-bootcamp222.cloudfunctions.net/stops-service/api/poi?category=${category}&lat=${lat}&lon=${lon}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

