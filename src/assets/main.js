const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9k0tTsh_qStx0HPuPftSsg&part=snippet%2Cid&order=date&maxResults=8';

const content = null || document.getElementById("content");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '516e23f2dbmsh314b4f81c6f1efcp183e4cjsn6e141c5a1074',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {

    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 rounded-md
                    overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}    
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();






