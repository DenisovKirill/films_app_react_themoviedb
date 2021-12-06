export const getData = async (url) =>  {
    try {
        const data = await fetch(url);
        const formattedData = await data.json();
        return formattedData;
    }
    catch {
        alert('Error');
        return [];
    }
};
