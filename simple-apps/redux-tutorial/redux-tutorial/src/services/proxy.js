const proxy = Object.freeze({
    "URL": "https://api.backendless.com",
    "APPLICATION_ID": "DC4BB865-019A-E495-FF26-687FC4426D00",
    "API_KEY": "39EC2F40-BBB0-4ABC-91EC-C48C87DA349B"
});

function getProxy() {
    return `${proxy.URL}/${proxy.APPLICATION_ID}/${proxy.API_KEY}`;
}
export default getProxy;